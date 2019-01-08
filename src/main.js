import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Triangle } from './triangle';

$(document).ready(function() {
    $("#formInfo").submit(function(event) {
        event.preventDefault();
        let sideOne = parseInt($("#sideOne").val());
        let sideTwo = parseInt($("#sideTwo").val());
        let sideThree = parseInt($("#sideThree").val());
        
        let triangle = new Triangle(sideOne, sideTwo, sideThree);
        console.log(triangle);
        
        let isIsosceles = triangle.testIsosceles();
        let isEquilateral = triangle.testEquilateral();
        let isTriangle = triangle.testTriangle();

        if (isTriangle === false) {
            console.log("Not a Triangle");
        }
        else if (isEquilateral === true) {
            console.log("Equilateral");
        }

        else if (isIsosceles === true) {
            console.log("Isosceles");
        }

        else {
            console.log("Scaline");
        }
    });

});