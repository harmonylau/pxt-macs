enum Food {
    McSpicy = 0,
    McChicken = 1,
    Fries = 2,
    IceCream = 3
}

enum Drinks {
    Coke = 0,
    Tea = 1,
    Coffee = 2
}

namespace macs{
    //% block="eat $food"
    export function eat(food: Food) {
    }
    //% block="drink $drinks"
    export function drink(drinks: Drinks) {
    }
}



