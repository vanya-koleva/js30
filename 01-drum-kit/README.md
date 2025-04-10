# JavaScript Drum Kit

A simple keyboard-driven soundboard using JavaScript, HTML5 `<audio>`, and CSS animations. Tap your keys to trigger meows and see visual effects!

This project is meant to imitate the functionality of a keyboard.

---

-   `data-` followed by a name - user-defined attributes used to store custom data on HTML elements.

    -   This is super handy in situations like event handling, where you need to know some extra info about the element clicked.

```html
<div data-key="65" class="key"></div>
```

---

-   When you're building a CSS selector string (like for `querySelector`), you need to include the quotes that the selector syntax expects.

```js
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
```

---

-   `audio.play()` is a method in JavaScript used to play audio in the browser.

    -   It tells the browser to start playing an audio file.

    -   It’s a promise-based method, meaning it returns a Promise that resolves when playback starts successfully.

    -   Use `.mp3`, `.ogg`, or `.wav`, depending on browser support.

---

-   `audio.currentTime = 0;` resets the audio to the beginning in case it was already playing, allowing quick repeated sounds (like hitting the same key fast).

---

-   When you have an array of elements, you cannot listen to all of them. You MUST explicitly loop over every single element and attach an event listener.

---

-   `transform` lets us visually manipulate an element — move it, scale it, rotate it, skew it, and more — without affecting the actual layout of the page.

    -   It won’t affect surrounding elements.

    -   Chainable — you can combine transforms: `transform: scale(1.2) rotate(30deg);`

---

-   `transform` vs `transition`

    -   `transform` = What change happens? The visual effect (move, scale, rotate)

    -   `transition` = How the change happens (speed, easing)? Controls the speed and style of that effect to add animation between states.

---

-   `e.propertyName` - When a transitionend event fires, the event object (e) contains a property called propertyName. This tells us which CSS property finished transitioning.

    -   The `transitionend` event doesn’t let you specify a particular property when adding the event listener — it just fires for any transitioned property. So the only way to control which one you respond to is by checking `e.propertyName` inside the handler.

```js
// Only continue if the transitioned property was 'transform'
if (e.propertyName !== 'transform') return;
```

### My Changes to The Project

-   Separated the JavaScript code from the HTML.

-   Stylistic changes - different background images and sounds.
