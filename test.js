var XMLHttpRequest = require('xhr2');
function reqListener () {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://www.google.com/search?q=http");
req.send();
