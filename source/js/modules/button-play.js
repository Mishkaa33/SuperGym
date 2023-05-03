const buttonPlay = document.querySelector('.video__button-play');
const videoPlayer = document.querySelector('.video');

const playVideo = () => {
  if (buttonPlay && videoPlayer) {
    videoPlayer.classList.add('hide');
  } else {
    return;
  }
};

buttonPlay.addEventListener('click', playVideo);
