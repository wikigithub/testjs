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

    console.log("arg:" + $argument);
    const url = 'http://sg3.123eoe.com:32400/library/parts/8573/1667336142/file.mkv'
    var headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      'X-Plex-Token': $argument
    };
    
    $httpClient.head({ url: url, headers: headers }, function(error, response, data) {
    if (error) {
      console.log("请求失败:", error);
      $done();
      return;
    }
    
    console.log(response.status);
    console.log(response.headers);
    console.log("file size:" + response.headers['Content-Length']);
        
    var strReq = $request.url
    var iStart = strReq.indexOf("https://")
    var iEnd = strReq.indexOf(".plex.direct:32400")
    console.log(iStart.toString())
    var strEnd= iEnd.toString()
    console.log(strEnd)
    var strOldAddr = "https://" + strReq.slice(iStart + "https://".length,iEnd + ".plex.direct:32400".length)
    console.log(strOldAddr)
    var strNewAddr = strReq.replace(strOldAddr,"http://192.168.104.62:9090")
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
    
    console.log("testbbb111");
    var response = new Object();
    response.status = 302;
    response.headers = {
        'Location': strNewAddr
        };
    console.log(response.status);
    
    
    
    $done({response});
  });

    /*const Http = new XMLHttpRequest();
    const url = 'http://plex.123eoe.com:32400/library/parts/61002/1639618033/file.mkv'

    Http.open("GET", url);
    Http.setRequestHeader('X-Plex-Token', '');
    Http.send();
   
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }*/

    
  
}
//console.log($request.headers['Host']);



