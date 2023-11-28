function matrixGenerator(matrixSize, grass, grassEater, predator, tree, axe, fire, water) {
        var matrix = []
        ////  matrix սարքելու հատված
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(1)
                }
        }

        // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
        for (let i = 0; i < grass; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }
        //GrassEater 2

        for (let i = 0; i < grassEater; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }
        //3 predator


        for (let i = 0; i < predator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }
        //4 tree


        for (let i = 0; i < tree; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 4
        }

        //5 axe


        for (let i = 0; i < axe; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 5
        }

        //6 fire


        for (let i = 0; i < fire; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 6
        }

        //7 water


        for (let i = 0; i < water; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 7
        }

        return matrix
}

let matrix = matrixGenerator(20, 17, 7, 4, 5, 7, 5, 7)
let side = 30
///օբյեկտներ պահելու զանգվածներ
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var treeArr = []
var axeArr = []
var fireArr = []
var waterArr = []


function setup() {
        frameRate(15)
        createCanvas(matrix[0].length * side, matrix.length * side)
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let grass = new Grass(x, y)

                                grassArr.push(grass)


                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)

                        } else if (matrix[y][x] == 3) {
                                let pre = new Predator(x, y)
                                predatorArr.push(pre)

                        } else if (matrix[y][x] == 4) {
                                let tre = new Tree(x, y)
                                treeArr.push(tre)

                        }
                        else if (matrix[y][x] == 5) {
                                let kacin = new Axe(x, y)
                                axeArr.push(kacin)

                        } else if (matrix[y][x] == 6) {
                                let krak = new Fire(x, y)
                                fireArr.push(krak)

                        } else if (matrix[y][x] == 7) {
                                let jur = new Water(x, y)
                                waterArr.push(jur)

                        }



                }
        }

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