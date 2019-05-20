function getFun(url,data,callback){
	data["access_token"] = JSON.parse(localStorage.getItem("access_token"));
	$.ajax({
		type:"get",
		url: _ctxPath + url,
		dataType: "json",
		data: data,
		success: callback
	});
}
function postFun(url,data,callback){
	data["access_token"] = JSON.parse(localStorage.getItem("access_token"));
	$.ajax({
		type:"post",
		url: _ctxPath + url,
		dataType: "json",
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		data: data,
		success: callback
	});
}

