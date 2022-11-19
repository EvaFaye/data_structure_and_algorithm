import { Stack } from './linear/Stack'

const parChecker = (symbolString: string): boolean => {
  const stack = new Stack<string>()
  let balanced = true

  for (let i = 0; i < symbolString.length && balanced; i += 1) {
    if (symbolString.charAt(i) === '(') {
      stack.push('(')
    } else if (stack.isEmpty()) {
      balanced = false
    } else {
      stack.pop()
    }
  }

  return balanced && stack.isEmpty()
}

console.log(parChecker('(())(())'))
