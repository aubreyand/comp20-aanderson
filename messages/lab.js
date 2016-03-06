var request;
function parse() {
        request = new XMLHttpRequest();
        var url = "https://messagehub.herokuapp.com/messages.json"
        request.open("GET", url, true);

        request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                        var response = JSON.parse(request.responseText);
                        var messages = document.getElementById("messages");                 
                        for (var i = 0; i < response.length; i++) {

                                messages.innerHTML += "<p><span class='user'>" + response[i].username + ": </span>";
                                messages.innerHTML += response[i].content + "</p><hr>";
                        }
                }
        }
        request.send();
}
