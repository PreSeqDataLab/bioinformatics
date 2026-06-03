# Python语言基础


### 2.1　Python语法特点

#### 2.1.1　注释规则

##### 1．单行注释

在Python中，使用“#”作为单行注释的符号。从符号“#”开始直到换行为止，其后面所有的内容都作为注释的内容而被Python编译器忽略。

语法如下：

```python
# 注释内容
```

单行注释可以放在要注释代码的前一行，也可以放在要注释代码的右侧。例如，下面的两种注释形式都是正确的。

第一种形式：

```python
# 要求输入身高，单位为m（米），如1.70
height=float(input("请输入您的身高："))
```

第二种形式：

```python
height=float(input("请输入您的身高："))  # 要求输入身高，单位为m（米），如1.70
```

**说明**

**在添加注释时，一定要有意义，即注释能充分体现代码的作用**。例如，如图2.4所示的注释就是冗余的注释。如果将其注释修改为如图2.5所示的注释，就能很清楚地知道代码的作用了。

冗余的注释

```python
# Magic, 请勿改动
bmi = weight / ( height * height) 
```

推荐的注释

```python
# 用于计算BMI指数， 公式为“体重/身高的平方”
bmi= weight / ( height* height)
```

**注意**

注释可以出现在代码的任意位置，但是**不能分隔关键字和标识符**。例如，下面的代码注释是错误的：

```python
height=float(#要求输入身高 input("请输入您的身高："))
```

##### 2．多行注释

在Python中，并没有一个单独的多行注释标记，而是将包含在一对三引号（'''……'''）或者（"""……"""）之间，并且不属于任何语句的内容认为是注释。对于这样的代码，解释器将忽略。由于这样的代码可以分为多行编写，所以也作为多行注释。

语法格式如下：

```python
'''
	注释内容1
	注释内容2
	……
'''
```

或者

```python
"""
	注释内容1
	注释内容2
	……
"""
```

**多行注释通常用来为Python文件、模块、类或者函数等添加版权、功能等信息**。例如，下面代码将使用多行注释为demo.py文件添加版权、功能及修改日志等信息。

```python
'''
	@ 版权所有：吉林省明日科技有限公司?版权所有
	@ 文件名：demo.py
	@ 文件功能描述：根据身高、体重计算BMI指数
	@ 创建日期：2017年10月31日
	@ 创建人：无语
	@ 修改标识：2017年11月2日
	@ 修改描述：增加根据BMI指数判断身材是否合理功能代码
	@ 修改日期：2017年11月2日
'''
```

**注意**

在Python中，三引号（'''……'''）或者（"""……"""）是字符串定界符。所以，如果三引号作为语句的一部分出现，那么就不是注释，而是字符串，这一点要注意区分。

三引号为多行注释

```python
'''
	@ 功能： 根据身高、体重计算BMI指数
	@ author:无语
	@ create:2017-10-31
'''
```

三引号为字符串

```python
print('''根据身高、体重计算BMI指数''')
```

##### 3．中文注释

在Python中，还提供了一种特殊的中文注释。该注释的出现主要是为了解决Python 2.x中不支持直接写中文的问题。虽然在Python 3.x中，该问题已经不存在了。但是为了规范页面的编码，也为了方便其他人及时了解文件所用的编码，建议在文件开始加上中文注释。

**Python 3.x改进**
默认采用UTF-8编码，直接支持中文等Unicode字符，编码声明变为可选但推荐保留

语法格式如下：

```python
# -*- coding:编码 -*-
```

或者

```python
#coding=编码
```

在上面的语法中，**编码**为文件所使用的字符编码类型，如果采用**UTF-8编码**，则设置为**utf-8**；如果采用**GBK**，则设置为**gbk**或**cp936**。

例如，指定编码为UTF-8，可以使用下面的中文注释。

```python
# -*- coding:utf-8 -*-
```

**说明**

在上面的代码中，“-\*-”没有特殊的作用，只是为了美观才加上的。所以上面的代码也可以使用“# coding:utf-8”代替。

另外，下面的代码也是正确的中文注释。

```python
#coding=utf-8
```

#### 2.1.2　代码缩进

Python不像其他程序设计语言（如Java或者C语言）采用大括号“｛｝”分隔代码块，而是**采用代码缩进和冒号“:”区分代码之间的层次**。

**说明**

缩进可以使用空格或者Tab键实现。其中，使用空格时，通常情况下采用**4个空格**作为一个缩进量，而使用Tab键时，则采用**一个Tab键**作为一个缩进量。通常情况下建议采用空格进行缩进。

在Python中，对于类定义、函数定义、流程控制语句，以及异常处理语句等，**行尾的冒号和下一行的缩进表示一个代码块的开始，而缩进结束，则表示一个代码块的结束。**

例如，下面的代码中的缩进即为正确的缩进。

```python
height=float(input("请输入您的身高: "))  # 输入身高
weight=float(input("请输入您的体重: "))  # 输入体重
bmi=weight/(height* height)  # 计算 BMI指数
# 判断身材是否合理
if bmi<18.5:
    print("您的 BMI 指数为: "+ str( bmi))  # 输出BMI指数
    print("体重过轻 ~@_@~")
if bmi>=18.5 and bmi<24.9:
    print("您的 BMI 指数为: "+ str( bmi))  # 输出 BMI 指数
    print("正常范围, 注意保持 (-_-)")
if bmi>=24.9 and bmi<29.9:
    print("您的 BMI 指数为: "+ str( bmi))  # 输出 BMI指数
    print("体重过重 ~@_@~")
if bmi>=29.9:
    print("您的 BMI 指数为: "+ str( bmi))  # 输出 BMI指数
    print("肥胖 ^@_@^")
```

Python对代码的缩进要求非常严格，**同一个级别的代码块的缩进量必须相同**。如果不采用合理的代码缩进，将抛出IndentationError异常。

#### 2.1.3　编码规范

下面给出两段实现同样功能的代码

```python
'''
@ 功能： 根据身高、体重计算BMI指数
@ author:无语
@ create:2017-10-31
'''
# 输入身高和体重
height= float(input("请输入您的身高: "))
weight = float(input("请输入您的体重: "))
bmi= weight/(height * height)# 计算BMI指数
print("您的BMI指数为: " + str( bmi)) #输出BMI指数
# 判断身材是否合理
if bmi< 18.5: print("体重过轻 ~@_@~")
if bmi >= 18.5 and bmi < 24.9:
    print("正常范围, 注意保持 (-_-)")
if bmi>= 24.9 and bmi< 29.9: print("体重过重 ~@_@~")
if bmi >= 29.9 :
    print("肥胖 ^@_@^")
```

```python
'''
    @ 功能： 根据身高、体重计算BMI指数
    @ author:无语
    @ create:2017-10-31
'''
# 输入身高和体重
height = float( input("请输入您的身高: "))
weight = float( input("请输入您的体重: "))
bmi = weight/( height * height)  # 计算BMI指数
print("您的BMI指数为: " + str( bmi))  # 输出BMI指数
# 判断身材是否合理
if bmi < 18.5:
    print("体重过轻 ~@_@~")
if bmi >= 18.5 and bmi < 24.9:
    print("正常范围, 注意保持 (-_-)")
if bmi >= 24.9 and bmi < 29.9:
        print("体重过重~@_@~")
if bmi >= 29.9 :
    print("肥胖 ^@_@^")
```

两段功能相同的Python代码

大家在学习时，肯定都喜欢阅读第二段的代码，因为它看上去更加规整，这是一种最基本的代码编写规范。遵循一定的代码编写规则和命名规范可以使代码更加规范化，对代码的理解与维护起到至关重要的作用。

本节将对Python代码的编写规则以及命名规范进行介绍。

##### 1．编写规则

Python中采用PEP 8作为编码规范，其中PEP是**Python Enhancement Proposal**的缩写，翻译过来是Python增强建议书，而PEP 8表示版本，它是Python代码的样式指南。下面给出PEP 8编码规范中的一些应该严格遵守的条目。

1.1, **每个import语句只导入一个模块，尽量避免一次导入多个模块**。

推荐写法

```python
import os
import sys
```

不推荐写法

```python
import os,sys
```

1.2, **不要在行尾添加分号“;”**，也不要用分号将两条命令放在同一行。

不规范写法

```python
height = f1oat(input("请输入您的身高: "));
weight = float(input("请输入您的体重: "));
```

1.3, **建议每行不超过80个字符**，如果超过，建议使用**小括号“()”**将多行内容隐式地连接起来，而不推荐使用**反斜杠“\\”**进行连接。例如，如果一个字符串文本在一行上显示不下，那么可以使用小括号“()”将其分行显示，代码如下：

```python
print("我一直认为我是一只蜗牛。我一直在爬，也许还没有爬到金字塔的顶端。"
      "但是只要你在爬，就足以给自己留下令生命感动的日子。")
```

例如，以下通过反斜杠“\\进行连接的做法是不推荐使用的。

```python
print("我一直认为我是一只蜗牛。我一直在爬，也许还没有爬到金字塔的顶端。\
但是只要你在爬，就足以给自己留下令生命感动的日子。")
```

不过以下两种情况除外：导入模块的语句过长；注释里的URL。

1.4, **使用必要的空行可以增加代码的可读性**。一般在顶级定义（如函数或者类的定义）之间空两行，而方法定义之间空一行。另外，在用于分隔某些功能的位置也可以空一行。

1.5, **通常情况，运算符两侧、函数参数之间、逗号“,”两侧建议使用空格进行分隔**。

1.6, **应该避免在循环中使用＋和＋＝操作符累加字符串**。这是因为字符串是不可变的，这样做会创建不必要的临时对象。**推荐的做法是将每个子字符串加入列表，然后在循环结束后使用join()方法连接列表**。

1.7, 适当使用异常处理结构提高程序容错性，但不能过多依赖异常处理结构，适当的显式判断还是必要的。

**说明**

在编写Python程序时，建议严格遵循PEP 8编码规范。完整的Python编码规范请参考官方网站的PEP 8。

##### 2．命名规范

命名规范在编写代码中起到很重要的作用，虽然不遵循命名规范，程序也可以运行，但是使用命名规范可以更加直观地了解代码所代表的含义。下面将介绍Python中常用的一些命名规范。

2.1，模块名尽量短小，并且使用全部小写字母，可以使用下划线分隔多个字母。例如，game_main、game_register、bmiexponent都是推荐使用的模块名称。

2.2，包名尽量短小，并且使用全部小写字母，不推荐使用下划线。例如，com.mingrisoft、com.mr、com.mr.book都是推荐使用的包名称，而com_mingrisoft就是不推荐的。

2.3，类名采用单词首字母大写形式（即Pascal风格）。例如，定义一个借书类，可以命名为BorrowBook。

**说明**

Pascal是以纪念法国数学家Blaise Pascal而命名的一种编程语言，Python中的Pascal命名法就是根据该语言的特点总结出来的一种命名方法。

- 模块内部的类采用下划线“\_”+Pascal风格的类名组成。例如，在BorrowBook类中的内部类，可以使用_BorrowBook命名。

- 函数、类的属性和方法的命名规则同模块类似，也是全部采用小写字母，多个字母间用下划线“\_”分隔。

- 常量命名时采用全部大写字母，可以使用下划线。

- 使用单下划线“\_”开头的模块变量或者函数是受保护的，在使用import\*from语句从模块中导入时这些变量或者函数不能被导入。

- 使用双下划线“\_\_”开头的实例变量或方法是类私有的。


### 2.2　Python中的变量

#### 2.2.1　保留字与标识符

在学习变量之前，先了解一下什么是保留字和标识符。

##### 1．保留字

保留字是python中被赋于特殊意义的一些单词，开发程序时，不可以把保留字用过变量，函数，类，模块或者其他对象的名称来使用。

**python中的保留字区分大小写。**

在命令行中输入以下两行代码可以查看保留字

```python
import keyword
keyword.kwlist
```

python中的保留字如下：

| False  | None     | True  | and    | as       | assert |
| ------ | -------- | ----- | ------ | -------- | ------ |
| async  | await    | break | class  | continue | def    |
| del    | elif     | else  | except | finally  | for    |
| from   | global   | if    | import | in       | is     |
| lambda | nonlocal | not   | or     | pass     | raise  |
| return | try      | while | with   | yield    |        |


以下是Python每个保留字的解释：

###### and

在 Python 里，`and` 属于保留字，也就是关键字，主要用于逻辑与运算。下面从多个方面为你详细介绍它：

**基本逻辑规则**

`and` 用于连接两个布尔表达式，只有当两个表达式的值都为 `True` 时，整个表达式的结果才是 `True`；只要有一个表达式的值为 `False`，整个表达式的结果就是 `False`。其逻辑规则如下表所示：

| 表达式 1 | 表达式 2 | 表达式 1 and 表达式 2 |
| -------- | -------- | --------------------- |
| True     | True     | True                  |
| True     | False    | False                 |
| False    | True     | False                 |
| False    | False    | False                 |

**代码示例**

以下是使用 `and` 进行逻辑与运算的示例代码：

```python
# 示例 1
a = 5
b = 10
c = 15

# 两个条件都为 True
if a < b and b < c:
    print("两个条件都满足")
else:
    print("至少有一个条件不满足")

# 示例 2
x = 20
y = 15
z = 25

# 其中一个条件为 False
if x < y and y < z:
    print("两个条件都满足")
else:
    print("至少有一个条件不满足")

```

在上述代码中，第一个 `if` 语句里的两个条件 `a < b` 和 `b < c` 都为 `True`，所以整个 `if` 条件成立，会输出“两个条件都满足”；而第二个 `if` 语句里的条件 `x < y` 为 `False`，即便 `y < z` 为 `True`，但由于使用了 `and` 运算符，整个 `if` 条件不成立，会输出“至少有一个条件不满足”。

**短路特性**

`and` 运算符具有短路特性。也就是说，当对多个布尔表达式使用 `and` 连接时，一旦遇到某个表达式的值为 `False`，就会立即停止计算后续的表达式，直接返回 `False`。示例代码如下：

```python
def func1():
    print("执行 func1")
    return False

def func2():
    print("执行 func2")
    return True

# 由于 func1() 返回 False，func2() 不会被执行
result = func1() and func2()
print(result)

```

在上述代码中，`func1()` 返回 `False`，因为 `and` 的短路特性，`func2()` 不会被执行

最终输出 `执行 func1` result 的值为 `False`。 

逻辑运算符，表示逻辑与。

在Python中，and是一个逻辑运算符，用于将两个表达式连接在一起并测试它们是否都为True。如果两个表达式都为True，则整个表达式将为True，否则它将为False。

例如，以下代码将测试两个条件是否都为True：

```python
x = 5
y = 10
if x > 0 and y < 20:
    print("Both conditions are True")
```

在上面的代码中，and运算符将两个条件x > 0和y < 20连接起来，如果它们都为True，则打印出“Both conditions are True”。

需要注意的是，and运算符是一个短路运算符。这意味着如果第一个条件为False，Python将不会计算第二个条件，因为无论第二个条件是True还是False，整个表达式都将为False。

###### as

as关键字，用于给变量或模块指定别名。

在Python中，as关键字主要用于以下几个方面：

**异常别名**

在异常处理中，可以使用as关键字为异常对象创建别名。以下是一个简单的示例，演示如何使用as关键字为ValueError异常创建别名ve：

```python
try:
    x = int("hello")
except ValueError as ve:
    print("Caught an exception:", ve)
```

在这个示例中，如果将字符串"hello"转换为整数，则会引发ValueError异常。当异常被捕获时，as关键字为异常对象创建别名ve，该别名在except块中被使用。

**上下文管理器别名**

在Python中，可以使用as关键字为上下文管理器对象创建别名。以下是一个简单的示例，演示如何使用as关键字为open()函数创建别名f：

```python
with open("myfile.txt") as f:
    data = f.read()
    
# 同时打开两个文件，并分别绑定到 src 和 dest
with open("input.txt", "r") as src, open("output.txt", "w") as dest:
    data = src.read()
    dest.write(data.upper())  # 将处理后的内容写入新文件
# 两个文件均自动关闭
```

在这个示例中，with语句打开"myfile.txt"文件，并使用as关键字为文件对象创建别名f。在代码块中，f别名用于读取文件内容。当代码块执行完毕时，文件将自动关闭。

**数据库连接**

使用数据库时，`with` 语句可确保数据库连接在使用完后被正确关闭，`as` 关键字能给数据库连接对象指定别名。

```python
import sqlite3

# 连接到 SQLite 数据库
with sqlite3.connect('example.db') as conn:
    cursor = conn.cursor()
    # 创建一个表
    cursor.execute('''CREATE TABLE IF NOT EXISTS test_table
                      (id INTEGER PRIMARY KEY, name TEXT)''')
    # 插入数据
    cursor.execute("INSERT INTO test_table (name) VALUES ('示例数据')")
    # 提交更改
    conn.commit()
    # 查询数据
    cursor.execute("SELECT * FROM test_table")
    rows = cursor.fetchall()
    for row in rows:
        print(row)
```

**导入别名**

在Python中，可以使用as关键字为导入的模块、函数或类创建别名。以下是一个简单的示例，演示如何使用as关键字为math模块创建别名m：

```python
import math as m
s = m.sqrt(2)
```

在这个示例中，as关键字为math模块创建别名m，在代码中，我们使用别名m来调用sqrt()函数，计算2的平方根。

###### assert

断言语句，用于判断一个表达式，在表达式条件为False的时候触发异常。

assert 是 Python 中的一个关键字，用于在程序中进行断言测试。它的语法格式如下：

```plain
assert <expression>, <message>
```

其中 \<expression> 是需要进行测试的表达式，如果这个表达式的值为 False，那么 assert 就会触发一个 AssertionError 异常，并输出 \<message> 作为异常信息。如果 \<message> 没有被指定，则输出一个默认的错误信息。

assert 语句常常用于在程序中进行调试和测试，可以确保程序的正确性和稳定性。它通常用于检查输入参数、函数返回值、代码执行过程中的状态等，以确保程序的正确性。

****

在 Python 中，`assert` 是一个调试工具，用于在代码中插入检查点，确保某个条件为真。如果条件不满足，会抛出 `AssertionError` 异常。其语法形式为：  

```python
assert condition, [optional_error_message]
```

其中 `condition` 是一个布尔表达式，`optional_error_message` 是可选的错误信息（用于说明断言失败的原因）。

**基本用法示例**

1. 简单断言（检查条件是否为真）

```python
x = 10
assert x > 5  # 条件为真，无任何输出
assert x < 5  # 条件为假，抛出 AssertionError: 
```

2. 带错误信息的断言

```python
name = "Alice"
assert len(name) > 0, "名字不能为空！"  # 条件为真，无输出
assert len(name) == 0, "名字不能为空！"  # 条件为假，抛出 AssertionError: 名字不能为空！
```

3. 在函数中验证参数

```python
def calculate_average(numbers):
    assert len(numbers) > 0, "列表不能为空！"  # 检查输入参数是否合法
    return sum(numbers) / len(numbers)

# 正常调用
print(calculate_average([1, 2, 3]))  # 输出 2.0

# 断言失败
calculate_average([])  # 抛出 AssertionError: 列表不能为空！
```

4. 验证程序状态

```python
data = ["apple", "banana", "cherry"]
processed_data = []

# 模拟数据处理
for item in data:
    processed_data.append(item.upper())

assert len(processed_data) == len(data), "数据处理后长度不一致"  # 条件为真，无输出
```

**`assert` 的禁用机制**

`assert` 语句在调试时很有用，但在生产环境中可以通过命令行参数 `-O`（大写字母 O）禁用，此时所有 `assert` 语句会被忽略。  
**示例**：  

```bash
# 正常运行（启用 assert）
python script.py

# 禁用 assert（忽略所有 assert 语句）
python -O script.py
```

**注意**：永远不要用 `assert` 来处理程序的正常逻辑或运行时错误（如用户输入错误），因为它可能被禁用。这类情况应使用 `try-except` 处理。

|       **场景**       |          `assert`          |         `try/except`         |
| :------------------: | :------------------------: | :--------------------------: |
|       **用途**       | 调试时验证不可能发生的错误 | 处理运行时可能发生的预期错误 |
|    **是否可恢复**    |  通常不可恢复（程序终止）  |         可捕获并恢复         |
| **生产环境是否生效** |       优化模式下禁用       |           始终生效           |

**最佳实践**

1. **仅用于调试**：`assert` 是开发阶段的工具，用于捕捉代码逻辑中的错误，而非处理预期的异常（如文件不存在、网络连接失败等）。  
2. **提供清晰的错误信息**：始终包含 `optional_error_message`，以便快速定位问题。  
3. **避免副作用**：`assert` 中的表达式不应修改程序状态（如修改变量、写入文件等），因为它们可能在禁用时被跳过。  



###### break

在 Python 中，`break` 是一个用于控制循环流程的关键字，其核心作用是**提前终止当前所在的循环体**，跳出循环后执行后续代码。以下是关于 `break` 的详细说明：

**1. 基本用法**

`break` 通常用于 `for` 或 `while` 循环中，当满足某个条件时，立即停止循环的执行。

**示例 1：在 `for` 循环中使用 `break`**

```python
for 元素 in 可迭代对象:
    # 循环体
    if 终止条件:
        break  # 立即退出循环
```

**在 `while` 循环中使用 `break`**

```python
while 条件:
    # 循环体
    if 终止条件:
        break  # 立即退出循环
```

**常见使用场景**

示例 1：搜索列表时提前退出

```python
fruits = ["apple", "banana", "cherry", "date"]
target = "cherry"

for fruit in fruits:
    print(f"正在检查：{fruit}")
    if fruit == target:
        print("找到目标！")
        break  # 找到后立即停止循环

# 输出：
# 正在检查：apple
# 正在检查：banana
# 正在检查：cherry
# 找到目标！
```

示例 2：处理用户输入直到特定指令

```python
while True:
    user_input = input("输入内容（输入 'exit' 退出）: ")
    if user_input == "exit":
        break  # 用户输入 exit 时退出无限循环
    print(f"你输入了：{user_input}")

# 输入 'hello' 会继续循环，输入 'exit' 终止程序
```

示例 3：避免无限循环

```python
count = 0
while True:
    print(count)
    count += 1
    if count >= 5:
        break  # 确保循环不会无限执行

# 输出：0 1 2 3 4
```

**2. 嵌套循环中的行为**

在嵌套循环（循环中包含循环）中，`break` **仅终止最内层的循环**，外层循环不受影响。

**示例：嵌套循环中的 `break`**

```python
for i in range(3):
    print(f"外层循环 i={i}")
    for j in range(5):
        print(f"  内层循环 j={j}")
        if j == 2:
            break  # 终止内层循环，外层循环继续

# 输出：
# 外层循环 i=0
#   内层循环 j=0
#   内层循环 j=1
#   内层循环 j=2
# 外层循环 i=1
#   内层循环 j=0
#   内层循环 j=1
#   内层循环 j=2
# 外层循环 i=2
#   ...
```

若需退出外层循环，可通过 **标志位** 或 **函数返回** 实现：

```python
exit_nested = False
for i in range(5):
    for j in range(5):
        if i == 2:
            exit_nested = True
            break
    if exit_nested:
        break
    print(i)
```

**3. 与 `continue` 的区别**

| **关键字** |                       行为                       |
| :--------: | :----------------------------------------------: |
|  `break`   | 终止当前循环，跳出循环体，不再执行循环后续代码。 |
| `continue` | 跳过当前循环的剩余代码，直接进入下一次循环迭代。 |

**对比示例**

```python
# break 示例
for i in range(5):
    if i == 2:
        break
    print(i)  # 输出：0, 1

# continue 示例
for i in range(5):
    if i == 2:
        continue
    print(i)  # 输出：0, 1, 3, 4
```

**4. 注意事项**

- `break` 只能在 **循环体（`for`/`while`）** 内使用，若在非循环结构中使用会报错。

  ```python
  if True:
      break  # 语法错误！break 不能出现在循环外
  ```

- 合理使用 `break` 可以避免无效的循环迭代，但过度使用可能导致代码逻辑复杂，建议结合业务逻辑设计循环条件。

  

###### class

在 Python 中，`class` 是用于定义 **类（Class）** 的关键字，是面向对象编程（OOP）的核心概念之一。类是创建对象的模板，用于封装数据（属性）和功能（方法），支持继承、封装、多态等特性。以下是关于 `class` 的详细说明：

**1. 类的基本定义**

使用 `class` 关键字后跟类名（首字母通常大写，遵循驼峰命名法），通过 `:` 开始类体。类体中可以定义 **构造函数**、**属性** 和 **方法**。

**基础语法**

```python
class 类名:
    # 类属性（所有实例共享）
    类属性 = 值

    def __init__(self, 参数):
        # 实例属性（每个实例独立）
        self.实例属性 = 参数

    def 实例方法(self):
        # 定义实例方法
        return self.实例属性

    @classmethod
    def 类方法(cls):
        # 定义类方法
        return cls.类属性

    @staticmethod
    def 静态方法():
        # 定义静态方法（与类和实例无关）
        return "无需访问类或实例"
```

**语法示例**

```python
class MyClass:
    # 类属性（可选）
    class_variable = "这是类变量"
    
    # 构造函数（初始化方法）
    def __init__(self, name):
        # 实例属性
        self.name = name  # 绑定到实例的属性
    
    # 实例方法（第一个参数必须是 self，表示当前实例）
    def instance_method(self):
        print(f"实例方法：{self.name}")
    
    # 类方法（使用 @classmethod 装饰器，第一个参数是类本身 cls）
    @classmethod
    def class_method(cls):
        print(f"类方法：{cls.class_variable}")
    
    # 静态方法（使用 @staticmethod 装饰器，无默认参数）
    @staticmethod
    def static_method():
        print("静态方法")
```

**2. 类的核心组成部分**

**类与实例**

- **类**：抽象模板（例如："动物"）。
- **实例**：类的具体对象（例如："一只叫小白的狗"）。

```python
class Animal:
    pass

dog = Animal() 
```

**(1) 构造函数 `__init__`**

- 用于初始化实例的属性，在创建实例时自动调用。
- 第一个参数必须是 `self`（代表当前实例），后续参数为自定义的初始化参数。

```python
class Person:
    def __init__(self, name, age):
        self.name = name  # 实例属性
        self.age = age

person = Person("Alice", 30)
print(person.name)  # 输出: Alice
```

**(2) 实例属性与类属性**

- **实例属性**：绑定到具体实例（通过 `self.属性名` 定义），不同实例的属性值可以不同。
- **类属性**：定义在类体中（非方法内），所有实例共享，通过类名或实例访问。

| **类型** |      定义位置       |            访问方式            |    作用域    |
| :------: | :-----------------: | :----------------------------: | :----------: |
|  类属性  |     类内部顶层      | `类名.类属性` 或 `实例.类属性` | 所有实例共享 |
| 实例属性 | `__init__` 或方法中 |        `实例.实例属性`         |   实例独立   |

```python
print(MyClass.class_variable)       # 类属性：通过类名访问
print(obj.class_variable)           # 也可以通过实例访问
obj.class_variable = "修改值"       # 仅修改当前实例的类属性引用（不影响其他实例或类）
```

```python
class Car:
    wheels = 4  # 类属性（所有车都有4个轮子）

    def __init__(self, color):
        self.color = color  # 实例属性

car1 = Car("红色")
car2 = Car("蓝色")
print(car1.wheels)  # 输出: 4 (通过实例访问类属性)
print(Car.wheels)   # 输出: 4 (通过类访问类属性)
```

**(3) 方法类型**

- **实例方法**：默认第一个参数为 `self`，操作实例属性（最常用）。
- **类方法**：用 `@classmethod` 装饰，第一个参数为 `cls`（类本身），操作类属性。
- **静态方法**：用 `@staticmethod` 装饰，无默认参数，与类/实例无直接关联（类似工具函数）。

| **方法类型** |     装饰器      | 第一个参数 |           用途           |
| :----------: | :-------------: | :--------: | :----------------------: |
|   实例方法   |       无        |   `self`   |       操作实例属性       |
|    类方法    | `@classmethod`  |   `cls`    | 操作类属性或创建类级对象 |
|   静态方法   | `@staticmethod` |     无     |       独立工具函数       |

```python
class Calculator:
    @classmethod
    def add(cls, a, b):
        return a + b

    @staticmethod
    def multiply(a, b):
        return a * b

print(Calculator.add(2, 3))      # 输出: 5 (类方法)
print(Calculator.multiply(2, 3)) # 输出: 6 (静态方法)
```

**3. 创建实例（对象）**

通过类名加括号 `类名(参数)` 创建实例，自动调用 `__init__` 初始化属性。

```python
obj = MyClass("李四")  # 创建实例
obj.instance_method()  # 调用实例方法：输出 "实例方法：李四"
MyClass.class_method() # 调用类方法：输出 "类方法：这是类变量"
MyClass.static_method()# 调用静态方法：输出 "静态方法"
```

**4. 继承（Inheritance）**

子类通过在类名后括号中指定父类（基类），继承父类的属性和方法，支持单继承和多继承。

**单继承示例**

```python
class SubClass(MyClass):  # SubClass 继承自 MyClass
    def sub_method(self):
        print("子类独有的方法")
    
    # 重写父类方法
    def instance_method(self):
        super().instance_method()  # 调用父类的 instance_method
        print("子类重写的方法")

sub_obj = SubClass("王五")
sub_obj.instance_method()  # 输出：实例方法：王五 → 子类重写的方法
```

**多继承语法**

```python
class SubClass(ParentClass1, ParentClass2):  # 继承多个父类
    pass
```

**5. 特殊方法（Magic Methods）**

类中可以定义以 `__` 开头和结尾的特殊方法，用于实现运算符重载、字符串表示等功能。

**常用特殊方法**

- `__str__`：定义实例的字符串表示（`print(obj)` 时调用）。
- `__repr__`：定义实例在解释器中的表示（`repr(obj)` 时调用）。
- `__len__`：定义 `len(obj)` 的返回值。
- `__add__`：定义 `obj1 + obj2` 的行为。

```python
class Person:
    def __init__(self, name):
        self.name = name
    
    def __str__(self):
        return f"Person(name={self.name})"

p = Person("Alice")
print(p)  # 输出：Person(name=Alice)（调用 __str__）
```

**6. 封装与访问控制**

Python 没有严格的私有属性，但通过约定或特殊语法模拟封装：

- **公有属性/方法**：直接定义（如 `self.name`），可以在类外访问。
- **私有属性/方法**：以 `__` 开头（如 `self.__private_attr`），在类外通过 `_类名__private_attr` 访问（不建议直接访问）。

```python
class MyClass:
    def __init__(self):
        self.public_attr = "公有属性"
        self.__private_attr = "私有属性"  # 名称改写为 _MyClass__private_attr

obj = MyClass()
print(obj.public_attr)         # 正常访问
print(obj._MyClass__private_attr)  # 强制访问私有属性（不推荐）
```

**7.属性装饰器（`@property`）**

在 Python 中，`@property` 是一个属性装饰器，它可以**将类中的方法转换为属性**，使得调用该方法时不需要像普通方法那样使用括号，而是像访问属性一样直接访问。这样做可以提供更加简洁、直观的代码接口，同时还可以在属性访问时进行一些额外的逻辑处理，比如数据验证、计算等。以下是关于 `@property` 装饰器的详细介绍：

1. 基本语法和示例

`@property` 装饰器通常用于在类中定义一个方法，将其转换为**只读属性**。示例代码如下：

```python
class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def area(self):
        import math
        return math.pi * (self.radius ** 2)

# 创建 Circle 类的实例
circle = Circle(5)
# 像访问属性一样访问 area 方法
print(circle.area)  
```

在上述代码中，`area` 原本是一个方法，但通过 `@property` 装饰器将其转换为属性。当我们访问 `circle.area` 时，实际上调用的是 `area` 方法，但不需要使用括号。

2. 结合 setter 和 deleter 装饰器实现属性的可写和可删除

除了 `@property` 装饰器，Python 还提供了 `@属性名.setter` 和 `@属性名.deleter` 装饰器，用于实现属性的设置和删除功能。示例如下：

```python
class Person:
    def __init__(self, age):
        self._age = age  # 使用单下划线表示这是一个受保护的属性

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if not isinstance(value, int) or value < 0:
            raise ValueError("年龄必须是一个非负整数")
        self._age = value

    @age.deleter
    def age(self):
        del self._age

person = Person(30)
print(person.age)  # 输出 30

person.age = 35  # 设置年龄
print(person.age)  # 输出 35

# 尝试设置一个不合法的年龄
try:
    person.age = -5
except ValueError as e:
    print(e)  # 输出 "年龄必须是一个非负整数"

# 删除年龄属性
del person.age
# 尝试访问已删除的属性会引发 AttributeError
try:
    print(person.age)
except AttributeError as e:
    print(e)
```

在这个例子中，`@property` 装饰器定义了 `age` 属性的读取方法，`@age.setter` 装饰器定义了 `age` 属性的设置方法，`@age.deleter` 装饰器定义了 `age` 属性的删除方法。通过这些装饰器的组合使用，可以实现对属性的全面控制。

3. `@property` 装饰器的作用

- **代码更加简洁直观**：使方法调用看起来像属性访问，提高了代码的可读性。
- **数据验证和处理**：在属性访问时可以进行数据验证、计算等额外的逻辑处理，确保数据的合法性和一致性。
- **实现属性的封装**：隐藏属性的具体实现细节，只暴露必要的接口，增强了代码的安全性和可维护性。

总之，`@property` 装饰器是 Python 中一个非常有用的特性，在面向对象编程中经常被使用到。 

 **注意事项**：

1，命名规范

- 类名使用 **大驼峰命名法**（如 `ClassName`）。
- 避免使用 Python 保留字（如 `class`、`def`）作为类名。

2，继承的层次

避免过深的继承层次，优先使用 **组合（Composition）** 替代继承。

3，类方法与静态方法

- 类方法操作类级别的状态。
- 静态方法与类无关，仅是命名空间内的工具函数。

------

**常见问题**

1，如何访问类属性？

```python
class MyClass:
    class_var = 10

print(MyClass.class_var)  # 直接通过类访问
obj = MyClass()
print(obj.class_var)      # 通过实例访问（不推荐修改）
```

2，如何定义私有变量？

Python 没有严格私有变量，但约定用单下划线 `_变量` 表示“内部使用”，双下划线 `__变量` 触发名称修饰：

```python
class MyClass:
    def __init__(self):
        self._protected = 1
        self.__private = 2

obj = MyClass()
print(obj._protected)        # 输出: 1
# print(obj.__private)       # 报错！实际名称为 _MyClass__private, 通过print(obj._MyClass__private)访问
```

3，如何实现多继承？

Python 支持多继承，但需注意 **方法解析顺序（MRO）**：

```python
class A:
    def show(self):
        print("A")

class B:
    def show(self):
        print("B")

class C(A, B):
    pass

c = C()
c.show()  # 输出: A（按 MRO 顺序优先调用 A 的方法）
```

**8. 类的作用**

- **代码复用**：通过继承减少重复代码。
- **模块化**：将相关功能封装到类中，提高代码可维护性。
- **抽象建模**：将现实中的对象（如用户、商品）抽象为类，便于逻辑处理。

**总结**

`class` 是 Python 面向对象编程的基石，用于定义具有数据（属性）和行为（方法）的模板。通过类，可以实现封装、继承、多态等特性，使代码结构更清晰、可复用性更强。

###### continue

循环控制语句，用于跳过当前循环体中的剩余语句，继续下一次循环。

在Python中，continue是一个关键字，用于控制循环语句（例如for或while）的执行流程。



当continue关键字被执行时，当前循环迭代将立即结束，并跳到下一次迭代，而循环体中continue后面的代码将被忽略。如果在for循环中使用continue，则将继续下一个循环迭代。如果在while循环中使用continue，则将重新检查循环条件，如果条件为True，则继续执行下一个循环迭代，否则退出循环。



以下是一个使用continue关键字的示例，它会在遇到偶数时跳过并打印奇数：

```plain
for i in range(1, 11):
    if i % 2 == 0:
        continue
    print(i)
```

输出结果为：

```plain
1
3
5
7
9
```

在上面的代码中，当i是偶数时，continue被执行，当前迭代结束，循环进入下一个迭代，直到循环结束。当i是奇数时，continue不会被执行，print(i)语句将被执行。

****

## def

定义函数的关键字。

在Python中，def是一个关键字，用于定义函数。当您使用def关键字定义函数时，您可以指定函数的名称、参数和函数体。函数体是包含在def语句后面的代码块，它包含了执行函数任务的代码。



下面是一个简单的Python函数的示例，它使用def关键字定义：

```python
def greet(name):
    print("Hello, " + name + "!")

greet("Alice")
```

这个函数名为greet，它有一个参数name。当我们调用这个函数并向它传递一个字符串"Alice"时，它会输出"Hello, Alice!"。



函数是编程中的重要概念，它使您可以封装代码并使其可重用。在Python中，使用def关键字定义函数是一种常见的编程方式。

## del

删除对象的关键字。

在 Python 中，del 是一个关键字，用于删除对象的引用。

del 可以用于删除对象中的一个属性或变量，也可以用于删除列表或字典中的一个元素。

下面是 del 关键字的一些示例用法：



删除对象中的属性或变量：

```python
x = 10
del x  # 删除变量 x
```

删除列表或字典中的一个元素：

```python
my_list = [1, 2, 3, 4]
del my_list[0]  # 删除列表中的第一个元素
print(my_list)  # 输出 [2, 3, 4]

my_dict = {'a': 1, 'b': 2, 'c': 3}
del my_dict['b']  # 删除字典中的键 'b'
print(my_dict)  # 输出 {'a': 1, 'c': 3}
```

需要注意的是，**del** 只是删除了对象的引用，如果该对象有其他引用，它仍然存在于内存中，只有在没有任何引用时，它才会被 Python 的垃圾回收机制清理。

## elif

if语句的扩展，表示“否则如果”。

elif 是 Python 的关键字之一，它是 if 和 else 语句的一部分，用于指定在前面的 if 条件不满足的情况下执行的另一个条件。



例如，下面的代码使用了 if、elif 和 else 关键字：

```python
x = 5

if x > 10:
    print("x 大于 10")
elif x > 7:
    print("x 大于 7，但小于等于 10")
else:
    print("x 小于等于 7")
```

在上面的代码中，如果 x 大于 10，将执行第一个 print 语句。如果 x 大于 7 但小于等于 10，则执行第二个 print 语句。如果 x 不大于 7，则执行最后一个 print 语句。



注意，elif 关键字只能用在 if 语句中，而不能单独使用。此外，elif 关键字可以出现多次，以指定多个条件。

****

## else

if语句的扩展，表示“否则”。

else 是Python中的一个关键字，通常与条件语句 if 一起使用。当 if 语句中的条件不满足时，程序会执行 else 后面的语句块。以下是一个使用 if-else 的示例代码：

```python
num = 10
if num % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")

```

在上面的代码中，如果 num 是偶数，则输出 "The number is even."，否则输出 "The number is odd."。



除了与 if 一起使用，else 还可以与循环语句 for 和 while 一起使用。在这种情况下，else 后面的语句块会在循环正常结束时执行。以下是一个使用 while-else 的示例代码：

```python
num = 0
while num < 5:
    print(num)
    num += 1
else:
    print("Loop finished.")

```

在上面的代码中，while 循环会执行5次，每次输出 num 的值。当 num 大于等于5时，循环结束，程序会输出 "Loop finished."。



## try

异常处理语句，尝试执行一段可能会发生异常的代码，并进行相应处理。



try 是 Python 中的一个关键字，用于异常处理。



在一个 try 语句块中，程序会尝试执行一段代码，如果这段代码出现了异常，那么程序就会跳到 except 语句块中执行异常处理程序。如果 try 语句块中的代码没有异常，那么 except 语句块将被忽略，程序继续执行 try 语句块后面的代码。



下面是 try 语句块的基本语法：

```plain
try:
    # 一些可能会出现异常的代码
except SomeException:
    # 异常处理程序
```

在这个例子中，try 语句块包含一些可能会出现异常的代码。如果这些代码抛出了 SomeException 异常，那么程序就会跳转到 except 语句块中执行异常处理程序。在实际的代码中，SomeException 可以替换成其他类型的异常，比如 ValueError、TypeError 等等。如果你不知道会抛出什么类型的异常，可以用** except Exception:** 来捕获所有类型的异常。



try 语句块也可以包含一个可选的 else 语句块，用于在 try 语句块中的代码没有出现异常时执行一些代码。下面是包含 else 语句块的 try 语句块的语法：

```plain
try:
    # 一些可能会出现异常的代码
except SomeException:
    # 异常处理程序
else:
    # 如果没有异常发生，执行这里的代码
```

try 语句块也可以包含一个可选的 finally 语句块，用于在 try 语句块中的代码无论是否出现异常都要执行的一些代码。下面是包含 finally 语句块的 try 语句块的语法：

```plain
try:
    # 一些可能会出现异常的代码
except SomeException:
    # 异常处理程序
finally:
    # 无论是否发生异常，都执行这里的代码

```

总之，try 是 Python 中用于异常处理的关键字，用于在代码可能出现异常的地方进行异常捕获和处理。

## except

异常处理语句，用于捕获异常并进行处理。

在 Python 中，except 是一个关键字，用于异常处理。在使用 try 和 except 块时，except 后面可以跟一个异常类型，以处理特定类型的异常。例如：

```plain
try:
    # some code that may raise an exception
except ValueError:
    # handle a ValueError exception
except ZeroDivisionError:
    # handle a ZeroDivisionError exception
except:
    # handle any other exception
```

在上面的代码中，如果 try 块中的代码引发 ValueError 异常，将执行第一个 except 块。如果引发 ZeroDivisionError 异常，则执行第二个 except 块。如果引发任何其他类型的异常，则执行最后一个 except 块。



### 捕获python所有类型的异常

在Python中，可以使用try-except语句来捕获异常。以下是一种捕获所有类型异常的方法：

```plain
try:
    # 你的代码
except Exception as e:
    # 捕获所有类型的异常
    print("An error occurred:", e)

```

在这个示例中，try语句块包含你的代码。如果在执行该代码时发生异常，except语句块将捕获该异常并打印出错误消息。Exception是所有内置异常类的基类，因此此代码将捕获所有类型的异常。



你也可以指定捕获特定类型的异常，以便根据需要处理它们。例如：

```plain
try:
    # 你的代码
except ValueError as ve:
    # 处理值错误异常
    print("A value error occurred:", ve)
except TypeError as te:
    # 处理类型错误异常
    print("A type error occurred:", te)
except Exception as e:
    # 处理所有其他类型的异常
    print("An error occurred:", e)
```

在这个示例中，我们指定了捕获值错误和类型错误异常的except语句块。如果发生这些类型的异常，将打印相应的错误消息。对于所有其他类型的异常，将捕获基类Exception并打印出通用的错误消息。

## False

布尔类型值之一，表示假。

False 是 Python 中的一个关键字，表示布尔值中的假。在 Python 中，布尔值只有两种可能的取值，即 True（真）和 False（假）。False 可以用来表示一些条件的不成立或者一些变量的值为假。



以下是一个示例，展示了如何在 Python 中使用 False：

```plain
x = 10
y = 5

if x < y:
    print("x is less than y")
else:
    print("x is greater than or equal to y")

```

在上面的示例中，变量 x 的值为 10，变量 y 的值为 5。因为 x 大于 y，所以条件 x < y 不成立，程序会输出 x is greater than or equal to y。在这个条件语句中，False 被用来表示 x < y 的结果为假。





## finally

异常处理语句，无论是否发生异常都会执行的代码块。

在 Python 中，finally 是一个关键字，用于定义一个 try-except-finally 代码块中的 finally 子句。



无论 try 块中的代码是否引发异常，finally 子句中的代码都会执行。通常在 finally 块中会放置一些清理代码，比如关闭文件或者释放资源等。



以下是一个 try-except-finally 代码块的示例：

```plain
try:
    # 尝试执行某些代码
    file = open("example.txt", "r")
    content = file.read()
    print(content)
except FileNotFoundError:
    # 如果文件不存在，则执行这里的代码
    print("文件不存在")
finally:
    # 无论 try 或 except 中的代码是否引发异常，都会执行这里的代码
    file.close()
```

在上面的示例中，finally 块中的 file.close() 语句用于关闭文件，确保文件资源被正确释放。



## for

循环控制语句，用于遍历序列或其他可迭代对象。

for 是 Python 中的一个关键字，用于循环迭代一个可迭代对象的元素，例如列表、元组、字典等。for 循环的语法格式如下：

```plain
for 变量名 in 可迭代对象:
    循环体语句

```

其中，变量名 是用于循环迭代的变量名，可以在循环体内使用；可迭代对象 是需要遍历的对象，可以是列表、元组、字符串、字典等；循环体语句 是需要执行的代码块。



例如，下面的代码演示了使用 for 循环遍历一个列表中的元素：

```plain
fruits = ['apple', 'banana', 'orange']
for fruit in fruits:
    print(fruit)

```

输出结果为：

```plain
apple
banana
orange

```

在这个例子中，for 循环遍历了 fruits 列表中的每个元素，将当前元素赋值给 fruit 变量，并执行了 print(fruit) 语句打印出来。

****

## from

导入模块中指定成员的关键字。

在 Python 中，from 是一个关键字，用于从模块中导入指定的函数、变量或类。其常见用法如下：



从模块中导入指定的函数或变量：

```plain
from module import name

```

这就可以直接使用模块中的指定函数或变量，而不需要使用模块名前缀。



从模块中导入多个函数或变量：

```plain
from module import name1, name2, ...

```

这样可以同时导入多个函数或变量。



从模块中导入所有函数和变量：

```python
from module import *

```

这样可以导入模块中所有的函数和变量。但是这种方式可能会导致命名冲突，因此建议仅在小型脚本中使用。



除了以上三种用法，from 还可以和其他关键字组合使用，例如：



from ... import ... as ...：给导入的模块、函数或变量指定别名；

需要注意的是，from 关键字只能用于导入模块中的函数、变量或类，而不能用于导入其他类型的对象。同时，过度使用 from 可能会导致命名空间污染和难以维护的代码。





## global

声明全局变量的关键字。

<font style="color:rgb(55, 65, 81);background-color:rgb(247, 247, 248);">在 Python 中，</font>**<font style="background-color:rgb(247, 247, 248);">global</font>**<font style="color:rgb(55, 65, 81);background-color:rgb(247, 247, 248);"> 是一个关键字，用于在函数中声明一个变量为全局变量。当你在函数内部创建一个变量时，默认情况下，这个变量是局部变量，只能在函数内部使用，而在函数外部无法访问。但是，如果你想在函数内部创建一个可以在函数外部访问的变量，你可以使用 </font>**<font style="background-color:rgb(247, 247, 248);">global</font>**<font style="color:rgb(55, 65, 81);background-color:rgb(247, 247, 248);"> 关键字。</font>

<font style="color:rgb(55, 65, 81);background-color:rgb(247, 247, 248);">使用 </font>**<font style="background-color:rgb(247, 247, 248);">global</font>**<font style="color:rgb(55, 65, 81);background-color:rgb(247, 247, 248);"> 关键字的语法如下：</font>

```python
global variable_name

```

其中 variable_name 是你要声明为全局变量的变量名称。当你在函数内部使用 global 关键字声明一个变量时，这个变量就变成了全局变量，它可以被程序中的任何部分访问，包括函数内部和函数外部。



需要注意的是，在函数内部使用 global 关键字声明一个变量时，你需要在变量赋值之前声明。如果你在变量赋值之后再使用 global 关键字，Python 会抛出一个 SyntaxError 异常。



例如，下面的代码演示了如何在函数内部声明一个全局变量：

```python
x = 10

def foo():
    global x
    x = 20
    print("Inside foo(), x =", x)

foo()
print("Outside foo(), x =", x)

```

输出结果为：

```python
Inside foo(), x = 20
Outside foo(), x = 20

```

在上面的代码中，我们首先声明了一个全局变量 x，并将其赋值为 10。然后，我们定义了一个名为 foo() 的函数，在函数内部使用 global 关键字声明 x 为全局变量，并将其赋值为 20。最后，我们调用 foo() 函数，并在函数外部打印 x 的值。由于在函数内部将 x 声明为全局变量，因此 x 的值在函数外部也被修改为 20。



## if

条件判断语句的关键字。

在Python中，if是一个关键字，用于条件语句的开始。if后面跟着一个条件表达式，该表达式返回一个布尔值，即True或False。如果条件表达式的值为True，则执行if语句块中的代码；否则，代码块将被跳过。



以下是一个示例：

```python
x = 5
if x > 0:
    print("x is positive")
else:
    print("x is not positive")

```

在上面的示例中，如果x大于0，则会打印出“x is positive”，否则会打印“x is not positive”。if语句块以冒号(:)结尾，并且需要缩进来表示它是if语句的一部分。在该示例中，else关键字用于在条件不满足时执行另一段代码块。

## import

导入模块或模块中成员的关键字。

在Python中，import是一个关键字，用于将一个模块导入到当前程序中。导入模块后，就可以使用该模块中的函数、类和变量。



语法如下：

```python
import module_name

```

这将把名为 module_name 的模块导入到当前程序中。如果想要使用该模块中的函数或变量，需要在其前面加上模块名，例如：

```python
module_name.function_name()

```

此外，还可以使用 as 关键字来给导入的模块或其中的函数、类、变量起一个别名。例如：

```python
import module_name as mn
mn.function_name()

```

这将把 module_name 模块导入，并将其别名设置为 mn，然后就可以使用 mn.function_name() 来调用该模块中的函数。



还可以使用 from ... import ... 语句来从一个模块中导入特定的函数、类或变量。例如：

```python
from module_name import function_name, class_name, variable_name

```

这将从 module_name 模块中导入 function_name、class_name 和 variable_name。这样就可以直接使用这些名称，而不需要在其前面加上模块名。



最后，还可以使用 * 通配符来导入一个模块中的所有函数、类和变量。例如：

```python
from module_name import *

```

但是不推荐这样做，因为这样会导致命名空间污染和不可预测的行为。

****

## in

成员测试运算符，用于测试一个值是否在序列中出现过。

在Python中，in是一个关键字，用于测试一个元素是否包含在一个序列中。



in关键字可以用于以下情况：



字符串中测试子字符串是否存在：

```python
string = "Hello World"
if "Hello" in string:
    print("Substring found!")

```

列表中测试元素是否存在：

```python
list = [1, 2, 3, 4, 5]
if 3 in list:
    print("Element found!")

```

元组中测试元素是否存在：

```python
tuple = (1, 2, 3, 4, 5)
if 3 in tuple:
    print("Element found!")

```

集合中测试元素是否存在：

```python
set = {1, 2, 3, 4, 5}
if 3 in set:
    print("Element found!")

```

字典中测试键是否存在：

```python
dict = {'a': 1, 'b': 2, 'c': 3}
if 'b' in dict:
    print("Key found!")

```

在上述所有情况中，in关键字都可以用于测试一个元素是否包含在一个序列中。如果元素存在，则条件为真，否则条件为假。

****

## is

身份运算符，用于测试两个对象是否是同一个对象。

在 Python 中，is 是一个关键字。它用于比较两个对象的身份（identity）是否相同，也就是比较两个对象是否是同一个对象。在 Python 中，每个对象都有一个唯一的身份标识符（identity），可以使用 id() 函数获取该标识符。



以下是一个使用 is 关键字的示例：

```python
x = [1, 2, 3]
y = [1, 2, 3]
z = x

print(x is y)  # False，x 和 y 是不同的对象
print(x is z)  # True，x 和 z 是同一个对象

```

在这个示例中，x 和 y 都是包含相同元素的列表，但它们是不同的对象，因此 x is y 的结果为 False。而 z 是 x 的引用，因此 x is z 的结果为 True。



## lambda

定义匿名函数的关键字。



在Python中，lambda是一个关键字，用于创建一个简短的匿名函数。



lambda函数可以在需要函数对象的任何地方使用，通常用于需要一次性使用的函数或需要在函数内部定义函数的情况。使用lambda函数可以避免编写一些不必要的函数定义，并使代码更加简洁。



lambda函数的语法如下：

```python
lambda arguments: expression

```

其中，arguments是参数列表，用逗号分隔，expression是一个表达式，通常用于计算并返回一个值。



例如，以下是一个将两个数相加的lambda函数示例：

```python
add = lambda x, y: x + y
result = add(2, 3)
print(result)  # 输出 5

```

在上面的示例中，我们定义了一个名为add的lambda函数，该函数接受两个参数并将它们相加。然后，我们将add函数应用于两个数，并将结果存储在result变量中，最后输出结果。



需要注意的是，lambda函数通常用于简单的操作，如果需要进行复杂的计算或需要多次重复使用同一个函数，建议使用普通函数来实现。

****

## None

表示空值或不存在的值。

在Python中，None是一个特殊的关键字，表示一个空对象或者一个空值。它是Python中的一个内置对象，表示空值或者空对象，通常用于表示一个函数或者方法没有返回任何值。它的数据类型是NoneType。



当一个函数没有返回任何值时，Python会自动返回None。None可以用来初始化一个变量，以便稍后将其赋值为一个实际的对象。例如，你可以使用None来表示一个变量没有被初始化。



下面是一个使用None的简单示例：

```python
def my_function():
    print("Hello World")

result = my_function()  # prints "Hello World"
print(result)  # prints None

```

在这个示例中，函数my_function()打印"Hello World"，但它没有返回任何值。因此，当我们调用它并将结果存储在变量result中时，result的值是None。



需要注意的是，None和False是不同的。None表示空值或者空对象，而False表示逻辑上的假。因此，在某些情况下，你可能需要显式地检查一个变量是否为None，而不是简单地检查它是否为False。



### python显式地检查一个变量是否为None

在Python中，你可以使用is关键字来显式地检查一个变量是否为None。is是一个比较运算符，它用于比较两个对象是否是同一个对象，如果是，则返回True，否则返回False。因为None是一个特殊的对象，所以使用is来检查变量是否为None是非常有效的。



下面是一个使用is检查变量是否为None的简单示例：

```python
my_var = None

if my_var is None:
    print("my_var is None")
else:
    print("my_var is not None")

```

在这个示例中，我们将变量my_var初始化为None。然后，我们使用is检查my_var是否为None。由于my_var是None，因此条件为True，并打印出"my_var is None"。



需要注意的是，如果你使用==运算符来比较变量是否为None，它将返回True或False，因为Python将None视为False。但是，这种方法有时可能会引起一些问题，特别是在比较对象时。因此，最好使用is来显式地检查变量是否为None。

****

## nonlocal

声明非局部变量的关键字。

在Python中，nonlocal是一个关键字，用于在嵌套函数中引用位于外部函数作用域的变量。当你在一个嵌套函数中需要修改外部函数作用域的变量时，就可以使用nonlocal关键字。



在Python中，变量的作用域通常被限制在它们所在的函数内部。当你在一个函数中定义了一个变量时，它默认是局部变量，只在该函数内部可见。如果你在嵌套函数中需要访问外部函数的局部变量，你可以使用nonlocal关键字。

下面是一个使用nonlocal关键字的示例：

```python
def outer_function():
    x = 10
    
    def inner_function():
        nonlocal x
        x = 20
        
    inner_function()
    print(x)  # 输出为 20

outer_function()

```

在上面的例子中，outer_function 内部定义了一个变量x并赋值为10。然后，在 inner_function 中，我们使用nonlocal x 声明来指示x是一个外部函数作用域的变量。接下来，我们修改了x的值为20。最后，在 outer_function中打印x的值，它的值已经被 inner_function 修改为20。



需要注意的是，nonlocal关键字只能在嵌套函数内使用，而不能在顶级函数或全局作用域中使用。另外，nonlocal关键字仅用于修改外部函数作用域中已经存在的变量，而不是创建新的变量。如果需要在嵌套函数中创建一个新的变量，可以使用global关键字来指示该变量是全局变量。

## not

逻辑运算符，表示逻辑非。

****

## or

逻辑运算符，表示逻辑或。



## pass

空语句占位符，不做任何事情。



## raise

触发异常的关键字。

在Python中，raise 是一个关键字，用于引发异常。它的语法形式如下：

```python
raise [ExceptionType([args])]

```

raise 关键字用于显式地引发异常。它后面可以跟一个异常类型（例如 Exception、ValueError、TypeError 等）和可选的参数。当 raise 语句执行时，程序会立即停止当前的正常执行流程，并跳转到相应的异常处理代码。



以下是一个简单的示例，演示如何使用 raise 引发异常：

```python
def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为零")
    return a / b

try:
    result = divide(10, 0)
    print("结果：", result)
except ValueError as e:
    print("出现异常：", str(e))

```

在上面的代码中，divide 函数用于执行两个数相除的操作。如果除数 b 的值为零，则使用 raise 关键字引发 ValueError 异常，并提供异常的描述信息。在主程序中，我们使用 try-except 块来捕获并处理异常。当异常被引发时，程序会跳转到 except 代码块，打印出异常信息。



需要注意的是，raise 语句也可以不带参数，直接使用 raise 关键字来重新引发当前正在处理的异常，如下所示：

```python
try:
    # 一些代码
except Exception as e:
    # 异常处理
    raise

```

这样做的效果是将当前的异常重新引发，使得上层的异常处理机制能够捕获并处理该异常。

****

## return

函数返回值的关键字。

在Python编程语言中，return 是一个关键字，用于在函数中指定函数的返回值。当函数执行到 return 语句时，它会立即停止执行，并将后面的表达式作为结果返回给调用者。这个返回值可以用于在函数调用的地方进行进一步的处理或者赋值给一个变量。



以下是一个简单的函数示例，演示了 return 的使用：

```python
def add_numbers(a, b):
    sum = a + b
    return sum

result = add_numbers(5, 3)
print(result)  # 输出：8

```

在上面的例子中，add_numbers 函数接受两个参数 a 和 b，并将它们相加得到 sum。然后，通过 return 关键字将 sum 作为函数的返回值返回。在函数调用 add_numbers(5, 3) 的地方，返回值被赋给了变量 result，最后打印出 result 的值为 8。



需要注意的是，return 关键字也可以用于在函数的任意位置提前终止函数的执行，并返回一个值。在这种情况下，函数中 return 后面的代码将不再执行。例如：

```python
def check_number(num):
    if num > 0:
        return "Positive"
    elif num < 0:
        return "Negative"
    else:
        return "Zero"

result = check_number(7)
print(result)  # 输出：Positive

```

在上面的例子中，check_number 函数接受一个参数 num，并根据 num 的值返回不同的字符串。如果 num 大于 0，就会立即执行 return "Positive" 并终止函数的执行。如果 num 小于 0，则执行 return "Negative" 并终止函数的执行。如果 num 等于 0，则执行 return "Zero" 并终止函数的执行。



总之，return 关键字在Python中用于指定函数的返回值，并且可以提前终止函数的执行。



## True

布尔类型值之一，表示真。

在Python中，关键字"True"表示布尔类型的真值。它是Python中的一个预定义标识符，用于表示逻辑真值。"True"的值是一个布尔类型的常量，它代表真值或真的状态。



在布尔代数和逻辑运算中，"True"通常用于表示一个命题或条件的真值。在Python中，可以使用"True"来表示逻辑条件为真的情况。



以下是一些关于"True"关键字的示例用法：

```python
x = True
y = False

if x:
    print("x is true")

if not y:
    print("y is not true")

result = x and not y
print(result)  # 输出: True

```

在上述示例中，变量"x"被赋值为"True"，变量"y"被赋值为"False"。通过使用"if"语句和逻辑运算符，我们可以根据条件判断来执行不同的代码块。在最后一行，我们使用逻辑运算符"and"和"not"对"x"和"y"进行组合，并将结果赋值给"result"变量。结果为"True"，因为"x"为真且"y"为假。



请注意，关键字"True"是大小写敏感的，即"True"和"true"是不同的标识符。正确的写法是使用首字母大写的"True"来表示布尔类型的真值。



## while

循环控制语句，用于重复执行一段代码块直到条件不成立为止。

在Python中，关键字while用于创建一个循环结构，它会在给定的条件为真（True）时重复执行一段代码块，直到条件变为假（False）为止。



while循环的语法如下所示：

```python
while 条件:
    # 代码块

```

在执行while循环时，首先会对条件进行判断。如果条件为真，代码块中的语句将会执行，然后再次对条件进行判断。这个过程会一直重复，直到条件变为假，才会退出循环，继续执行循环后的代码。



以下是一个简单的示例，展示了如何使用while循环来计算并打印1到5的和：



```python
sum = 0
count = 1

while count <= 5:
    sum += count
    count += 1

print("和为:", sum)

```

输出结果为：

```python
和为: 15

```

在这个例子中，首先定义了两个变量sum和count，分别用于存储和和计数。然后使用while循环来判断count是否小于等于5，如果是，则执行循环体中的语句。在每次循环中，将count的值加到sum中，并递增count的值。当count的值等于6时，条件为假，循环结束，打印出最终的和。



## with

上下文管理器语句，用于简化资源管理代码块的编写方式。

在Python中，with是一个关键字，用于处理资源管理和上下文管理。with语句提供了一种方便的方式来确保使用资源后进行正确的清理，无论代码块是否引发异常。



使用with语句，你可以打开一个文件、获取一个锁、建立一个网络连接或执行其他需要在使用后进行清理的操作。它会自动处理资源的获取和释放，使你的代码更加简洁和可读。



下面是一个使用with语句处理文件的示例：

```python
with open('file.txt', 'r') as file:
    data = file.read()
    # 对文件进行操作，不需要手动关闭文件

# 在退出`with`代码块后，文件会自动关闭，无论是否发生异常

```

在上面的示例中，我们使用open函数打开了一个文件，并将其赋值给变量file。然后，我们在with代码块中读取文件的内容并进行一些操作。当代码块结束时，文件会自动关闭，即使在处理文件时发生异常。



with语句的关键点是使用上下文管理器（context manager）。上下文管理器是一个实现了特殊方法__enter__和__exit__的对象。with语句在进入代码块之前调用__enter__方法来获取资源，然后在代码块结束时调用__exit__方法来释放资源。文件对象是一种内置的上下文管理器，它在__exit__方法中处理了文件关闭的操作。



除了文件操作，你还可以使用with语句处理其他需要清理的资源，比如数据库连接、网络连接、锁等。你可以创建自定义的上下文管理器，实现自己的__enter__和__exit__方法来管理资源的获取和释放。



总之，with关键字提供了一种优雅和安全的方式来处理资源的管理和上下文管理，使你的代码更加简洁、可读性更高，并且能够自动处理资源的清理工作。



## yield

生成器函数返回值的关键字。

在Python中，yield 是一个关键字，用于定义生成器函数。生成器函数是一种特殊的函数，它返回一个迭代器，可以按需产生一系列值。



当在函数中使用 yield 语句时，函数将成为一个生成器。生成器函数在执行时会暂停并保存其状态，然后在下一次迭代时从停止的地方继续执行。每次调用生成器的 next() 方法或使用 for 循环迭代生成器时，它都会从上一次停止的位置开始执行，直到遇到下一个 yield 语句。



下面是一个简单的示例，展示了如何使用 yield 创建一个生成器函数：

```python
def my_generator():
    yield 1
    yield 2
    yield 3

# 使用生成器函数创建生成器对象
generator = my_generator()

# 通过迭代生成器获取值
print(next(generator))  # 输出: 1
print(next(generator))  # 输出: 2
print(next(generator))  # 输出: 3

```

在上面的示例中，my_generator() 是一个生成器函数，它使用 yield 语句产生连续的值。通过调用 next() 方法，我们可以按顺序获取每个生成器产生的值。



生成器函数的一个重要特点是它们可以节省内存，因为它们不需要一次性生成所有的值。相反，它们按需生成值，这对于处理大量数据或无限序列非常有用。



除了使用 yield 语句创建生成器函数外，还可以使用生成器表达式和生成器方法（例如 yield from）来创建生成器。这些都是利用 yield 关键字的强大特性来构建更灵活的迭代器和处理序列的方式。



async

在Python中，async是一个关键字，用于定义异步函数。异步函数是一种特殊类型的函数，允许在执行过程中暂停和恢复操作，以便在等待某些操作完成时执行其他任务。这种异步执行的方式通常被称为协程（coroutine）。



使用async关键字可以将一个函数标记为异步函数，示例如下：

```python
async def my_async_function():
    # 异步函数体
    # 在需要暂停的地方使用await关键字等待异步操作完成
    result = await some_async_operation()
    # 继续执行其他任务

# 调用异步函数
asyncio.run(my_async_function())

```

在异步函数内部，可以使用await关键字来等待一个异步操作的完成。await将会暂停当前的异步函数的执行，直到被等待的异步操作完成并返回结果。



异步函数通常与异步库（如asyncio）一起使用，用于实现高效的异步编程，特别是在涉及网络请求、IO操作和并发任务时非常有用。通过使用异步函数和异步库，可以充分利用系统资源，提高程序的性能和响应能力。

await

在Python中，await 是一个关键字，用于在异步函数中暂停代码的执行，等待一个异步操作完成。



在Python中，异步编程使用 asyncio 模块来实现。await 关键字通常与 async def 一起使用，用于定义异步函数。异步函数在执行过程中可以使用 await 来等待其他异步操作的完成，这些操作可以是异步函数、协程、任务或者 Future 对象。



当遇到 await 关键字时，代码的执行会暂停，并将控制权交还给事件循环(Event Loop)，让其他任务继续执行。一旦等待的异步操作完成，代码的执行会从 await 处继续，并返回异步操作的结果。



以下是一个简单的示例，演示了 await 的使用：

```plain
import asyncio

async def my_async_function():
    print("Starting async function")
    await asyncio.sleep(1)  # 模拟一个异步操作，等待 1 秒
    print("Async operation completed")

async def main():
    print("Before calling async function")
    await my_async_function()  # 等待异步函数执行完成
    print("After async function")

asyncio.run(main())

```

在上面的示例中，my_async_function 是一个异步函数，其中的 await asyncio.sleep(1) 表示等待 1 秒钟。在 main 函数中，我们使用 await 来等待 my_async_function 的完成。当异步操作完成后，代码才会继续执行。



需要注意的是，await 关键字只能在异步函数中使用。如果要在顶层代码中使用异步操作，可以使用 asyncio.run() 函数来运行异步代码。

##### **2. Python标识符**

标识符是用于标识变量、函数、类、模块等对象的名称，其命名需遵循以下规则：


###### **1. 字符组成限制**

- **允许的字符**：由 **字母（A-Z/a-z）、下划线（`_`）和数字** 组成。
  - 目前仅支持 **ISO-Latin字符集**（即英文字母，不包含中文等其他语言字符）。
- **首字符限制**：**不能以数字开头**，必须以字母或下划线开头。

**示例**：

- **合法**：`user_name`、`_data`、`model3`、`MAX_SIZE`。

- **非法**：

  ```python
  2var = 10   # 以数字开头
  $price = 99  # 包含特殊字符$
  my-name = "Tom"  # 包含连字符-
  ```


###### **2. 禁止使用保留字**

- **保留字**：Python语言中预定义的关键字（如 `if`、`else`、`try`、`except` 等），具有特殊语法含义，**不能作为标识符**。

**示例**：

```python
for = 10  # 非法，for是保留字
class = "student"  # 非法，class是保留字
```


###### **3. 大小写敏感**

- Python对标识符的字母大小写**严格敏感**，不同大小写视为不同标识符。

**示例**：

```python
count = 5    # 变量count（全部小写）
Count = 10   # 变量Count（首字母大写），与count不同
COUNT = 20   # 变量COUNT（全部大写），与前两者均不同
```


###### **4. 以下划线开头的特殊约定**

以单下划线或双下划线开头的标识符具有特殊含义，通常用于Python内部机制或特定场景，**建议避免在自定义标识符中使用**。

| 格式         | 含义说明                                                     |
| ------------ | ------------------------------------------------------------ |
| `_single`    | 单下划线开头，**表示私有或内部使用**（非严格私有，仅约定俗成的访问限制）。<br>例：`_width`、`_temp`。 |
| `__double`   | 双下划线开头，**表示类的私有成员**（在类外无法直接访问）。<br>例：`__age`、`__init__`（构造函数除外）。 |
| `__double__` | 双下划线开头和结尾，**Python内置特殊方法或属性**（又称“魔术方法”）。<br>例：`__len__()`、`__str__()`。 |


###### **5. 其他注意事项**

- **禁止特殊字符**：不能包含空格、`@`、`%`、`$`等特殊字符。
- **命名建议**：
  - 变量和函数：使用小写字母+下划线（如 `user_age`、`calculate_sum`）。
  - 类名：使用驼峰命名法（如 `StudentInfo`）。
  - 常量：使用全大写+下划线（如 `MAX_VALUE`、`DB_HOST`）。


###### **常见错误示例**

| 错误标识符    | 原因说明                                       |
| ------------- | ---------------------------------------------- |
| `my var`      | 包含空格，非法。                               |
| `@email`      | 包含特殊字符@，非法。                          |
| `True`        | 保留字，不能作为变量名。                       |
| `__private__` | 虽合法，但属于Python内置方法格式，避免自定义。 |


#### **2.2.2. Python变量**

##### **1 变量的定义与本质**

- **定义方式**：  
  Python中无需提前声明变量类型，直接通过 `变量名 = 值` 赋值即可创建变量。  
  **示例**：  

  ```python
  age = 18          # 整型变量
  name = "Alice"    # 字符串变量
  is_student = True # 布尔型变量
  ```

- **本质**：  
  变量是指向数据对象的**引用**（内存地址）。例如，`x = 10` 表示变量 `x` 引用了整数对象 `10` 的内存地址。


##### **2 变量命名规则**

变量命名需遵循以下规则（与标识符规则一致，另补充注意事项）：

1. **合法字符限制**：  
   - 由字母、下划线（`_`）、数字组成，**不能以数字开头**。  
   - 示例：`user_3`（合法），`3user`（非法）。  
2. **禁止保留字**：  
   - 不能使用Python关键字（如 `if`、`for`、`class` 等）。  
   - 示例：`for = 10`（非法）。  
3. **大小写敏感**：  
   - `Count` 与 `count` 是两个不同的变量。  
4. **避免混淆字符**：  
   - 慎用小写字母 `l` 和大写字母 `O`（易与数字 `1` 和 `0` 混淆）。  
5. **语义化命名**：  
   - 变量名应直观反映数据含义，如 `student_name` 优于 `s_n`。  


##### **3 动态类型特性**

Python是**动态类型语言**，变量的类型由赋值内容决定，且**可以随时改变类型**。  
**示例**：  

```python
x = 10         # 整型
print(type(x)) # 输出: <class 'int'>

x = "Hello"    # 字符串型（类型动态改变）
print(type(x)) # 输出: <class 'str'>
```

- **类型查询**：使用内置函数 `type(变量名)` 查看变量类型。  

  ```python
  print(type(age))    # 输出变量age的类型
  ```


##### **4 多变量引用与内存地址**

- **多个变量指向同一值**：  
  多个变量可赋值为同一个值，此时它们共享相同的内存地址。  
  **示例**：  

  ```python
  a = b = 500  # 变量a和b均指向整数500
  print(id(a)) # 输出内存地址（如：1407374883494256）
  print(id(b)) # 输出相同内存地址
  ```

  - 说明：`id()` 函数用于获取变量引用的对象在内存中的唯一标识符。

- **可变与不可变对象**：  

  - 对于**不可变对象**（如数字、字符串、元组），重新赋值会创建新对象，内存地址改变。  

    ```python
    a = 10       # a指向对象10（内存地址A）
    a = 20       # a重新指向对象20（内存地址B，原对象10被销毁）
    ```

  - 对于**可变对象**（如列表、字典），修改内容不会改变内存地址。  

    ```python
    lst = [1, 2, 3]  # lst指向列表对象（内存地址C）
    lst.append(4)     # 列表内容修改，但内存地址C不变
    ```


##### **5 常量的约定（非强制）**

- **定义**：程序中值不变的量（如圆周率π、重力加速度g）。  

- **Python的特殊性**：  

  - 无内置关键字定义常量，通过**命名规范**区分（全大写+下划线，如 `PI = 3.14`）。  
  - 但常量值仍可被修改（仅为约定俗成的规范，非强制限制）。  
    **示例**：  

  ```python
  MAX_SPEED = 120  # 常量命名规范
  MAX_SPEED = 150  # 虽不符合规范，但语法合法（值被修改）
  ```


##### **6 常见错误与注意事项**

1. **未赋值变量直接使用**：  

   ```python
   print(num)  # 报错：NameError: name 'num' is not defined
   ```

2. **变量名拼写错误**：  

   ```python
   user_name = "Bob"
   print(user_neme)  # 拼写错误（应为user_name），报错：NameError
   ```

3. **混淆赋值符号与比较符号**：  

   ```python
   if age = 18:  # 应为age == 18（赋值符号=误用为比较符号==）
       pass
   ```


##### **总结：变量使用的最佳实践**

1. **遵循命名规范**：  
   - 变量名语义化（如 `total_score` 而非 `ts`）。  
   - 常量使用全大写（如 `DB_URL`）。  
2. **明确类型边界**：  
   - 动态类型虽灵活，但需注意类型转换（如 `str(age)` 将整数转为字符串）。  
3. **理解内存引用**：  
   - 对不可变对象赋值时，本质是重新指向新对象；对可变对象修改时，内存地址不变。  

通过以上规则和实践，可确保Python变量的正确使用，避免语法错误和逻辑漏洞。

### 2.3 基本数据类型

#### **2.3.1 数字类型（不可变）**

用于存储数值，包括整数、浮点数和复数，修改值时会创建新对象。

##### **1. 整数（int）**

- **定义**：不含小数部分的数，支持正整数、负整数和0。  
  - **进制表示**：  
    - **十进制**：直接书写（如 `123`、`-456`），**不能以0开头**（0除外）。  
    - **八进制**：以 `0o/0O` 开头（如 `0o123` 表示八进制数，转换为十进制为83）。  
    - **十六进制**：以 `0x/0X` 开头（如 `0x25` 转换为十进制为37）。  
    - **二进制**：以 `0b/0B` 开头（如 `0b101` 转换为十进制为5）。  
  - **特点**：位数无限制，支持大整数运算（自动转为高精度计算）。

##### **2. 浮点数（float）**

- **定义**：含小数部分的数，或用科学记数法表示（如 `1.414`、`2.7e2`（即270）、`-3.14e-5`（即-0.0000314））。  
  - **注意**：浮点数计算可能存在精度误差（如 `0.1+0.2=0.30000000000000004`），这是二进制浮点存储的通病，可忽略或用 `decimal` 模块处理。

##### **3. 复数（complex）**

- **定义**：由实部和虚部组成，形式为 `a+bj`（`j` 为虚部符号，如 `3.14+12.5j`）。  
  - **实部/虚部访问**：`z.real`（实部）、`z.imag`（虚部）。  


#### **2.3.2 字符串类型（str，不可变序列）**

由字符序列组成，用单引号 `''`、双引号 `""` 或三引号 `''' '''`/`""" """` 包裹。

##### **1. 基本用法**

- **单/双引号**：用于单行字符串，引号需成对出现（如 `'Hello'`、`"World"`）。  
- **三引号**：用于多行字符串（如 `'''Line 1\nLine 2'''`），保留换行和格式。  
- **嵌套引号**：允许在字符串内嵌套不同类型的引号（如 `'I said, "Hello!"'`）。

##### **2. 转义字符**

用反斜杠 `\` 表示特殊字符：  

| 转义字符 | 含义                 | 示例                           |
| -------- | -------------------- | ------------------------------ |
| `\n`     | 换行符               | `"Hello\nWorld"`               |
| `\t`     | 水平制表符（缩进）   | `"Name\tAge"`                  |
| `\"`     | 双引号               | `"She said, \"Hi\""`           |
| `\\`     | 反斜杠               | `"C:\\file.txt"`               |
| `r/R`    | 原始字符串（不转义） | `r"\\n不转义"`或`R"\\n不转义"` |

##### **3. 字符串特性**

- **不可变性**：字符串内容不可修改，赋值新值会创建新对象（如 `s = "a"; s = s + "b"` 生成新字符串 `"ab"`）。  
- **索引与切片**：通过下标访问字符（如 `s[0]` 取第一个字符，`s[1:3]` 截取第2-3个字符）。  


#### **2.3.3 布尔类型（bool）**

表示逻辑真/假，本质是整数的子类（`True=1`，`False=0`）。

##### **1. 真值测试**

以下情况视为 `False`，其余为 `True`：  

- `False`、`None`  
- 数值0（`0`、`0.0`、`0j`）  
- 空序列（`""`、`[]`、`()`、`{}`）  
- 自定义对象中 `__bool__()` 返回 `False` 或 `__len__()` 返回 `0`。

##### **2. 运算与转换**

- **数值运算**：`True+1=2`，`False*5=0`（不建议此类操作）。  
- **条件判断**：直接用于 `if`、`while` 语句（如 `if flag:` 等价于 `if flag == True:`）。  


#### **2.3.4 数据类型转换**

通过内置函数实现类型转换，常见函数如下：

| 函数           | 作用                                    | 示例                              |
| -------------- | --------------------------------------- | --------------------------------- |
| `int(x)`       | 将x转为整数（截断小数，丢弃非数字字符） | `int(3.9)`=3，`int("123")`=123    |
| `float(x)`     | 将x转为浮点数                           | `float("45.6")`=45.6              |
| `str(x)`       | 将x转为字符串                           | `str(123)`="123"                  |
| `bool(x)`      | 将x转为布尔值                           | `bool(0)`=False，`bool("a")`=True |
| `complex(a,b)` | 创建复数（a为实部，b为虚部）            | `complex(3, 4)`=3+4j              |

##### **注意事项**：

- **非数字字符串转整数**：如 `int("abc")` 会报错（`ValueError`）。  
- **浮点转整数**：直接截断小数部分（如 `int(3.9)`=3，而非四舍五入）。  
- **布尔转其他类型**：`bool(0)`=False，`bool(非0数值)`=True。  


### **2.4.5 总结：数据类型核心要点**

1. **数字类型**：整数支持多进制，浮点数注意精度问题，复数用于科学计算。  
2. **字符串**：不可变序列，灵活使用转义字符和三引号处理复杂文本。  
3. **布尔值**：本质是整数子集，真值测试需注意空值和0的特殊性。  
4. **类型转换**：根据需求选择合适函数，注意转换失败时的异常处理（如 `try-except`）。  

通过掌握这些基本数据类型，可以更高效地处理Python中的数据操作和逻辑判断。

### 2.4　基本输入和输出


#### **2.4.1 输入函数：input()**

##### **功能**

从标准输入（键盘）读取用户输入的内容，返回**字符串类型**数据。

##### **语法**

```python
变量 = input([提示信息])
```

- **提示信息**（可选）：字符串，用于引导用户输入（如`"请输入姓名："`）。

##### **示例与注意事项**

1. **基本用法**  

   ```python
   name = input("请输入你的姓名：")  # 用户输入"Alice"，name存储为字符串"Alice"
   print("你好，", name)  # 输出：你好， Alice
   ```

2. **输入类型转换**  

   - `input()`默认返回**字符串**，需手动转换为其他类型（如数字）。  

     ```python
     age = int(input("请输入年龄："))  # 用户输入"18"，转换为整数18
     height = float(input("请输入身高（米）："))  # 用户输入"1.75"，转换为浮点数1.75
     ```

   - **错误处理**：若用户输入非数字字符串，转换会报错（如`ValueError`），需用`try-except`捕获异常。


#### **2.4.2 输出函数：print()**

##### **功能**

将内容输出到标准输出（屏幕）或指定文件，支持格式化输出。

##### **语法**

```python
print(输出内容, sep='分隔符', end='结束符', file=文件对象)
```

- **参数说明**：  
  - `输出内容`：可以是单个值或多个值（用逗号分隔）。  
  - `sep`：多个输出内容间的分隔符（默认`' '`空格）。  
  - `end`：输出结束后添加的字符（默认`'\n'`换行）。  
  - `file`：指定输出文件（需为可写的文件对象）。

##### **核心用法示例**

1. **基础输出**  

   ```python
   print("Hello, World!")  # 输出：Hello, World!（自动换行）
   ```

2. **输出多个值**  

   ```python
   a, b = 10, 20
   print(a, b)  # 输出：10 20（默认用空格分隔）
   print(a, b, sep=', ')  # 输出：10, 20（用逗号+空格分隔）
   ```

3. **禁止自动换行**  

   ```python
   print("第一行", end='')  # 不换行，后续内容接在同一行
   print("第二行")  # 输出：第一行第二行
   ```

4. **输出到文件**  

   ```python
   with open("output.txt", "w") as f:
       print("数据写入文件", file=f)  # 将内容写入output.txt
   ```

5. **格式化输出**  

   - **字符串拼接**：  

     ```python
     name = "Bob"
     print("你好，" + name + "！今天气温25℃。")  # 输出：你好，Bob！今天气温25℃。
     ```

   - **f-string格式化（推荐）**：  

     ```python
     age = 18
     print(f"小明今年{age}岁，明年{age+1}岁。")  # 输出：小明今年18岁，明年19岁。
     ```

   - **格式控制**：  

     ```python
     price = 99.5
     print(f"商品价格：{price:.2f}元")  # 保留两位小数，输出：商品价格：99.50元
     ```


#### **2.4.3 典型应用场景**

##### **1. 交互式程序**  

用户输入姓名和年龄，输出个性化问候：  

```python
name = input("请输入姓名：")
age = int(input("请输入年龄："))
print(f"{name}，你好！你今年{age}岁，十年后将是{age+10}岁。")
```

##### **2. 数据验证与转换**  

读取用户输入的数值并计算平方，处理非数字输入：  

```python
try:
    num = float(input("请输入一个数字："))
    print(f"{num}的平方是：{num**2}")
except ValueError:
    print("输入错误！请输入有效的数字。")
```

##### **3. 文件日志输出**  

将程序运行日志同时输出到屏幕和文件：  

```python
import sys

log_message = "程序启动时间：2023-10-01 08:00:00"
print(log_message)  # 输出到屏幕
with open("program.log", "a") as f:
    print(log_message, file=f)  # 追加到日志文件
```


#### **2.4.5 注意事项**

1. **输入内容的类型安全**  

   - 始终假设`input()`返回的是字符串，需根据业务逻辑转换类型（如数值计算前转`int/float`）。

2. **print()的性能**  

   - 频繁调用`print()`会影响性能（尤其在循环中），可改用列表拼接后一次性输出。

3. **编码问题**  

   - 输出到文件时，需确保文件编码与内容一致（如中文需用`encoding='utf-8'`）：  

     ```python
     with open("中文文件.txt", "w", encoding="utf-8") as f:
         print("你好，世界！", file=f)
     ```
