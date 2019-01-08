export class Triangle {
    constructor(sideOne, sideTwo, sideThree) {
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
    }

    testEquilateral() {
        if (this.sideOne === this.sideTwo && this.sideTwo === this.sideThree) {
            return true;
        }
    }

    testIsosceles() {
        if (this.sideOne === this.sideTwo || this.sideOne === this.sideThree || this.sideTwo === this.sideThree) {
            return true;
        }
    }

    testTriangle() {
        if (this.sideOne + this.sideTwo <= this.sideThree || this.sideOne + this.sideThree <= this.sideTwo || this.sideTwo + this.sideThree <= this.sideOne) {
            return false;
        }
    }
}