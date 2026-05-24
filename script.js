// Target Date: July 15, 2026 at 7:30 AM
const departureDate = new Date('July 15, 2026 07:30:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = departureDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display results, adding a leading zero if numbers are single digits
    document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-grid').innerHTML = "<div class='race-over-message'>It's Lights Out And Away We Go! 🏁</div>";
        document.querySelector('.subtitle').innerHTML = "Flight is departing!";
    }
}

// Run immediately on load, then every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);