---
title: 'RAG: separate retrieval, ranking and context'
description: 'Locate where evidence gets lost before adding hybrid retrieval, a reranker or a context selector.'
date: 2026-10-03
tags: [rag, retrieval, learning]
type: note
status: in-progress
language: en
translationKey: rag-retrieval-ranking-context
---

Adapted from my learning note on RAG. Experiment numbers will wait until I can check their original evaluation records.

## Trace the evidence first

A wrong answer does not tell me which component failed. I need to follow the path:

```text
Documents → chunks and index → candidates → ranking → context selection → answer
```

Chunking happens before retrieval. My list of optimization ideas should not be confused with execution order.

Suppose a question asks how many retries follow a timeout. If the relevant paragraph never enters the candidate list, inspect indexing and retrieval. If it ranks eighteenth but only five candidates are used, inspect ranking and truncation. If its number survives but its conditions disappear, inspect chunk boundaries and context selection. If the complete evidence reaches the model, inspect how the answer uses it.

This is a hypothetical diagnostic example, not a measured project result.

## Different tools address different failures

BM25 matches terms; dense retrieval can retrieve differently worded but semantically related passages. Their value together depends on whether they recover complementary evidence. Adding another retriever is not automatically an improvement.

[RRF](https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking) combines ranks rather than directly adding incomparable raw scores. It still requires deduplication and cannot recover evidence missed by every input retriever.

A cross-encoder scores query–passage pairs and commonly reranks a limited candidate set after retrieval. See the [retrieve and rerank guide](https://www.sbert.net/examples/sentence_transformer/applications/retrieve_rerank/README.html). It can improve ordering; it cannot introduce a missing candidate. Relevance is also not a probability of factual correctness: an obsolete document can match a question closely.

## Shorter context is not necessarily better

Small chunks may separate a condition from its conclusion. Large chunks may carry irrelevant material. Structure-aware chunking can help preserve meaning, but long sections and repeated headings still need care.

Context selection can remove duplicates and enforce a length budget. It can also accidentally discard qualifications. Keeping the number while removing the condition may make an answer confidently wrong.

## What I want to record next

For each evaluation question, keep the expected evidence, candidates, ranking, final context and answer. Change one component at a time against a simple baseline.

Check whether evidence was retrieved, ranked within the selected range, preserved in context and correctly used in the answer. Record latency and model calls alongside quality.

The open questions are which query types benefit from reranking, and when context reduction starts losing necessary conditions. Concrete failures and where they were resolved will tell me more than a blanket claim that the system improved.
