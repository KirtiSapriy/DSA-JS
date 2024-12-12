// Implement a stack using two queues. Use only shift and push operations, and simulate stack operations like push, pop, and top.

let Queue1 = []
let Queue2 = []


function Push(val) {

        Queue1.push(val)

        while (Queue2.length > 0) {
                Queue1.push(Queue2.shift())
        }

        [Queue1, Queue2] = [Queue2, Queue1]

}

function Pop() {
        if (Queue2.length == 0) {
                return null
        }

        return Queue2.shift()
}

Push(10)
Push(20)
Push(30)


console.log(Pop());

