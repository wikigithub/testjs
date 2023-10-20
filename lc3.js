let strAddr = $request.url;
let headers = $request.headers;
headers['test'] = 'test';
//$done({strAddr});
console.log("test33333");
var response;
response.status = 302;
response.headers =  {'Location': '192.168.5.6'};

$done({response});
//$done({headers});
/*$done({
    status: 302,
    headers: {
    'Location': '192.168.5.6'
    }
    });*/
