window.addEventListener('load', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contact-info-container").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "sowi.xml", true);
    xhttp.send();
  });
  