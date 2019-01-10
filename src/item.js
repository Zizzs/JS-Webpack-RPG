export class Items {
    constructor(name, attack, gold) {
        this.name = name;
        this.attack = attack;
        this.gold = gold;
    }
}

export class woodSword extends Items{
    constructor() {
        super("Wooden Sword", 5, 250);
    }
}

export class woodBow extends Items{
    constructor() {
        super("Wooden Bow", 5, 250);
    }
}

export class woodWand extends Items{
    constructor() {
        super("Wooden Wand", 5, 250);
    }
}