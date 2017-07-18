exports.createClient = (app, request, url, headers) => {
  app.post('/clients', (req, res) => {
    request.post( {
   		url : url + ".json",
   		headers : headers,
   		body : JSON.stringify(req.body)
   		},
   		(error, response, body) => {
   		  if (error)
   		    console.log(error);
   		  res.send(body);
   		}
   	);
  });
}
 
