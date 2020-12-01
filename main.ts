enum Food {
    Burger = 0,
    Fries = 1,
    IceCream = 2
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



