var socket = io()
let side = 30
///օբյեկտներ պահելու զանգվածներ


function setup() {
       
        createCanvas(20 * side, 20 * side)


}


function nkarel(matrix) {
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



  

}


setInterval(function(){
        socket.on("send matrix" , nkarel)
} , 500)