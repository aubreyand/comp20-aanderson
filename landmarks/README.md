# Historic Landmarks

This webpage correctly retrieves the clients latitude and longitude and sends
it to the datastore. It then displays the locations of the client, other people
in the class, and historic landmarks within one mile of the client. The client
is shown as a green flag. Other people in the class are shown as stick figures.
Landmarks are shown as an exclamation point in a bubble. Upon clicking on a
marker of a person in the class, it displays the login name of that person and
the distance from the client to that person. When a landmark is clicked on, it
displays information about that landmark courtesy of the National Register of
Historic Places. When the client's marker is clicked on, an info window
containing the closest landmark and its distance is displayed along with a
polyline to that location.

This project took about 10 hours to complete.

The haversine formula was obtained from these links:
[movable-type.co.uk](http://www.movable-type.co.uk/scripts/latlong.html) and [stackoverflow.com](http://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript)
