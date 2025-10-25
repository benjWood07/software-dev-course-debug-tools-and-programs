# 🛠️ Debugging Practice: E-Commerce Application

1st Bug FIX: Off-by-One Error in Loop
Original Error:
- Error Message: TypeError: Cannot read property 'price' of undefined
- Cause: Loop condition used `i <= cartItems.length` instead of `i < cartItems.length`
This caused the loop to run one extra time, trying to access cartItems[3] which doesn't exist
  
How Debugging Tools Helped:
- Console: "TypeError: Cannot read property 'price' of undefined"
- Call stack led me to this function as the error source
- Tried setting a breakpoint in the loop and watched the `i` variable. Revealed it reached 3 when array length was 3
- Using debugger statement inside the loop showed cartItems[i] was undefined on the final iteration
 
Fix Applied: Changed `i <= cartItems.length` to `i < cartItems.length`

2nd Bug FIX: Missing Input Validation for Discount Rate
Original Issue:
- No validation for discountRate parameter
- Could accept negative values, values > 1, or non-numeric values
- Would cause incorrect calculations or runtime errors

Edge Cases Discovered During Testing:
- discountRate = "0.2" (string) would cause NaN result

How Debugging Tools Helped:
- Setting breakpoints before the calculation allowed inspection of parameter values
- console.log() statements revealed unexpected discountRate values during edge case testing
- Testing with debugger statement showed the math producing incorrect results
  
Fix Applied: Added validation to ensure discountRate is a number between 0 and 1

3rd Bug FIX: Type Safety Issue with total Parameter
Original Issue:
- No validation that `total` is a number before calling .toFixed()
- If applyDiscount() returned undefined or a non-number, would throw:
  "TypeError: total.toFixed is not a function"

How Debugging Tools Helped:
- Call stack showed error originated at the .toFixed() call
- Breakpoint at function entry revealed total was sometimes undefined in edge cases
- Console confirmed typeof total when testing with empty cart or invalid inputs

Fix Applied: Added type checking and default value for total parameter

