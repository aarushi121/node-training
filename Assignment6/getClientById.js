exports.getClientById = (app, request, url, headers) => {
  app.get('/clients/:clientId', (req, res) => {
    request.get( {
   		url : url + "/" + req.params.clientId + ".json",
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
 
