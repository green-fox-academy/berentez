'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export {};

class Circle {
  parameters: number[];
  startPoint: number = 0;
  full: number = Math.PI * 2;

  constructor(parameters: number[]) {
    this.parameters = parameters;
    this.draw();
  }

  draw(): void {
    ctx.beginPath();
    ctx.arc(this.parameters[0], this.parameters[1], this.parameters[2], this.startPoint, this.full);
    ctx.stroke();
    ctx.closePath();
  }
}
let parameters: number[] = [canvas.width / 2, canvas.width / 2, canvas.width / 2];
let circle = new Circle(parameters);
circle.draw();

function circlePlay(n: number, parameters): Circle {
  if (n === 0) {
    return new Circle(parameters);
  } else {
    (parameters[0] = (parameters[0] / Math.sin(60)) * 200),
      (parameters[1] = (parameters[1] / Math.cos(60)) * 200),
      (parameters[2] = parameters[2] / (n * 2));
    new Circle(parameters);

    return circlePlay(n - 1, parameters);
  }
}

circlePlay(5, [400, 400, 400]);

// canvas.width / 2, canvas.width / (n * 2), canvas.width / (n * 2);
// canvas.width / Math.sin(60) * 200, canvas.width /Math.cos(60) * 200, canvas.width / (n * 2);
