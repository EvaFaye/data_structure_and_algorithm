import Stack from './linear/Stack'

/**
 *
 * @param decimal decimal number
 * @param base [2, 36]
 * @returns result string
 */
const conversion = (decimal: number, base: number = 2): string => {
  const DICTIONARY = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const stack = new Stack()
  let res = ''
  do {
    stack.push(DICTIONARY.charAt(decimal % base))
    decimal = Math.floor(decimal / base)
  } while (decimal > 0)

  while (!stack.isEmpty()) {
    res += stack.pop()
  }
  return res
}

console.log(conversion(36, 36))
