rollbar-uuid
============

Chrome extension that lifts a Rollbar.com UUID out of an error page and opens it automatically. 

1. Clone this repository down 
1. Render a <meta> tag with name rollbar-uuid and value of the error's uuid from Rollbar.
2. Configure the manifest.json file to match your company's URL (instead of the company.com placeholder)
3. Turn on development mode in the top right of the chrome://extensions/ page and use the 'load unpacked extension' button at the left
4. Point it at this projects app folder and select
5. Render an error page with uuid meta tag and watch in 3 seconds as the Rollbar item loads up.
