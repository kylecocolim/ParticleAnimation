class Particle{
    constructor(circleCount=0, radius=0){
        this.debug = false
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
            const tick = 3000
            ctx.canvas.width = window.outerHeight;
            ctx.canvas.height = window.outerHeight;
            if(this.debug){
                this.circleCount = 1
            }
            for(let i=0; i<this.circleCount;i++){
                let xPos = (Math.random()*tick)%window.outerHeight;
                let yPos = (Math.random()*tick)%window.outerHeight;
                console.log(xPos,yPos);
                this.drawCircle(ctx,xPos,yPos);
            }
        }
    }
    drawCircle(ctx,xPos,yPos){
        const tick = 10000;
        const red = (Math.random() * tick) % 255;
        const blue = (Math.random() * tick) % 255;
        const green = (Math.random() * tick) % 255
        if(this.debug){
            xPos = 100
            yPos = 100
        }
        ctx.beginPath();
        ctx.arc(xPos, yPos, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${red},${green},${blue},1)`
        ctx.fill();
        
        
    }
}
CIRCLECOUNT = 3000;
RADIUS = 20;
particle = new Particle(CIRCLECOUNT,RADIUS);
particle.init();