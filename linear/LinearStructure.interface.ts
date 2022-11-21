export namespace LinearStructure {
  export interface AbstractStack<T> {
    peek: () => T
    pop: () => T
    push: (item: T) => void
    size: () => number
    isEmpty(): boolean
  }
  export interface AbstractQueue<T> {
    enqueue: (item: T) => void
    dequeue: () => T
    isEmpty: () => boolean
    size: () => number
  }
}
