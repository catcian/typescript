// 基础类型和对象类型

// 基础类型
let count: number
count = 123
const teacherName: string = "wangchen"
//null,undefined,symbol,boolean,viod

// 对象类型
class Person {
}

const teacher: {
    name: string,
    age: number,
} = {
    name: 'wangchen',
    age: 18
}
// 数组也是对象类型
const numbers: number[] = [1, 2, 3]

const wangchen: Person = new Person()

// 函数
const getTotal: () => number = () => {
    return 123
}


