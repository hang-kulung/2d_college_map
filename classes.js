class Boundary {
    static width = 64       //16 pixel(size of tile) * 4(400% zoom in)
    static height = 64      //16 pixel(size of tile) * 4(400% zoom in)
    constructor({ position }) {
        this.position = position
        this.width = 64
        this.height = 64
    }
    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0)'      //r=255 and alpha = 0 for opacity = 0
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Sprite {
    constructor({ position, image, frames = { max: 1 }, sprites}) {
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}

        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.moving = false
        this.sprites =sprites
    }

    draw() {
        c.drawImage(
            this.image,
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height,
        )
        if (this.frames.max > 1){
            this.frames.elapsed++
        }

        if (this.moving){
            if(this.frames.elapsed % 10 == 0){
                if (this.frames.val < this.frames.max - 1) this.frames.val++
                else this.frames.val = 0
            }
        }
    }
}