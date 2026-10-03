---
title: 'React 数据驱动界面：从一组标签到一次点击'
description: '用一个技术标签选择器理解属性、状态、列表渲染与条件渲染，以及为什么列表需要稳定标识。'
date: 2026-10-03
tags: [react, frontend, learning]
type: note
status: ready
language: zh
---

原笔记《React 数据驱动 UI》记于 2026 年 5 月 25 日，这里补上交互例子，并整理成公开版本。

## “界面是数据的函数”怎么理解

我把 `UI = f(data)`（界面由数据计算得到）理解为：先描述“当前数据对应什么画面”，数据变化后，再由组件算出新的界面。

比如一排技术标签，数据是标签列表，以及当前选中哪个标签。通常不需要在点击时手动查找所有按钮、清除颜色、再给其中一个染色。把选中项存在 state（状态）里，让渲染逻辑决定样式就可以了。

## 把三个模式放进一个例子

```tsx
import { useState } from 'react'

const technologies = [
  { id: 'react', label: 'React' },
  { id: 'next', label: 'Next.js' },
  { id: 'typescript', label: 'TypeScript' }
]

function Selection({ label }: { label: string }) {
  return <p>当前选择：{label}</p>
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
      {selected ? <Selection label={selected.label} /> : <p>请选择一个标签</p>}
    </section>
  )
}
```

这是解释数据流的最小交互例子，放在普通 React（界面库）客户端应用中使用。若在 Next.js（网页框架）的应用路由中把它作为服务端页面引入的交互入口，需要在文件顶部用 [`'use client'`（客户端组件声明）](https://nextjs.org/docs/app/api-reference/directives/use-client)建立客户端边界。

这里有三件事：`map`（数组映射）把数据变成按钮；props（属性）把选中标签传给子组件；条件渲染决定展示选中结果还是提示文字。

## 点下按钮后发生了什么

初始状态是空值，所以页面显示“请选择一个标签”。点击按钮后，事件处理函数调用状态更新函数，组件重新渲染，再根据新的选中标识找出标签。

如果把选中标识改成普通局部变量，仅给变量赋值，并不会让组件自动记住它、重新渲染。需要跨渲染保留、并驱动界面的值，才是这里使用状态的原因。这个区别可以对照[状态：组件的记忆](https://react.dev/learn/state-a-components-memory)。

## 单向数据流不等于子组件不能发起变化

父组件把属性传给子组件，子组件把它当作只读输入。需要由子组件触发变化时，可以传入一个回调：子组件报告“用户点了什么”，父组件更新自己的状态，再把新数据传下来。

也就是说，事件可以向上通知，数据仍由持有状态的组件管理。原笔记里“数据从不反过来”的说法太绝对，容易让人误以为子组件不能影响父组件。参见[向组件传递属性](https://react.dev/learn/passing-props-to-a-component)。

## 为什么不能随便写一个列表标识

`key`（列表项标识）帮助 React 在新增、删除或排序之后对应同一个项目。例子中的标识来自数据，并且在相邻项目之间唯一。

不要在渲染时临时生成随机值。会重排的列表也不适合直接拿数组下标当标识：位置变了，数据身份不应该跟着变。具体解释见[列表渲染](https://react.dev/learn/rendering-lists)。

## 留给自己的练习

给这个例子加一个“清空选择”按钮，再把标签顺序反转。预期是：清空后回到提示文字；重排只改变显示顺序，不改变选中的技术。

做完后试着不用“框架自动处理了”来解释，而是说清楚：哪份数据发生了变化，哪个组件持有它，界面又是怎样从它算出来的。
