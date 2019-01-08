import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sudoku } from './sudoku.js';



$(document).ready(function() {
    $("#formInfo").submit(function(event) {
        event.preventDefault();
        const arr = [];
        for(let i = 0; i <= 80; i++)
            arr.push($(`#${i}`).val());
        const horizontal = Sudoku.checkHorizontal(arr);
        const vertical = Sudoku.checkVertical(arr);
        const box = Sudoku.checkBox(arr);
        const diagonal = Sudoku.checkDiagonals(arr);
        console.log("Horizontal Rule is " + horizontal);
        console.log("Vertical Rule is " + vertical);
        console.log("Box Rule is " + box);
        console.log("Diagonal Rule is " + diagonal);
    });

});