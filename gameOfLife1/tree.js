let LivingCreature = require("./LivingCreature")





module.exports =  class Tree extends LivingCreature{
    constructor(x, y) {
        super(x,y)

    }

    mul() {

        let emptyCell = super.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random * emptyCell.length)]

        if (newCell && this.multiply >= 5) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let tre = new Tree(newX, newY)
            treeArr.push(tre)


            this.multiply = 0


        }


    }


}
