# 轴 Axes

轴定义了节点之间的关系，以下是一些常用的轴。

| 表达式                       | 描述                      | 举例                             |
|---------------------------|-------------------------|--------------------------------|
| `child::node`             | 选取当前节点的所有子节点            | `child::book` 或简写为 `book`      |
| `attribute::attribute`    | 选取当前节点的所有属性             | `attribute::lang` 或简写为 `@lang` |
| `parent::node`            | 选取当前节点的父节点              | `parent::bookstore`            |
| `child::*`                | 	选择当前节点的所有元素子级          | `child::*`                     |
| `attribute::*`            | 选取当前节点的所有属性             | `attribute::*`                 |
| `child::text()`	          | 选择当前节点的所有文本节点子节点        |                                |
| `child::node()`	          | 选择当前节点的所有子节点            |                                |
| `ancestor::node`          | 选取当前节点的所有祖先节点（包括父节点）    | `ancestor::bookstore`          |
| `descendant::node`        | 选取当前节点的所有后代节点（子节点、孙节点等） | `descendant::title`            |
| `following-sibling::node` | 选取当前节点之后的所有兄弟节点         | `following-sibling::book`      |
| `preceding-sibling::node` | 选取当前节点之前的所有兄弟节点         | `preceding-sibling::book`      |
| `child::*/child::price`   | 	选择当前节点的所有子节点           |                                |


## 示例

### 当前节点子节点的所有书本节点

```xpath
//bookstore/child::book
```

### 选取当前节点的所有属性

```xpath
//title/attribute::lang
```

### 选择当前节点的所有元素子级

```xpath
//book[@category="children"]/child::*
```

### 选择当前节点的所有属性

```xpath
//bookstore/book/attribute::*
```

### 选择当前节点的所有子节点

```xpath
//bookstore/child::node()
```

### 选取当前节点的所有祖先节点

```xpath
//book/ancestor::bookstore
```

### 选取当前节点的所有后代节点

```xpath
//bookstore/descendant::title
```