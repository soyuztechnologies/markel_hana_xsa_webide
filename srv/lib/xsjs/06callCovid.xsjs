function callCorona(){
	var dest = $.net.http.readDestination("EXTERNAL_HTTP");
	var client = new $.net.http.Client();
	var request = new $.web.WebRequest($.net.http.GET,"");
	client.request(request, dest);
	var response = client.getResponse();
	var body = null;
	if(response.body){
		body = response.body.asString();
	}
	$.response.status = response.status;
	$.response.contentType = "application/json";
	if(response.status === $.net.http.INTERNAL_SERVER_ERROR){
		$.response.setBody({"error":"internal error"});
	}else{
		$.response.setBody(body);
	}
}

callCorona();