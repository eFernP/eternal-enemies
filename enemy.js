'use strict';

class Enemy {
    constructor(canvas, y){
      this.size = 20;
      this.canvas = canvas;
      this.x = this.canvas.width;
      this.y = y;
      this.speed = 5;
      this.direction = -1;
      this.ctx = this.canvas.getContext('2d');
  
  };

  update(){
    this.x = this.x + this.direction * this.speed;
  };

  draw(){
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y - (this.size/2), this.size, this.size);
  }
}
