const buttonPlay = document.querySelector('.video__button-play');
const videoPlayer = document.querySelector('.video');

const playVideo = () => {
  if (buttonPlay && videoPlayer) {
    videoPlayer.classList.add('hide');
  } else {
    return;
  }
};

export const initVideo = () => {
  if (buttonPlay) {
    buttonPlay.addEventListener('click', playVideo);
  } else {
    return;
  }
};
