'use strict';

var uuid = document.querySelector('meta[name="rollbar-uuid"]').attributes.value.value

if (uuid) {
  //give Rollbar a few seconds for the uuid to propagate through their system.
  //sometimes you'll still see this message and just refresh to clear it:
  //"UUID not found. It may still be processing or it could have been deleted. Hit refresh?"
  setTimeout(function() {
    window.location.href = "https://rollbar.com/item/uuid/?uuid=" + uuid
  }, 3000);
}
