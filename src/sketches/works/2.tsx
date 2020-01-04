export const sketch = (p: any) => {
  let pointCount = 30;
  let lissajousPoints: any[] = [];
  let freqX = 25;
  let freqY = 19;
  let phi = 90;

  let modFreqX = 1;
  let modFreqY = 1;

  let lineWeight = 0.4;
  let lineColor: any;
  let lineAlpha = 50;

  let connectionRadius = 250;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.RGB, 255, 255, 255, 100);
    p.noFill();

    lineColor = p.color(255);

    p.calculateLissajousPoints();
  };

  p.calculateLissajousPoints = () => {
    for (let i = 0; i <= pointCount; i++) {
      const angle = p.map(i, 0, pointCount, 0, p.TAU);

      let x = p.sin(angle * freqX + p.radians(phi)) * p.cos(angle * modFreqX);
      let y = p.sin(angle * freqY) * p.cos(angle * modFreqY);
      x *= p.width / 2 - 30;
      y *= p.height / 2 - 30;

      lissajousPoints[i] = p.createVector(x, y);
    }
  };

  p.draw = () => {
    p.background('#09090f');
    p.strokeWeight(lineWeight);
    p.push();
    p.translate(p.width / 2, p.height / 2);

    const shift = 0.0001 * (p.abs((p.millis() % 20000) - 10000) - 5000);
    for (let i = 0; i < pointCount; i++) {
      for (let j = 0; j < i; j++) {
        const d = lissajousPoints[i].dist(lissajousPoints[j]);
        const a = p.pow((connectionRadius + 1) / d, 2);

        if (d <= connectionRadius) {
          p.stroke(lineColor, a * lineAlpha);
          p.line(
            lissajousPoints[i].x,
            lissajousPoints[i].y,
            lissajousPoints[j].x,
            lissajousPoints[j].y
          );
        }
        lissajousPoints[i].x += shift;
        lissajousPoints[i].y += shift;
        lissajousPoints[j].x -= shift;
        lissajousPoints[j].y -= shift;
      }
    }
    p.pop();
  };

  p.keyPressed = () => {
    if (p.key === 's' || p.key === 'S') p.saveCanvas(p.gd.timestamp(), 'png');

    if (p.key === '1') freqX--;
    if (p.key === '2') freqX++;
    freqX = p.max(freqX, 1);

    if (p.key === '3') freqY--;
    if (p.key === '4') freqY++;
    freqY = p.max(freqY, 1);

    if (p.keyCode === p.LEFT_ARROW) phi -= 15;
    if (p.keyCode === p.RIGHT_ARROW) phi += 15;

    if (p.key === '7') modFreqX--;
    if (p.key === '8') modFreqX++;
    modFreqX = p.max(modFreqX, 1);

    if (p.key === '9') modFreqY--;
    if (p.key === '0') modFreqY++;
    modFreqY = p.max(modFreqY, 1);

    p.calculateLissajousPoints();
    //p.drawLissajous();

    console.log(
      'freqX: ' +
        freqX +
        ', freqY: ' +
        freqY +
        ', phi: ' +
        phi +
        ', modFreqX: ' +
        modFreqX +
        ', modFreqY: ' +
        modFreqY
    );
  };
};

export default sketch;
