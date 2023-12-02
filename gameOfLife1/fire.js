class Fire extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 15
        this.directions = []
    }



 

    chooseCell(char, char1) {
        this.getNewCoordinates()
        return super.chooseCell(char,char1)

    }



    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6

            let krak = new Fire(newX, newY)

            fireArr.push(krak)


        }
    }


    eat() {
        let emptyCell = this.chooseCell(1, 2)
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 7
            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
            }

            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                }
            }

            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                }
            }

            for (let i in axeArr) {
                if (newX == axeArr[i].x && newY == axeArr[i].y) {
                    axeArr.splice(i, 1)
                }
            }


            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy > 30) {
                this.mul()
            }

        } else {
            this.move()
        }
    }


    move() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }



    die() {
        matrix[this.y][this.x] = 0

        for (let i in fireArr) {
            if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
                fireArr.splice(i, 1)
            }

        }


    }
}

