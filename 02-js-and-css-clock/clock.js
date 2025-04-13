document.addEventListener('DOMContentLoaded', clock);

function clock() {
    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function handleTransition(hand, degrees, duration = '0.05s') {
        // Set the transition style based on the degrees (smooth transition except at 90°)
        hand.style.transition = degrees === 90 ? 'all 0s' : `all ${duration}`;
    }

    function calculateDegrees(unit, max) {
        // Calculate the degrees (0-360) and adjust to start from 12 o'clock
        return (unit / max) * 360 + 90;
    }

    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = calculateDegrees(seconds, 60);
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = calculateDegrees(mins + seconds / 60, 60);
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hour = now.getHours();
        const hourDegrees = calculateDegrees((hour % 12) + mins / 60, 12);
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;

        handleTransition(secondHand, secondsDegrees);
        handleTransition(minsHand, minsDegrees);
        handleTransition(hourHand, hourDegrees);
    }

    setInterval(setDate, 1000);
}

