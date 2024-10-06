export const fullScreen = function () {
  var docElm = document.getElementById("full");
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  } else {
    if (docElm.exitFullscreen) {
      docElm.exitFullscreen();
    } else if (docElm.webkitExitFullscreen) {
      docElm.webkitExitFullscreen();
    } else if (docElm.mozCancelFullScreen) {
      docElm.mozCancelFullScreen();
    } else if (docElm.msExitFullscreen) {
      docElm.msExitFullscreen();
    }
  }
};
