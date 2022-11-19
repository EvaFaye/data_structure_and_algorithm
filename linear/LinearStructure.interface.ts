export interface AbstractStack<T> {
  peek: () => T
  pop: () => T
  push: (item: T) => void
  size: () => number
  isEmpty(): boolean
}
