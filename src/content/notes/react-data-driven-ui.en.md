---
title: 'React: from data to a list and a click'
description: 'A small tag picker connects props, state, list rendering, conditional rendering and stable keys.'
date: 2026-10-03
tags: [react, frontend, learning]
type: note
status: ready
language: en
translationKey: react-data-driven-ui
---

The original learning note was written on May 25, 2026. This public version adds an interactive example.

## What data-driven UI means to me

`UI = f(data)` means describing the picture for the current data. For a tag picker, the relevant data is the list of tags and the selected identifier. I can keep that identifier in state and let rendering determine the result.

## One small example

```tsx
import { useState } from 'react'

const technologies = [
  { id: 'react', label: 'React' },
  { id: 'next', label: 'Next.js' },
  { id: 'typescript', label: 'TypeScript' }
]

function Selection({ label }: { label: string }) {
  return <p>Selected: {label}</p>
}

export default function TechnologyPicker() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = technologies.find((item) => item.id === selectedId)

  return (
    <section>
      {technologies.map((item) => (
        <button
          type='button'
          key={item.id}
          aria-pressed={selectedId === item.id}
          onClick={() => setSelectedId(item.id)}
        >
          {item.label}
        </button>
      ))}
      {selected ? <Selection label={selected.label} /> : <p>Choose a tag</p>}
    </section>
  )
}
```

This example targets a client-side React app. When it is the interactive entry point imported by a Server Component in the Next.js App Router, add the [`'use client'` directive](https://nextjs.org/docs/app/api-reference/directives/use-client) to establish the client boundary.

The array becomes buttons through `map`. A prop carries the selected label into the child. A condition chooses between the selection and the prompt.

## Follow one click

Initially, the identifier is null. Clicking a button calls the state setter. A subsequent render finds the selected item and displays its label. Assigning an ordinary local variable would not retain the value across renders and trigger this update. See [State: A Component's Memory](https://react.dev/learn/state-a-components-memory).

## One-way data can still support child events

A child receives read-only props. It can call a callback supplied by its parent to report an event; the parent updates its state and passes fresh data down. My original wording that data “never goes back” was too absolute. See [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component).

## Identity should survive reordering

A stable key lets React match items after insertion, deletion or reordering. The example uses identifiers from the data, unique among siblings. Generating a random key during rendering defeats that purpose; a position is also a poor identity for a reorderable list. See [Rendering Lists](https://react.dev/learn/rendering-lists).

## An exercise to keep

Add a clear-selection button and reverse the tag order. Clearing should restore the prompt; reversing should preserve the selected technology. Then explain which data changed, which component owns it and how the new interface follows from it.
