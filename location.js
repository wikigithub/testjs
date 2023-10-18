//$request.url = $request.url.replace('123eoe.com', '163.com');
//$done({$request});

if ($request.url.includes('123eoe.com')) {
$done({
status: 302,
headers: {
'Location': $request.url.replace('123eoe.com', '163.com')
}
})
}
