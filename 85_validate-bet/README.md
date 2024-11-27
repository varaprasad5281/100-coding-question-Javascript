### SMS Lottery Bet Validator

You were asked to write a simple validator for a company that is planning to introduce lottery betting via text messages. The same validator will be used for multiple games: e.g. 5 out of 90, 7 out of 35, etc. (N out of M)

The text messages should contain exactly N unique numbers between 1 and M (both included), separated by a comma (,) and/or space(s). Any other character makes the bet invalid.

You receive the game type and the user's text message as input, and you need to check if the bet is valid or not. If it's valid, return the chosen numbers as a list, sorted in increasing order. If it's invalid, return null.

Note:
Leading and trailing spaces will not be tested. Tabs, newlines and other white spaces are not tested either. Think of a classic Nokia 3310 user for reference :-)
