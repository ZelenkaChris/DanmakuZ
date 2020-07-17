class Cloud {
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }

    move() {
        this.position.y += 1;
    }

    draw(ctx) {
        let {x, y} = this.position;
        let {height, width} = this.size;

        ctx.fillStyle = 'gray';
        ctx.filter = 'opacity(33%)';
        ctx.fillRect(x - width/2, y - height/2, 
            width, height);
        ctx.filter ='opacity(100%)';
    }
}