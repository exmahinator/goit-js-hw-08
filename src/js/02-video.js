import Player from '@vimeo/player';

const LOCAL_CURRENT_KEY = 'videoplayer-current-time';
const savedTime = localStorage.getItem(LOCAL_CURRENT_KEY);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function ({ seconds }) {
  localStorage.setItem(LOCAL_CURRENT_KEY, seconds);
};

player.on('timeupdate', onPlay);

if (savedTime !== null) {
  player.setCurrentTime(Number(savedTime));
}
