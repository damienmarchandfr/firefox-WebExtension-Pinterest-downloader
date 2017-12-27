
var urls = {}

function refresh(){
    setTimeout(function(){ 
        //call to get all urls
        $('._vq').each(function( ) {
            var element = $( this )
            var img = element.find('._mi').attr('srcset')    
             
            if(img){
                var uri = img.split(',')[img.split(',').length-1].split(' ')[1]
                if(!urls[uri]){
                    urls[uri] = false
                }
                //search url to download
                Object.keys(urls).forEach(function(key){
                    if(urls[key] === false){
                        urls[key] = true
                        browser.runtime.sendMessage({uri : key})     
                    }
                })
            }
          });
        refresh();
    }, 3000);
}

refresh()