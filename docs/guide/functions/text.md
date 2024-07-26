# `text()`

XPath 的 `text()` 函数用于选择 XML 文档中的文本节点，文本节点包含元素的文本内容。

使用 `text()` 函数可以提取和处理 XML 元素的文本信息。

以下是关于 `text()` 函数的详细说明和一些示例：

```xml
<bookstore>
    <book category="cooking">
        <title lang="en">Everyday Italian</title>
        <author>Giada De Laurentiis</author>
        <year>2005</year>
        <price>30.00</price>
    </book>
    <book category="children">
        <title lang="en">Harry Potter</title>
        <author>J K. Rowling</author>
        <year>2005</year>
        <price>29.99</price>
    </book>
    <book category="web">
        <title lang="en">Learning XML</title>
        <author>Erik T. Ray</author>
        <year>2003</year>
        <price>39.95</price>
    </book>
</bookstore>
```

## 基本用法

### 选择元素的文本内容

```xpath
//element/text()
```

这将选择所有名为 `element` 的元素的文本内容。

例如选择所有 `<title>` 元素的文本内容：

```xpath
//title/text()
```

### 选择包含特定文本的元素

```xpath
//element[text()='value']
```
例如选择文本内容为 Everyday Italian 的 `<title>` 元素：

```xpath
//title[text()='Everyday Italian']
```

### 选择包含特定文本的元素（部分匹配）

```xpath
//element[contains(text(), 'value')]
```

例如选择文本内容包含 Italian 的 `<title>` 元素：

```xpath
//title[contains(text(), 'Italian')]
```

### 选择作者名字为 `J K. Rowling` 的书籍

返回结果包含 Harry Potter 的 `<book>` 元素。

```xpath
//book[author/text()='J K. Rowling']
```

::: tip 注意事项
- `text()` 函数仅选择文本节点，不包括元素标签本身。
- `text()` 函数可以与其他 XPath 表达式结合使用，以构建更复杂的查询。
- 在处理包含多个文本节点的元素时，可能需要使用 `normalize-space()` 函数去除多余的空白字符。
:::

## 高级用法

### 选择包含多个文本节点的元素

使用 `normalize-space()` 函数标准化包含多个文本节点的元素，去除前后空白，并将中间的多个空白合并为一个空白：

```xpath
//book[normalize-space(author)='J K. Rowling']
```

返回结果作者为 `J K. Rowling` 的 `<book>` 元素。

### 选择特定文本节点的父元素

例如选择标题为 Harry Potter 的书籍：

```xpath
//parent[element/text()='value']

//book[title/text()='Harry Potter']
```

返回结果：包含 `Harry Potter` 的 `<book>` 元素。