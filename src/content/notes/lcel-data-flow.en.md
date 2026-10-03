---
title: 'LCEL: what does the pipe connect?'
description: 'Read a chain through its inputs and outputs, then distinguish sequence, parallel branches, batching and streaming.'
date: 2026-10-03
tags: [langchain, lcel, learning]
type: note
status: in-progress
language: en
translationKey: lcel-data-flow
---

Adapted from my LCEL learning note. The question I want to answer is what the data becomes after each step.

## Start with inputs and outputs

LCEL composes processing steps through the Runnable interface. In `prompt | model | output_parser`, a template produces a prompt, the model returns a message, and a parser produces the next required representation.

The pipe does not repair missing fields or incompatible inputs. This small example needs `langchain-core`, but no model credentials:

```python
from langchain_core.runnables import RunnableLambda

normalize = RunnableLambda(lambda text: text.strip())
describe = RunnableLambda(
    lambda text: {"text": text, "length": len(text)}
)
chain = normalize | describe

print(chain.invoke("  RAG  "))
# {"text": "RAG", "length": 3}
```

The first step returns a string; the second returns a dictionary. A third step would receive that dictionary. Following this change is more useful than memorizing the pipe syntax. See [RunnableSequence](https://reference.langchain.com/python/langchain-core/runnables/base/RunnableSequence).

## Three execution shapes

A sequence has dependencies. Independent branches can instead be declared with [RunnableParallel](https://reference.langchain.com/python/langchain-core/runnables/base/RunnableParallel):

```python
from langchain_core.runnables import RunnableParallel

branches = RunnableParallel(
    uppercase=RunnableLambda(lambda text: text.upper()),
    length=RunnableLambda(lambda text: len(text)),
)

print(branches.invoke("RAG"))
# {"uppercase": "RAG", "length": 3}
```

Both branches receive the same input. Neither consumes the other's output.

Batching applies a chain to several inputs. Asynchronous invocation changes how I await a call, not the chain's dependencies. Concurrency still has resource and rate-limit constraints.

## Streaming has boundaries

An intermediate step that needs complete input can delay streaming. RunnableLambda does not implement streaming transformation by default. A final streaming call alone does not guarantee immediate output.

Retries, fallbacks and tracing also need configuration. Retrying a step that writes data can repeat its side effects; pipe syntax does not make that safe automatically.

## How I read a chain now

Write down each input and output, identify dependencies, then examine failures and partial results. My next exercise is a retrieval chain with one retrieval branch and one question passthrough branch. The aim is to explain the data at every boundary, rather than compress everything into one line.
