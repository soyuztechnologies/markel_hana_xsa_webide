var body = '<html><body><img src="https://static.wixstatic.com/media/74c3a1_d23c9389ba744c62b9883118b5b8eb74~mv2.png/v1/fill/w_160,h_158,al_c,q_85,usm_0.66_1.00_0.01/atsv1.webp"></body></html>';
$.response.setBody(body);
$.response.contentType = "text/html";
$.response.status = $.net.http.OK;