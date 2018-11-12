# RANDOM PHONE NUMBER GENERATOR

## THESE METHODS RETURN A NUMBER, YOU CAN USE THEM AS VARIABLES

### DECLARE
```JAVASCRIPT
var numbergenerator = new NumberGenerator()
```

### .generateNumber(options)
-   generate a number
```javascript

// GENERATE PHONE NUMBERS
numbergenerator.generateNumber(options)

// OPTIONS AVAILABLE ARE:
options = {
    length: // THE LENGTH OF THE NUMBER (8 WILL RETURN A 8 DIGIT NUMBER)
}
```

### .evaluate_number(start,stop,req)
-   return a number that matches the specified pattern
```javascript
//EXAMPLES
numbergenerator.evaluate_number(0,2,81) // -> IT WILL RETURN NUMBERS THAT MATCHES `81` FROM THE FIRST 2 DIGITS ([81]998382)
```

-   start = place where you want it to check for (starting from 0)
-   stop = place where you want it to stop checking
-   req = requirement

### .writeTo(start, stop, req, writename)
-   evaluate_number() but with writing included (to an external .txt file) **!! IT WILL ONLY WRITE IF A NUMBER IS FOUND, IF IT IS NOT FOUND, IT WONT WRITE ANYTHING, SO TO MAKE IT WRITE SOMETHING, RUN THIS IN A LOOP !!**
```javascript
numbergenerator.writeTo(start, stop, req, writename)
```
-   start = place where you want it to check for (starting from 0)
-   stop = place where you want it to stop checking
-   req = requirement
-   writename = the name of the file you want to write [WITHOUT THE .txt AT THE BACK]

```
DISCLAIMER:
I AM NOT RESPONSIBLE FOR YOUR ACTIONS IF YOU USE THESE NUMBERS GENERATED FROM THIS PROGRAM IRRESPONSIBLY!
```