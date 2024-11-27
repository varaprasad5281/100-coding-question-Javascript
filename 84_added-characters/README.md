### Added Characters

Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters).

Write a function that takes two strings and returns the added character as described above.

Notes:
* The characters could be anywhere in the string and string2 is actually shuffled.
* The added character could also exist in the original string.
* You can assume that string2 will always be larger than string1, and there will always be three added characters in string2.

```javascript
addedCharacters('abcde', '2db2a2ec'); // returns '2'
addedCharacters('aabbcc', 'aacccbbcc'); // returns 'с'
```
