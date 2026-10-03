---
title: 'LCEL：管道连接的到底是什么'
description: '从输入输出理解竖线语法，区分顺序执行、并行分支、批处理和流式输出。'
date: 2026-10-03
tags: [langchain, lcel, learning]
type: note
status: in-progress
language: zh
---

整理自学习笔记《LCEL》。比起记住一串功能名，我更想弄清楚：数据经过每一段之后，究竟变成了什么。

## 先看竖线两边的输入输出

LCEL（LangChain 表达式语言）用统一的 Runnable（可运行单元）接口组织处理步骤。常见写法是：

```python
chain = prompt | model | output_parser
```

这行代码在描述一个顺序组合：提示模板接收变量，生成提示；模型接收提示，返回消息；解析器再把消息转成后续需要的结果。

竖线不会帮我补齐缺失字段，也不会保证类型一定接得上。看懂一条链，需要先写出每一步“接收什么、返回什么”。

## 一个不需要模型密钥的小例子

下面只用普通函数，观察数据如何流过管道。环境需要安装 `langchain-core`（核心库）。

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

第一个步骤收到字符串，返回去掉首尾空白的字符串。第二个步骤收到这个新字符串，返回字典。因此整条链的输入是字符串，输出是字典。

如果还要往后接一步，下一步收到的是字典，不再是字符串。这是我读链式代码时最容易漏掉的地方。

[RunnableSequence（顺序组合）的官方说明](https://reference.langchain.com/python/langchain-core/runnables/base/RunnableSequence)也明确了这个关系：前一步的输出作为后一步的输入。

## 顺序、并行与批处理不是一回事

上面的两步有依赖关系：必须先得到规范化文本，再计算结果。它们不会因为写成管道就自动同时完成。

独立分支可以显式写成 RunnableParallel（并行组合）：

```python
from langchain_core.runnables import RunnableParallel

branches = RunnableParallel(
    uppercase=RunnableLambda(lambda text: text.upper()),
    length=RunnableLambda(lambda text: len(text)),
)

print(branches.invoke("RAG"))
# {"uppercase": "RAG", "length": 3}
```

这里两个分支接收同一个输入，各自返回结果，最后汇成字典。它不是把第一个分支的输出交给第二个分支。具体接口见 [RunnableParallel（并行组合）](https://reference.langchain.com/python/langchain-core/runnables/base/RunnableParallel)。

而 `chain.batch([" RAG ", " LCEL "])`（批量调用）是在同一条链上处理多个输入。`ainvoke`（异步调用）改变调用方式，但不会取消链内部的数据依赖。并发能否缩短等待，还要看限流、资源占用和任务本身。

## 有流式接口，不代表中间每一步都能流

`stream`（流式调用）让我分段消费输出，但如果某个步骤必须等上游完整结束，它就会阻断这段流。普通 RunnableLambda（函数包装）默认不实现流转换接口，不能只凭最后调用了流式方法，就断言首字一定更快返回。

同样，重试、备用模型和追踪需要显式配置或正确接入。它们不是写了竖线之后自动得到的可靠性保证。涉及扣费、写库等副作用时，还需要考虑重试是否会重复执行。

## 我读一条链时的检查顺序

先把每个步骤的输入输出写出来，再确认哪些步骤有依赖、哪些能独立运行。最后看错误从哪里抛出，调用方会拿到完整结果还是结果片段。

还想继续补一个检索例子：把问题分别送给检索器和透传分支，再组装提示。重点不是把代码压成一行，而是能在任何一个中间节点停下来，说清楚这里的数据是什么。
