$request.url.replace('https', 'http');
if ($request.headers['Host'].includes('39561de9e2cd43229ba638cd0b39f817') && $request.url.includes("/library/parts/") && $request.url.includes(".mkv")) 
{
$done({
status: 302,
headers: {
'Location': $request.url.replace('https://10-0-0-199.39561de9e2cd43229ba638cd0b39f817.plex.direct:32400', 'http://192.168.5.6:9090').replace('mkv','mkv?vhost=plex.movie')
}
})
}
//console.log($request.headers['Host']);

$response.status = 302;
let respheaders = $response.headers;
respheaders['Content-Length'] = '0';


$done({respheaders});

done()
