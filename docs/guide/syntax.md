# 语法

XPath 使用路径表达式来选择 XML 文档中的节点或节点集。通过遵循一个或多个路径步骤来选择节点。

## 选择节点


| 表达式  | 描述                 | 举例                             |
|------|--------------------|--------------------------------|
| `/`  | 选取根节点              | `/` 选取根元素                      |
| `//` | 从匹配选择的当前节点选择文档中的节点 | `//book` 选取文档中的所有 `<book>` 元素。 |
| `.`  | 选取当前节点             | -                              |
| `..` | 选取当前节点的父节点。        | -                              |
| `@`  | `@` 选取属性           | `@lang` 选取属性 `lang` 的节点        |


::: code-group

```txt [表达式]
/ # 选取根节点

//author # 选取所有书籍的作者

//book[@category="cooking"] # 选择属性为 category="cooking" 的 book 节点

//author/. # 选择所有当前 author 节点

//author/.. # 选择所有当前 author 节点的父节点
```

```xml [示例文档]
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
:::



### 选取未知节点

XPath 通配符可用来选取未知的 XML 元素。

| 通配符      | 描述         | 举例                                 |
|----------|------------|------------------------------------|
| `*`      | 匹配任何元素节点。  | `//book/*` 选取 `book` 下的所有子元素。      |
| `@*`     | 匹配任何属性节点。  | `//*` 选取文档中的所有元素。                  |
| `node()` | 匹配任何类型的节点。 | `//book/node()` 选取 `book` 下的所有子节点。 |


::: code-group

```txt [表达式]
//title[@*] # 选取所有带有属性的 title 节点

//book/node() # 选取所有子节点
```

```xml [示例文档]
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
:::

### 示例


#### 整个页面

```xpath
/
```

#### 整个页面中的所有元素

```xpath
/*

//*
```

#### 所有的 `div` 节点

```xpath
//div
```

#### 根据 `id` 属性查找节点

```xpath
//*[@id="site-logo"]
```

#### 查找节点的父节点

```xpath
//*[@id="site-logo"]/..
```

## 谓词 Predicates

谓语用来查找某个特定的节点或者包含某个指定的值的节点，谓语被嵌在方括号中。

| 通配符                                   | 描述                                | 举例                                                                         |
|:--------------------------------------|:----------------------------------|:---------------------------------------------------------------------------|
| `node[index]`                         | 选取第 index 个 node 元素（索引从 1 开始）     | `/bookstore/book[1]` 选取 `<bookstore>` 的第一个 `<book>` 元素                     |
| `node[last()]`                        | 选取最后一个 node 元素                    | `//book[last()]` 选取文档中的最后一个 `<book>` 元素。                                   |
| `node[@attribute='value']`            | 选取具有指定属性值的所有节点                    | `//book[@category='children']` 选取所有 category 属性值为 children 的 `<book>` 元素。  |
| `node[condition]`                     | 选取满足指定条件的所有节点                     | `//book[price>35.00]` 选取价格大于 35.00 的所有 `<book>` 元素。                        |
| `node[contains(@attribute, 'value')]` | 选择其 `attribute` 属性值包含 `value` 的节点 | `//book[contains(@category, 'cook')]` 选择 category 属性值包含 cook 的 `<book>` 元素 | 

### 示例

#### 指定索引元素

```xpath
//bookstore/book[2]
```

#### 倒数第二个元素

```xpath
//bookstore/book[last()-1]
```

#### 最后一个元素

```xpath
//bookstore/book[last()]
```

#### 前面两个满足条件的元素

```xpath
//bookstore/book[position()<3]
```

#### 所有拥有属性元素

```xpath
//title[@lang]
```

#### 语言为英语的书籍标题

```xpath
//title[@lang='en']
```

#### 指定条件的节点

```xpath
//book[price>30.00]
```

#### 指定条件节点的标题

```xpath
//bookstore/book[price>35.00]//title
```

### 选择包含特定属性值的节点

```xpath
//book[contains(@category, "cook")]
```