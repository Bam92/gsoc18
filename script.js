ajaxGet("http://localhost/gsoc18/petscan.json", function (reponse) {

    // Parse Data into objects.
    var queries = JSON.parse(reponse);

    // Display titles of pages
    queries.forEach(function (query) {    
        // link to the given article. use frwiki for this example        
        var link = document.createElement("a");
        link.textContent = query.title;
        link.href = "https://fr.wikipedia.org/w/" + query.title;
        
        var listElt = document.createElement("li"); // creating an li  tag        
        //listElt.textContent = link; // here we define the content of the li tag
        listElt.appendChild(link);
        
        
        document.getElementById("cities").appendChild(listElt);

        console.log(query.title);

    })

});
