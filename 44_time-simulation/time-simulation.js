export class TimeSimulation {
  constructor() {
    (this.simTime = 0), (this.realTime = 0), (this.speed = 1);
  }

  get() {
    return this.simTime;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  update(currentRealTime) {
    if (currentRealTime < this.realTime) {
      throw Error('Not a valid current time');
    }
    this.simTime += (currentRealTime - this.realTime) * this.speed;
    this.realTime = currentRealTime;
  }
}
