exports.getClients = (app, request, url, headers) => {
  app.get('/clients', (req, res) => {
    request.get( {
   		url : url + ".json",
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
 
