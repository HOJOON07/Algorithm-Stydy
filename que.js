class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return (this.tailIndex = this.headIndex);
  }
}

const 큐 = {
  0: 5,
  1: 2,
  2: 3,
  3: 7,
  //0
  //4
};

const deq = {
  // 0:5
  0: 2,
  1: 3,
  2: 7,
  //1
  //4
};

const enq = {
  0: 2,
  1: 3,
  2: 7,
  5: 1,
  //1
  //5
};

const enq2 = {
  0: 2,
  1: 3,
  2: 7,
  5: 1,
  6: 4,
  // 1
  // 6
};

const deq2 = {
  //0: 2,
  1: 3,
  2: 7,
  5: 1,
  6: 4,
  // 2
  // 6
  // getLength = 4 (tail - head)
};
