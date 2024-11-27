
function RendomArray() {
        let arr = []
        for (let a = 0; a < 3; a++) {
                let Rowarr = []
                for (let b = 0; b < 3; b++) {

                        let redom = Math.round(Math.random() * 100);

                        Rowarr.push(redom);
                }
                arr.push(Rowarr)
        }

        return arr

}

console.log(RendomArray());
