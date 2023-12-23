var socket = io()
let side = 25
///օբյեկտներ պահելու զանգվածներ

function setup() {
        createCanvas(25 * side, 25 * side);

    }
    socket.on("Winter", function (weath) {
        weather = weath;
    })
    socket.on("Summer", function (weath) {
        weather = weath;
    })
    socket.on("Spring", function (weath) {
        weather = weath;
    })
    socket.on("Autumn", function (weath) {
        weather = weath;
    })
    var weather = "Spring";
    



function nkarel(matrix) {




        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                       
            
                        if (matrix[y][x] == 1) {
                                if (weather == "Spring") {
                                        fill("#00ff00");
                                }
                                else if (weather == "Summer") {
                                        fill("#79a83b");
                                }
                                else if (weather == "Autumn") {
                                        fill("#ff8453");
                                }
                                else if (weather == "Winter") {
                                        fill("#ffffff");
                                }
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



        socket.on("send matrix" , nkarel)



//buttons

function Winter() {
        socket.emit("Winter"); }
function Summer() {
        socket.emit("Summer"); }
function Spring() {
        socket.emit("Spring"); }
function Autumn() {
        socket.emit("Autumn");  }

function AddGrass(){
        socket.emit("Add Grass")
}

function AddgrassEater(){
        socket.emit("Add GrassEater")
}

function Addpredator(){
        socket.emit("Add Predator")
}
function Addwater(){
        socket.emit("Add Water")
}

function AddFire(){
        socket.emit("Add Fire")
}

function AddAxe(){
        socket.emit("Add Axe")
      
}

function AddTree(){
        socket.emit("Add Tree")
}