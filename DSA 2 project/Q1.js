function staircase(n) {

        for (let a = 1; a <= n; a++) {
                let p = "";
                for (let b = n; b > a; b--) {
                        p += " "
                }
                for (let c = 1; c <= a; c++) {
                        p += "#"
                }


                console.log(p)
        }

}

staircase(6)