#Lab 6: Messages
This website requests a JSON object containing messages from another server and displays them on the page. This took approximately 1 hour. 

It is not possible to request the data from a different origin using XMLHttpRequest. This is because the domain from which the data being accessed is different from the domain of the website serving the data. In the case of the heroku server, the data is being served from a different host. When the website is served using the file:/// protocol, the data cannot be used because the loading of data using the file:/// protocol is not allowed.
