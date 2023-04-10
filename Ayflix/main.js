// Load the YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Define global variables
var player, modalContainer, modalContent;

// Function to open the modal and play the video
function openModal(videoId) {
    // Get the modal container and content elements
    modalContainer = document.getElementById('modal-container');
    modalContent = document.querySelector('.modal-content');

    // Show the modal
    modalContainer.style.display = "block";

    // Create the YouTube player
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
            autoplay: 1,
            modestbranding: 1,
            rel: 0,
            controls: 1,
            disablekb: 1,
            enablejsapi: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Function to close the modal and stop the video
function closeModal() {
    modalContainer.style.display = "none";
    player.stopVideo();
    player.destroy();
}

// Function to handle the video player's ready state
function onPlayerReady(event) {
    event.target.playVideo();
}

// Function to handle the video player's state changes
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        closeModal();
    }
}

// Add click event listener to the close button
document.querySelector('.close').addEventListener('click', closeModal);

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const header = document.querySelector('header');
const navLinks = document.querySelectorAll('ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = e.currentTarget.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        const targetPosition = targetSection.offsetTop - header.offsetHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= header.offsetHeight) {
        header.classList.add('sticky', 'active');
    } else {
        header.classList.remove('sticky', 'active');
    }
});

