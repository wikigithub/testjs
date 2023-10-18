$request.url.replace('https', 'http');
//if ($network.wifi.ssid === 'Matrix' && $request.headers['Host'].includes('39561de9e2cd43229ba638cd0b39f817') && $request.url.includes("/library/parts/") && $request.url.includes(".mkv")) 
if ( ($request.headers['Host'].includes('39561de9e2cd43229ba638cd0b39f817') || $request.headers['Host'].includes('d39aae8764674d02a191e33b610246fd'))
    && $request.url.includes("/library/parts/")
    && $request.url.includes(".mkv")) 
{

    var strVhost = "plex.movie"
    if( $request.headers['Host'].includes('d39aae8764674d02a191e33b610246fd'))
    {
        strVhost = "plex.tv"
    }

    /*const Http = new XMLHttpRequest();
    const url = 'http://plex.123eoe.com:32400/library/parts/61002/1639618033/file.mkv'

    Http.open("GET", url);
    Http.setRequestHeader('X-Plex-Token', 'JEttnZi-5wovg_QJUwFx');
    Http.send();
   
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }*/

    var strReq = $request.url
    var iStart = strReq.indexOf("https://")
    var iEnd = strReq.indexOf(".plex.direct:32400")
    console.log(iStart.toString())
    var strEnd= iEnd.toString()
    console.log(strEnd)
    var strOldAddr = "https://" + strReq.slice(iStart + "https://".length,iEnd + ".plex.direct:32400".length)
    console.log(strOldAddr)
    var strNewAddr = strReq.replace(strOldAddr,"http://192.168.5.6:9090")
    console.log(strNewAddr)
    if($request.url.includes("?"))
    {
        strNewAddr = strNewAddr + "&vhost=" + strVhost
    }
    else
    {
        strNewAddr = strNewAddr + "?vhost=" + strVhost
    }
    
    console.log(strNewAddr)
    
    $done({
    status: 302,
    headers: {
    'Location': strNewAddr
    }
    })
      
    /*$response.status = 302;
    //let respheaders = $response.headers;
    let  respheaders = $request.headers;
    respheaders['Content-Length'] = '0';
    
    
    $done({respheaders});*/
   // var strTestAddr = "http://www.baidu.com";
   // $done({strTestAddr})
}
//console.log($request.headers['Host']);



done()
