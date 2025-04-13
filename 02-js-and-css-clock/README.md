# JS + CSS Clock

A simple analog clock built with HTML, CSS, and JavaScript.

## CSS

-   `transform-origin` - Sets the point around which the element will rotate or transform. [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

    -   `transform-origin: 100%` - This means the origin is on the **far right side** (furthest point on the **x-axis**) of the element. If you're rotating a clock hand, you'd want it to spin around the base (which is typically on one end).

-   `transform: rotate(90deg)` - Rotates the element 90 degrees clockwise. This sets the initial orientation of the hand.

    -   By default, the rotation happens around the **center** of the element (i.e. `transform-origin: 50% 50%`), which is the midpoint of both the X and Y axes.

-   `transition: all 0.05s` - Tells the browser to **animate any change** to the element’s style over 0.05 seconds.

    -   Creates a smooth animation when the element transforms, instead of jumping instantly.

    -   `all`: Applies this transition duration to all animatable properties.

-   `transition-timing-function` - Controls **how the transition progresses over time** — this is an easing function.

    -   Common values:

        -   `linear`: Same speed from start to finish.
        -   `ease-in`: Starts slow, speeds up.
        -   `ease-out`: Starts fast, slows down.
        -   `ease-in-out`: Slow start and end.
        -   `cubic-bezier(x1, y1, x2, y2)`: Custom easing curve.

    -   `cubic-bezier` gives full control over the speed curve of the animation.
        -   Example: `cubic-bezier(0.68, -0.55, 0.27, 1.55)` creates a springy, bouncy effect.
        -   You can tweak it visually with [this cubic-bezier tool](https://cubic-bezier.com/) or by clicking on `cubic-bezier(...)` in your browser's DevTools.

## JavaScript

-   `setInterval` - A built-in function that repeatedly calls a specified function at fixed time intervals.

    -   Returns an interval ID which you can use with `clearInterval` to stop it.

```js
setInterval(function, delay, param1, param2, ...)
```

-   `new Date()` creates a new Date object. By default, it represents the current date and time based on the system’s clock.

-   `.getSeconds()` is a method that extracts the seconds portion of the time from the Date object.

    -   It returns a number between 0 and 59.

-   There are also `.getMinutes()` and `.getHours()` methods for extracting minutes and hours, respectively.

### Calculate the rotation in degrees for a clock hand

```js
const secondsDegrees = (seconds / 60) * 360 + 90;
```

-   Dividing `seconds / 60` gives you a fraction of a full minute which is the precentage of the rotation.

-   Multiplying that by 360 converts that fraction into degrees of rotation around a circle (because a full circle = 360°).

-   We add 90 to offset for the 90degrees in the CSS (`transform: rotate(90deg);`). This ensures the clock starts at the top (12 o'clock).

## My Changes to The Project

-   Separated the HTML, CSS and JS code.

-   Separated some common logic using helper functions and added logic to avoid sudden jumps of the hands:

    -   `calculateDegrees` - This function calculates the degree of rotation for each hand based on the current unit (seconds, minutes, or hours) and ensures it starts at the 12 o'clock position by adding 90 degrees.

    -   `handleTransition` - A function to control the transition timing. If the hand is at exactly 90 degrees, it sets the transition duration to 0s to avoid sudden jumps. Otherwise, it applies a smooth transition.

