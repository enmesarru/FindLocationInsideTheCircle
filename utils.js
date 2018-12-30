function drawCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.stroke();
    context.fill()
    context.closePath();
}

function drawText(text, x, y) {
    context.font = "10px Arial";
    context.fillText(text, x, y); 
}

function lerp (start, end, amt){
    return (1 - amt) * start + amt * end
}