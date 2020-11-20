function contactSubmitHandler(evt){
  // stop page refresh on form submit in js 
  evt.preventDefault();
 
  // 
  // todo: read the form data in js 
  var contactData = {
    name: document.getElementById('firstName').value + " " + document.getElementById('lastName').value,
    email: document.getElementById('email').value + '@' +document.getElementById('emailDomain').value ,
    phone: document.getElementById('countryCode').innerText + document.getElementById('phone').value
  }

  // POST 
  // http://jsonplaceholder.typicode.com/users/

  var xmlHttpReq = new XMLHttpRequest();

  xmlHttpReq.onreadystatechange = function(){
    console.log('Inside ReadyStateChange');

    console.log(this.readyState);
    /* 1: server connection established
      2: request received by the server
      3: processing request in the server
      4: request finished and response is ready */

    if(this.readyState == 4){
      console.log(this.response);
      var status = JSON.parse(this.response);
      if(status && status.id == 11){
        alert('Saved Successfully!');
      }
    }
  }
  
  xmlHttpReq.open("POST", "http://jsonplaceholder.typicode.com/users/");
  xmlHttpReq.send(contactData);


  console.log('Ended');
  console.log(contactData);
}

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    navigator.geolocation.watchPosition()
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
