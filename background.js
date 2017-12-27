browser.runtime.onMessage.addListener(function(message) {
    const uri = message.uri
    console.log('Try to download file : '+uri)
    var downloading = browser.downloads.download({
        url : uri,
        conflictAction : 'uniquify'
    });
    downloading
})
