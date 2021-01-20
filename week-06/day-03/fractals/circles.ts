'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export {};

class Circle {
  x: number;
  y: number;
  radius: number;
  startPoint: number = 0;
  full: number = Math.PI * 2;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.draw();
  }

  draw(): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.startPoint, this.full);
    ctx.stroke();
    ctx.closePath();
  }
}

let circle = new Circle(400, 400, 400);
circle.draw();

function circlePlay(n: number): Circle {
  if (n === 0) {
    return new Circle(canvas.width / 2, canvas.height / 2, canvas.width / 2);
  } else {
    new Circle(canvas.width / 2, canvas.width / (n * 2), canvas.width / (n * 2));

    return circlePlay(n - 1);
  }
}

circlePlay(5);
