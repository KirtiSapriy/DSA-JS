// // Q4: Count Nodes

class Node {
        constructor(value) {
                this.value = value;
                this.next = null;
        }
}

let linkList = [1, 2, 3, 4, 5, -1]
let head = null
let cur = null
for (let el of linkList) {
        if (el < 0) {
                break
        }
        let node = new Node(el)
        if (!head) {
                head = node;
                cur = head
        }
        else {
                cur.next = node
                cur = node
        }
}


function CountNode(head) {
        let count = 0
        let cu = head;
        while (cu != null) {
                count++
                cu = cu.next

        }
        return count;
}
console.log(CountNode(head));





