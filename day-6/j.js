
class NODE {

        constructor(d) {

                this.data = d;
                this.next = null;
        }

}

class SLL {

        constructor() {
                this.h = null;
        }

        append(data) {
                let NN = new NODE(data)
                if (!this.h) {
                        this.h = NN
                }
                else {
                        let Curr = this.h;

                        while (Curr.next != null) {

                                Curr = Curr.next;

                        }
                        Curr.next = NN
                }
        }

}

let head = new SLL()

head.append(10);
head.append(20);
head.append(30);
head.append(40);

console.log(head);


var middleNode = function (head) {

        let fas = head;
        let slov = head;

        while (fas != null && fas.next != null) {
                fas.next.next;
                slov.next;
        }

        return slov

};

console.log();
