import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars-background',
  standalone: true,
  imports: [],
  templateUrl: './stars-background.component.html',
  styleUrl: './stars-background.component.scss',
})
export class StarsBackgroundComponent implements OnInit {
  mousePositionX?: number;
  mousePositionY?: number;
  mouseTriggerStars: boolean = false;
  ngOnInit(): void {
    this.initStarfield();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mousePositionX = event.clientX;
    this.mousePositionY = event.clientY;
  }

  initStarfield() {
    const canvas = document.getElementById('c') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    // remove frame margin and scrollbars when max out size of canvas
    document.body.style.margin = '0px';
    // document.body.style.overflow = 'hidden';

    // get dimensions of window and resize the canvas to fit
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // get 2d graphics context and set global alpha
    const G = context as CanvasRenderingContext2D;
    G.globalAlpha = 0.3;

    // setup aliases
    const M = Math;
    const Rnd = M.random;
    const Sin = M.sin;
    const Floor = M.floor;

    // constants and storage for objects that represent star positions
    const warpZ = 10;
    const units = 500;
    // const freq = 0.3;
    const stars: {
      x: number;
      y: number;
      z: number;
      px: number;
      py: number;
      vx: number;
      vy: number;
    }[] = [];
    let cycle = 0;

    let Z = 0.075;

    // function to reset a star object
    function resetstar(a: any) {
      a.x = (Rnd() * width - width * 0.5) * warpZ;
      a.y = (Rnd() * height - height * 0.5) * warpZ;
      a.z = warpZ;
      a.px = 0;
      a.py = 0;
    }

    // initial star setup
    for (let i = 0, n; i < units; i++) {
      n = { x: 0, y: 0, z: 0, px: 0, py: 0, vx: 0, vy: 0 };

      resetstar(n);
      stars.push(n);
    }

    // star rendering anim function
    setInterval(() => {
      // clear background
      G.fillStyle = '#000';
      G.fillRect(0, 0, width, height);

      // Initial mouse position where stars begin
      let mousex = width / 2;
      let mousey = height / 2;

      if (
        this.mousePositionX !== undefined &&
        this.mousePositionY !== undefined &&
        this.mouseTriggerStars
      ) {
        // Current mouse position where hyperspeed should occur on click
        mousex = this.mousePositionX as number;
        mousey = this.mousePositionY as number;
      }

      // update all stars
      for (let i = 0; i < units; i++) {
        const n = stars[i];
        const xx = n.x / n.z;
        const yy = n.y / n.z;
        const e = (1.0 / n.z) * 5 + 1;
        // const r = Sin(freq * i + cycle) * 64 + 190;
        // const g = Sin(freq * i + 2 + cycle) * 64 + 190;
        // const b = Sin(freq * i + 4 + cycle) * 64 + 190;

        if (n.px != 0) {
          // Colored
          // G.strokeStyle = `rgb(${Floor(r)}, ${Floor(g)}, ${Floor(b)})`;
          G.strokeStyle = `rgb(255, 255, 255)`;
          G.lineWidth = e;
          G.beginPath();
          G.moveTo(xx + mousex, yy + mousey);
          G.lineTo(n.px + mousex, n.py + mousey);
          G.stroke();
        }

        n.px = xx;
        n.py = yy;
        n.z -= Z;

        if (n.z < Z || n.px > width || n.py > height) {
          resetstar(n);
        }
      }

      cycle += 0.1;
    }, 25);
  }
}
