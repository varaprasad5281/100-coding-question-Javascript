### Time simulation

When developing a game, it's often useful to be able to control time. We could slow it down when a character dies, or speed it up to make things look flashy, or stop time altogether when the player pauses the game.

Let's write an object we can use to simulate time and mess with it as we wish!

`new TimeSimulation()`

Creates a new TimeSimulation instance. Nothing special here. Once an instance has been created, we can use its methods to play with time, and get the current "simulated" time.

```javascript
 let sim = new TimeSimulation();
 sim.get();
```

Returns the current time withing the simulation. This value will start at 0.

```javascript
sim.get() === 0;
sim.setSpeed(newSpeed);
```

At the current realtime and simtime, the simulation speed is set to newSpeed.

From the current realtime until the speed is changed again, simulated time should reflect this new speed.

Note: speed can go negative and may lead simulated time "into the past".

```javascript
sim.setSpeed(2); // now each change in real time will be doubled for simulate time
sim.setSpeed(1); // now changes in simulated time will be the same as in real time

sim.update(currentRealtime);
/*
Used to tell the simulation what the current time is outside, in the real world. This will be used to calculate the change in realtime, and therefore the change in simulated time.
Real time only moves in one direction. So if `currentRealtime` doesn't make sense (moves backwards), throw an error.
Assuming current speed is 1
*/

 sim.update(10);
 sim.get() === 10;
```
