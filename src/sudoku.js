export class Sudoku {
    static checkNumbers(arr) {
        if (arr.includes("1") && arr.includes("2") && arr.includes("3") && arr.includes("4") && arr.includes("5") && arr.includes("6") && arr.includes("7") && arr.includes("8") && arr.includes("9"))
            return true;
        else
            return false;
    }

    static checkHorizontal(arr) {
        let check = true;
        for(let i = 0; i < 73; i+=9) {
            const tempArray = [arr[i],arr[i+1],arr[i+2],arr[i+3],arr[i+4],arr[i+5],arr[i+6],arr[i+7],arr[i+8]];
            check = Sudoku.checkNumbers(tempArray);
            if (check === false)
                return check;
        }
        return check;
    }

    static checkVertical(arr) {
        let check = true;
        for(let i = 0; i < 9; i++) {
            const tempArray = [arr[i],arr[i+9],arr[i+18],arr[i+27],arr[i+36],arr[i+45],arr[i+54],arr[i+63],arr[i+72]];
            check = Sudoku.checkNumbers(tempArray);
            if (check === false)
                return check;
        }
        return check;
    }

    static checkBox(arr) {
        let check = true;
        for(let i = 0; i < 9; i+=3) {
            const tempArray = [arr[i],arr[i+1],arr[i+2],arr[i+9],arr[i+10],arr[i+11],arr[i+18],arr[i+19],arr[i+20]];
            check = Sudoku.checkNumbers(tempArray);
            if (check === false)
                return check;
        }
        for(let i = 27; i < 34; i+=3) {
            const tempArray = [arr[i],arr[i+1],arr[i+2],arr[i+9],arr[i+10],arr[i+11],arr[i+18],arr[i+19],arr[i+20]];
            check = Sudoku.checkNumbers(tempArray);
            if (check === false)
                return check;
        }
        for(let i = 54; i < 61; i+=3) {
            const tempArray = [arr[i],arr[i+1],arr[i+2],arr[i+9],arr[i+10],arr[i+11],arr[i+18],arr[i+19],arr[i+20]];
            check = Sudoku.checkNumbers(tempArray);
            if (check === false)
                return check;
        }
        return check;
    }

    static checkDiagonals(arr) {
        const tempArray = [arr[0],arr[10],arr[20],arr[30],arr[40],arr[50],arr[60],arr[70],arr[80]];
        const tempArrayTwo = [arr[8],arr[16],arr[24],arr[32],arr[40],arr[48],arr[56],arr[64],arr[72]];
        const check = Sudoku.checkNumbers(tempArray);
        const checkTwo = Sudoku.checkNumbers(tempArrayTwo);
        if (check === true && checkTwo === true)
            return true;
        else
            return false;
    }
}