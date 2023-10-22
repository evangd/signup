const march = new Audio('march.mp3');
const submit = document.querySelector('button');
const check = document.querySelector('#confirm');
const slider = document.querySelector('#bg-container');
const cred = slider.querySelector('p');
const imgs = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
const credits = ['Photo by <a href="https://unsplash.com/@englishmum?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Becky Fantham</a> on <a href="https://unsplash.com/photos/two-star-wars-storm-troopers-guard-the-cockpit-d-l1y3n4r04?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>', 'Photo by <a href="https://unsplash.com/@saksham?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Saksham Gangwar</a> on <a href="https://unsplash.com/photos/two-star-wars-stormtrooper-action-figures-on-gray-surface-outdoors-BVWD_zX6-Zk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>', 'Photo by <a href="https://unsplash.com/@saksham?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Saksham Gangwar</a> on <a href="https://unsplash.com/photos/four-person-wearing-star-wars-clone-trooper-costumes-YVgOh8w1R4s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'];

document.addEventListener('DOMContentLoaded', function() {
    check.checked = false;
});

let currImg = 1;
setInterval(function() {
    slider.style.opacity = 0;
    setTimeout(function() {
        slider.style.background = 'url(' + imgs[currImg] + ') center / cover';
        cred.innerHTML = credits[currImg];
        setTimeout(function() {
            slider.style.opacity = 1;
        }, 250);
    }, 500);
    
    //slider.style.opacity = 1;

    if (++currImg === 3) currImg = 0;
}, 5000);

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