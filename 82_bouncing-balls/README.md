### Bouncing Balls

A child plays with a ball on the nth floor of a big building. The height of this floor is known. 
(float parameter "h" in meters. Condition 1) : h > 0)

He lets out the ball. The ball bounces for example to two-thirds of its height.
(float parameter "bounce". Condition 2) : 0 < bounce < 1)

His mother looks out of a window that is 1.5 meters from the ground.
(float parameters "window". Condition 3) : window < h).

How many times will the mother see the ball either falling or bouncing in front of the window?

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note: You will admit that the ball can only be seen if the height of the rebouncing ball is strictly greater than the window parameter.

```javascript
bouncingBalls(3, 0.66, 1.5); // returns 3
```
