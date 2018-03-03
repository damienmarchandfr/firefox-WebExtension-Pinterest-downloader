
function refresh(){
    setTimeout(function(){ 
        $("body").find('img').each(function(index,element){
            try {
                var urls = element.attributes.getNamedItem('srcset').nodeValue.split(' ')
                var has4x = urls.indexOf('4x')
                var uri
                if(has4x > -1){
                    uri = urls[has4x-1]
                }
                if(uri){
                    browser.runtime.sendMessage({uri : uri})
                }
            } catch (error) {
               
            }
        });
        refresh();
    }, 3000);
}

refresh()