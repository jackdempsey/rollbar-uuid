'use strict';

var uuidElement = document.getElementById('rollbar-uuid');

if (uuidElement) {
  var uuid = uuidElement.innerHTML.substr(7);

  setTimeout(function() {
    window.location.href = "https://rollbar.com/item/uuid/?uuid=" + uuid
  }, 3000);
}
