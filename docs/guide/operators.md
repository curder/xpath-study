# XPath 运算符

XPath 提供了多种运算符，用于在表达式中执行逻辑运算、比较、算术运算等操作。

这些运算符使得 XPath 表达式可以执行更复杂的查询。

以下是常用的 XPath 运算符及其用法：

## 逻辑运算符

| 运算符   | 描述   | 示例                          |
|-------|------|-----------------------------|
| `or`  | 或    | `price=9.80 or price=9.70`  |
| `and` | 与    | `price>9.00 and price<9.90` |
| `not` | 非运算符 | `not(price>9.00)`           |

### 示例

#### 逻辑与运算符 `and`

选择 category 属性值为 children 且 lang 属性值为 en 的所有 `<book>` 元素。

```xpath
//book[@category="children" and @lang="en"]
```

#### 逻辑或运算符 `or`

选择 `category` 属性值为 `children` 或 `cooking` 的所有 `<book>` 元素。

```xpath
//book[@category="children" or @category="cooking"]
```

#### 逻辑非运算符 `not()`

选择所有 `category` 属性值不为 `children` 的 `<book>` 元素。

```xpath
//book[not(@category="children")]
```

## 比较运算符

| 运算符  | 描述    | 示例            |
|------|-------|---------------|
| `=`  | 相等    | `price=9.80`  |
| `!=` | 不相等   | `price!=9.80` |
| `<`  | 小于    | `price<9.80`  |
| `<=` | 小于或等于 | `price<=9.80` |
| `>`  | 大于    | `price>9.80`  |
| `>=` | 大于或等于 | `price>=9.80` |

### 示例

#### 等于运算符 `=`

选择 `category` 属性值为 `children` 的所有 `<book>` 元素。

```xpath
//book[@category='children']
```

#### 不等于运算符 `!=`

选择所有 `category` 属性值不为 `children` 的 `<book>` 元素。

```xpath
//book[@category!='children'] 
```

#### 小于运算符 `<`

选择价格小于 30.00 的所有 `<book>` 元素

```xpath
//book[price<30.00]
```

#### 小于或等于运算符 `<=`

选择价格小于或等于 30.00 的所有 `<book>` 元素

```xpath
//book[price<=30.00]
```

#### 大于运算符 `>`

选择价格大于 30.00 的所有 `<book>` 元素。

```xpath
//book[price>30.00]
```

#### 大于或等于运算符 `>=`

选择价格大于等于 30.00 的所有 `<book>` 元素。

```xpath
//book[price>=30.00]
```

## 算术运算符

| 运算符   | 描述      | 示例             |
|-------|---------|----------------|
| `\|`  | 计算两个节点集 | `//book\|//cd` |
| `+`   | 加法      | `6 + 4`        |
| `-`   | 减法      | `6 - 4`        |
| `*`   | 乘法      | `6 * 4`        |
| `div` | 除法      | `8 div 4`      |
| `mod` | 模数（除余数） | `5 mod 2`      |

### 示例

#### 加法运算符 `+`

选择出版年份加一等于 2006 的所有 `<book>` 元素。

```xpath
//book[year+1=2006]
```

#### 减法运算符 `-`

选择出版年份减一等于 2004 的所有 `<book>` 元素。

```xpath
//book[year-1=2004]
```

#### 乘法运算符 `*`

选择价格乘以二大于 50.00 的所有 `<book>` 元素。

```xpath
//book[price*2>50.00]
```

#### 除法运算符 `div`

选择价格除以二小于 20.00 的所有 `<book>` 元素。

```xpath
//book[price div 2<20.00]
```

#### 模数运算符 `mod`

选择出版年份为偶数的所有 `<book>` 元素。

```xpath
//book[year mod 2=0]
```