exports.getLists = (app, request, url, headers) => {
  app.get('/clients/:clientId/lists', (req, res) => {
    request.get( {
   		url : url + "/" + req.params.clientId + "/lists.json",
   		headers : headers
   		},
   		(error, response, body) => {
   		  if (error)
   		    console.log(error);
   		  res.send(body);
   		}
   	);
  });
}
