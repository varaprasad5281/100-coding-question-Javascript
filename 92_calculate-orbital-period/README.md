### Calculate Orbital Period

Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format `{name: 'name', avgAlt: avgAlt}`.

You can read about orbital periods [on wikipedia](http://en.wikipedia.org/wiki/Orbital_period).

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

```javascript
const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;

calculateOrbitalPeriod([{ name : "sputnik", avgAlt : 35873.5553 }]); // returns [{ name: 'sputnik', orbitalPeriod: 86400 }]
```

Helpful links:
* [Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
* [Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
