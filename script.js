ajaxGet("http://localhost/gsoc18/petscan.json", function (reponse) {

    // Transform the response into JavaScript objects

    var queries = JSON.parse(reponse);

    // Display titles of pages

    queries.forEach(function (query) {
        var listElt = document.createElement("li"); // creating an li  tag
        listElt.textContent = query.title; // here we define the content of the li tag
        
      document.getElementById("cities").appendChild(listElt);

        console.log(query.title);

    })

});
