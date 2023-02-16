let arr = [1,2,3,4,5,[6,7,[8,9,[10,11]]]]

// length 属性
console.log(arr.length) // 6 
console.log(arr) //[1, 2, 3, 4, 5, Array(3)]

// 设置 length 长度

// 增加数组长度
arr.length = 7
console.log(arr.length) // 7
console.log(arr[7]) // undefined

arr.length = 5
console.log(arr.length) // 5
console.log(arr) // [1, 2, 3, 4, 5]

// arr.length = -100 //Uncaught RangeError RangeError: Invalid array length

// 得出结论  如果增加数组对应增加的部分为 undefined 如果减少 则会删除多余的部分

// 查阅资料的length 是 Array 的实例属性。返回或设置一个数组中的元素个数。该值是一个无符号 32-bit / 4294967296 整数，并且总是大于数组最高项的下标。

// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

// 描述
// concat 方法创建一个新的数组，它由被调用的对象中的元素组成，每个参数的顺序依次是该参数的元素（如果参数是数组）或参数本身（如果参数不是数组）。它不会递归到嵌套数组参数中。

// concat 方法不会改变 this 或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。原始数组的元素将复制到新数组中，如下所示：

// 对象引用（而不是实际对象）：concat 将对象引用复制到新数组中。原始数组和新数组都引用相同的对象。也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。这包括也是数组的数组参数的元素。
// 数据类型如字符串，数字和布尔（不是 String，Number 和 Boolean 对象）：concat 将字符串和数字的值复制到新数组中。
let arrConcat = [1, 2, 3, 4, 5, [6, 7, [8, 9, [10, 11]]]]
let arrConcat1 = [1, 2, 3, 4, 5, [6, 7, [8, 9, [10, 11]]]]

const arrAffter = arrConcat.concat(arrConcat1)
console.log(arrConcat) // [1, 2, 3, 4, 5, Array(3)]
console.log(arrConcat1) // [1, 2, 3, 4, 5, Array(3)]
console.log(arrAffter) // [1, 2, 3, 4, 5, Array(3), 1, 2, 3, 4, 5, Array(3)]


