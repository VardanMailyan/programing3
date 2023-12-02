class Tree extends LivingCreature{
    constructor(x, y) {
        super(x,y)

    }

    mul() {

        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

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
