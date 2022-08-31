1.  Get the expression as a string.
2.  Check if the expression for the following conditions.
3.         Switch(expression) {

             1. starts with invalid character? Throw Syntax Error
             2. Contains 2 concurrent operators e.g */? Throw Syntax Error
             3. Does not conain digits then operator after a dot (.)? Throw Syntax error.
             4. Ends with an operator or symbol? Throw syntax error.
             5. Contains more than 1 concurrent dot (.)? Throw syntax error.
             6. Contains only 1 digit? return that digit.
             7. Return expression if valid.

    }

4.  Tokenize expression
    loop through the array.
    for each iteration
    check if the array item has an operator of higher precendence:
    if so then get the get the item minus the first
