let strAddr = $request.url;
let headers = $request.headers;
headers['test'] = 'test';
//$done({strAddr});
console.log("testbbb22");
var response = new Object();
response.status = 302;
response.headers = {
    'Location': 'http://192.168.104.62:9091/:'
    };
console.log(response.status);



$done({response});
