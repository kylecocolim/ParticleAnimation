class Particle{
    constructor(circleCount=0, radius=0){
        this.debug = true
        this.circleCount = circleCount
        this.radius = radius
    }
    init(){
        const canvas = document.querySelector('Canvas')
        if(this.debug){
            console.log("Debug Mode")
            console.log(`Circle Count : ${this.circleCount}, Radius : ${this.radius}`)
            console.log(canvas);
        }
        if(canvas){
            const ctx = canvas.getContext('2d');
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            this.drawCircle(ctx);
        }
    }
    drawCircle(ctx){
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
CIRCLECOUNT = 10;
RADIUS = 10;
particle = new Particle(CIRCLECOUNT,RADIUS);
particle.init();