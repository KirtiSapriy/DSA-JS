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

let a = new SLL()

a.append(10);
a.append(20);
a.append(30);
a.append(40);


console.log(a);

console.log(a.h);


