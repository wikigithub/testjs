let strAddr = $request.url;
let headers = $request.headers;
headers['test'] = 'test';
//$done({strAddr});
console.log("test333");
/*vat response
response.status = 302;
response.headers = "";*/
//$done({headers});
$done({
    status: 302,
    headers: {
    'Location': '192.168.5.6'
    }
    });
