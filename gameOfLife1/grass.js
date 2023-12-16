let LivingCreature = require("./LivingCreature")


module.exports = class Grass extends LivingCreature{
    constructor(x, y) {
        super(x,y)
    }

    mul() {
        this.multiplay++
        let emptyCell = super.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]
        if (newCell && this.multiplay >= 5) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 1

            let grass = new Grass(newX, newY)
            grassArr.push(grass)


            this.multiplay = 0


        }

    }


}

