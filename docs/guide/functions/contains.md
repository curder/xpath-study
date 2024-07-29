# `contains()`

`contains()` 函数用于检查字符串是否包含指定的子字符串，如果包含，则返回 `true`，否则返回 `false`。

它常用于选择包含特定文本的节点。`contains()` 函数的语法如下:

```xpath
contains(string, substring)
```

- `string`：要检查的字符串。

- `substring`：要搜索的子字符串。


## 基本用法

### 选择包含特定文本的节点

```xpath
//element[contains(text(), 'substring')]
```

选择包含 "Italian" 的所有 `<title>` 元素

```xpath
//title[contains(text(), 'Italian')]
```

### 选择属性值包含特定文本的节点

```xpath
//element[contains(@attribute, 'substring')]
```

选择 `category` 属性值包含 "cook" 的所有 `<book>` 元素：

```xpath
//book[contains(@category, 'cook')]
```


## 示例

假设有以下 XML 文档：

```xml
<bookstore>
  <book category="cooking" lang="en">
    <title>Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
  <book category="children" lang="en">
    <title>Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
  <book category="web" lang="en">
    <title>Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>
```

### 选择所有标题包含 "Italian" 的书籍

```xpath
//title[contains(text(), 'Italian')]
```

返回结果：

```xml
<title>Everyday Italian</title>
```

### 选择所有作者名字包含 "Rowling" 的书籍

```xpath
//author[contains(text(), 'Rowling')]
```

返回结果：

```xml
<author>J K. Rowling</author>
```

### 选择所有类别包含 "cook" 的书籍

```xpath
//book[contains(@category, 'cook')]
```

返回结果：

```xml
<book category="cooking" lang="en">
    <title>Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
</book>
```

### 选择所有标题包含 "Learning" 的书籍

```xpath
//title[contains(text(), 'Learning')]
```

返回结果：

```xml
<title>Learning XML</title>
```

## 结合其他表达式使用

### 选择所有作者名字包含 "Giada" 的书籍，并返回其标题

```xpath
//book[author[contains(text(), 'Giada')]]/title/text()
```

返回结果：

```txt
Everyday Italian
```

### 选择所有年份在 2000 年之后且标题包含 "XML" 的书籍

```xpath
//book[year > 2000 and contains(title, 'XML')]
```

返回结果：

```xml
<book category="web" lang="en">
  <title>Learning XML</title>
  <author>Erik T. Ray</author>
  <year>2003</year>
  <price>39.95</price>
</book>
```

## 注意事项

- **大小写敏感**：如需忽略大小写，可以结合其他函数或方法实现，例如将字符串转换为小写再比较。

- **组合使用**：`contains()` 函数可以与其他 XPath 函数和表达式组合使用，构建更复杂的查询条件。

- **性能考虑**：在大型 XML 文档中使用 `contains()` 可能会影响查询性能，因为它需要遍历并检查所有节点的文本内容或属性值。