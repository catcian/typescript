// type annotation 类型注解 我们告诉TS变量是什么类型
// type inference 类型推断 TS 会自动去尝试分析变量的类型
// 如果TS 能够自动分析变量类型，我们就不需要做什么
// 如果TS 无法分析变量类型的话，我们就需要使用类型注解
//
// let count: number;
// count = 123
//
// let countInference = 123

// const firstNumber = 1
// const secondNumber = 2
// const total = firstNumber + secondNumber

function getTotal(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber
}

const total = getTotal(1, 2)

const obj = {
  name: 'wangchen',
  age: 18,
}
