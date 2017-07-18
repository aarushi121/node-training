exports.deleteClientById = (app, request, url, headers) => {
  app.delete('/clients/:clientId', (req, res) => {
    request.delete( {
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
 
