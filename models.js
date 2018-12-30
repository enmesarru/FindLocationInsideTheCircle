class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // hep nokta ile aradaki uzaklığı hesaplıyor     
    distance(point) {
        let x_distance =  Math.pow(this.x - point.x, 2);
        let y_distance =  Math.pow(this.y - point.y, 2);
        let distance = Math.sqrt(x_distance + y_distance);
        return distance;
    }
}

class Circle {
    constructor(point, radius) {
        this.point = point;
        this.radius = radius;
    }
    
    // Uzaklık(distance) yarıçapından(radius) büyükse true, değilse false gönderiyor.
    calculateDistance(goal_point) { // dairenin koordinatı
        return this.point.distance(goal_point) > this.radius ? true : false; // gelen noktanın koordinatı
    }    
    //Daireyi çiziyor
    draw(context, x, y, radius) {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.lineWidth = 3;
        context.stroke();
    }

    // Noktalara bakıyor. Daha sonra uzaklığı yarıçapından büyük değilse
    // uzun çizgi çiziyor
    drawDistance(points, context) {
        points.forEach(element => {
            if(!this.calculateDistance(element.point)) {
                context.beginPath();
                context.moveTo(this.point.x, this.point.y);
                context.lineTo(element.point.x, element.point.y);
                context.strokeStyle = "#FF0000"
                context.stroke();
                context.closePath();
            }
        });
    }
}