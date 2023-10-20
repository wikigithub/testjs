let strAddr = $request.url;
let headers = $request.headers;
headers['test'] = 'test';
//$done({strAddr});
console.log("testbbb1");
var response = new Object();
response.status = 302;
response.headers = {
    'Location': '192.168.5.6'
    };
console.log(response.status);



$done({response});
