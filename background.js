var urls = {}
var mustDownload;

browser.runtime.onMessage.addListener(function(message) {

    if(message.state){
        if(message.state === 'on'){
            mustDownload = true
        }else{
            mustDownload = false
        }
    } 
    if(message.uri && mustDownload === true){
        const uri = message.uri
        if(!urls[uri]){
            urls[uri] = false
        }
        //search url to download
        Object.keys(urls).forEach(function(key){
            if(urls[key] === false){
                urls[key] = true
                var downloading = browser.downloads.download({
                    url : key,
                    conflictAction : 'overwrite'
                });
                downloading    
            }
        })     
    }
    
})
