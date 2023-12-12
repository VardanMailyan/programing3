let side = 30
///օբյեկտներ պահելու զանգվածներ


function setup() {
       
        createCanvas(matrix[0].length * side, matrix.length * side)


}


function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("#02E600")
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
                        } else if (matrix[y][x] == 3) {
                                fill("red")
                        } else if (matrix[y][x] == 4) {
                                fill("green")
                        }
                        else if (matrix[y][x] == 5) {
                                fill("#b44e0b")

                        } else if (matrix[y][x] == 6) {
                                fill("#ff7300")
                                

                        } else if (matrix[y][x] == 7) {
                                fill("blue")
                        }

                        else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)

                }
        }



        for (let i in grassArr) {
                grassArr[i].mul()

        }


        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }



        for (let i in predatorArr) {
                predatorArr[i].eat()
        }

        for (let i in treeArr) {
                treeArr[i].mul()
        }

        for (let i in axeArr) {
                axeArr[i].eat()
        }

        for (let i in fireArr) {
                fireArr[i].eat()
        }


        for (let i in waterArr) {
                waterArr[i].eat()
        }

}
