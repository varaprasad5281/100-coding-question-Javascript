### Working hours

Write a function which formats a working hours schedule, given as an array of objects, in a human-friendly way.

The function must accept an unsorted array. If the array is empty, it just returns an empty array. Otherwise, it should make a sorted human-friendly schedule of working hours and return it as a string.

The output format for one day should be `SUN: 11:00 - 23:00`.

If two or more days of the week in a row have the same working hours they should be concatenated and have the following format: 
`MON - WED: 11:00 - 23:00`
