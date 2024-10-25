class node {

        constructor(data) {
                this.data = data;
                this.next = null;
        }

}

class Singlink {

        constructor() {
                this.head = null;
        }

        app(d) {
                let nn = new node(d)

                if (!this.head) {
                        this.head = nn
                }
                else {
                        let cur = this.head;



                }
        }
}