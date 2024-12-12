// Write a function to reverse a queue using a stack. Provide a step-by-step explanation of how the reversal works.


let Queue = []

function Enqueue(Queue, val) {
        Queue.push(val)
}
function Dequeue() {
        return Queue.shift()
}
function front() {
        return Queue[0]
}
function raer() {
        return Queue[Queue.length - 1]
}
Enqueue(Queue, 1)
Enqueue(Queue, 2)
Enqueue(Queue, 3)
Enqueue(Queue, 4)

function reverseQueue() {
        let stack = []
        let AnsQueue = []

        while(Queue.length) {
                stack.push(Dequeue())
        }

        while (stack.length) {
                Enqueue(AnsQueue, stack.pop())
        }

        return AnsQueue
}

console.log(reverseQueue());
