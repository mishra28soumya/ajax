var XMLHttpRequest = require('xhr2');

const req = new XMLHttpRequest();
req.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        
       console.log(this.responseText);
    }
}
req.open("GET", "https://www.mecallapi.com/api/users/");
req.send();
