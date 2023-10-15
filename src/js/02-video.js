
import Vimeo from '@vimeo/player';

const player = new Vimeo('vimeo-player');
let throttleTimeout;

player.on('timeupdate', function(data) {
  if (!throttleTimeout) {

    throttleTimeout = setTimeout(function() {
      localStorage.setItem('videoplayer-current-time', data.seconds);
      throttleTimeout = null;
    }, 1000);
  }
});
document.addEventListener('DOMContentLoaded', function() {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
      player.setCurrentTime(currentTime);
    }
  });
  import throttle from 'lodash.throttle';
  player.on('timeupdate', throttle(function(data) {
    // ...
  }, 1000));