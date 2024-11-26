

function PrintN(n) {

        if (n == 0) {
                return;
        }

        PrintN(n - 1)
        console.log(n);
}

PrintN(10)