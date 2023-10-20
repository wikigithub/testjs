let strAddr = $request.url;
let headers = $request.headers;
headers['test'] = 'test';
//$done({strAddr});
console.log("testbbb");
console.log($response.status);



$done({
    status: 302,
    headers: {
    'Location': '192.168.5.6'
    }
    });
