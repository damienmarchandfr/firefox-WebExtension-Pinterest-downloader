var urls = {}
var mustDownload;
var count = 0;
var ids = []

browser.downloads.onCreated.addListener(function(d){
    var id = d.id
    if(ids.indexOf(id) === -1){
        ids.push(id)
    }
    browser.runtime.sendMessage({count : ids.length})

})

browser.runtime.onMessage.addListener(function(message) {

    if(message.state){
        if(message.state === 'on'){
            mustDownload = true
            ids = []
            browser.runtime.sendMessage({count : ids.length})
        }else{
            mustDownload = false
            urls = {}
            ids = []
            browser.runtime.sendMessage({count : ids.length})
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
