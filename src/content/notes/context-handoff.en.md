---
title: 'How to hand off a task when a conversation gets long'
description: 'A useful handoff preserves actionable state: the goal, files, verified results, unresolved questions and the next step.'
date: 2026-10-03
tags: [ai, context, workflow, learning]
type: note
status: in-progress
language: en
translationKey: context-handoff
---

Adapted from my learning note about long conversations and task drift. This is a collaboration method, not a guarantee that a fresh conversation will be correct.

## Opening a new conversation is the easy part

A conversation can contain requirements, abandoned designs, fixes and acceptance checks. Copying the entire transcript still leaves the next assistant to decide which statements describe the current task.

“The page is fixed” is insufficient. Where is the change? What was checked? What remains untested? I want the handoff to preserve the state needed to continue.

## A reusable template

Replace the placeholders with facts; this is not a report about an actual project's state.

```text
Goal: [the user's intended result]
Current task: [the specific work in this round]
Confirmed constraints: [scope, preserved behavior, authorization]

Workspace: [repository, branch, relevant files]
Changes: [what is done; whether it is committed]
Verification: [checks actually run, results, uncovered areas]

Open problem: [observed behavior, reproduction, evidence]
Ruled-out approaches: [what was tried and why it was abandoned]
Next step: [one concrete action to begin with]
Completion criteria: [the user-observable result]
```

A copy edit needs little handoff text. A debugging task spanning several files needs more. Planning a test and passing a test must remain distinct statements.

A conversation identifier is useful only when the receiving tool can actually access that conversation. Otherwise, provide the relevant content or an accessible handoff document.

## Recheck facts that can change

A handoff is a snapshot. Someone may have changed the branch or files, or stopped a service. Check the working state and the necessary runtime evidence before proceeding.

If the remaining task is a mobile check, start by reproducing it at a mobile viewport. Do not turn it into another redesign without a reason. If the files disagree with the handoff, establish the difference first.

## When a handoff helps

A completed phase is a natural boundary. Repeatedly overlooking constraints or retrying rejected approaches can also justify pausing to consolidate the task.

Slowness alone does not prove that context length is the cause: tools, networking and service load can also contribute. A new window is not a universal remedy.

I want to capture decisions and verification results as they occur, rather than relying on a perfect summary after the conversation has become confusing.

## What remains open

How short can a handoff be while remaining useful? Which omissions cause work to be repeated? On the next real handoff, I want to record what the new conversation asks first and use those gaps to improve this template.
