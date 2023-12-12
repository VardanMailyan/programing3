var express = require("express")

var app = express()

var server = require('http').Server(app);
var  io =  require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/' , function(req, res){
    res.redirect('index.html')
});

server.listen(3000 , () => {

    console.log('connected');
})

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


io.sockets.emit("send matrix" , matrix)


/////arrays

grassArr = []
grassEaterArr = []
predatorArr = []
treeArr = []
axeArr = []
fireArr = []
waterArr = []

////

let Grass = require("./grass")
let GrassEater = require("./grassEater")
let Water = require("./water")
let Fire = require("./fire")
let Axe = require("./axe")
let Tree = require("./tree")
let Predator = require("./predator")



////


function createObject(matrix){
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

io.sockets.emit("send matrix" , matrix)
