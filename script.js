const march = new Audio('march.mp3');
const submit = document.querySelector('button');
const check = document.querySelector('#confirm');

document.addEventListener('DOMContentLoaded', function() {
    check.checked = false;
});

check.addEventListener('change', toggleSong);
submit.addEventListener('click', function() {
    if (!check.checked) {
        document.querySelector('#faith').textContent =
            "↓ I find your lack of faith disturbing";
    }
});

function toggleSong() {
    if (check.checked) {
        march.play();

        submit.style.backgroundColor = 'black';
        submit.style.color = 'white';
    } else {
        march.pause();

        submit.style.backgroundColor = 'white';
        submit.style.color = 'black';
    }
}