var mouseEvent ="empty";
var last_positon_of_x;
var last_positon_of_y;

var canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


var color ="black";
var width =3;


canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    mouseEvent="mousedown";
}


canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouseEvent="mouseup";
}



canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";
}


canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    var current_position_of_x = e.clientX - canvas.offsetLeft;
    var current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("last position of x = "+ last_positon_of_x +" last position of y ="+ last_positon_of_y);
        ctx.moveTo(last_positon_of_x, last_positon_of_y);

        console.log("current position of x =" + current_position_of_x + "current position of y =" + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();

    }
    last_positon_of_x = current_position_of_x;
    last_positon_of_y = current_position_of_y;


}