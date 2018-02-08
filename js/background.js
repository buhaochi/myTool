chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        return {redirectUrl: details.url.replace( "ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js", "cdn.bootcss.com/jquery/1.12.4/jquery.min.js")};
    },
    {
        urls: [
        // https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
            "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
        ]
    },
    [
        "blocking"
    ]
);