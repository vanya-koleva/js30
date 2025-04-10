document.addEventListener('DOMContentLoaded', drumKit);

function drumKit() {
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return; // skip it if it's not a transform

        e.target.classList.remove('playing');
    }

    function playSound(e) {
        // Find the corresponding audio and key elements through data-key attribute
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return;

        key.classList.add('playing');
        audio.currentTime = 0; // rewind to the start
        audio.play();
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
}
