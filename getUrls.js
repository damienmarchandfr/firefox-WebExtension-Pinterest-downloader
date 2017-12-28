
function refresh(){
    setTimeout(function(){ 
        
        //call to get all urls
        $('._vq').each(function( ) {
            var element = $( this )
            var img = element.find('._mi').attr('srcset')    
             
            if(img){
                var uri = img.split(',')[img.split(',').length-1].split(' ')[1]
                browser.runtime.sendMessage({uri : uri})
            }
          });
        refresh();
    }, 3000);
}

refresh()