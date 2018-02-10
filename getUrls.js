
function refresh(){
    setTimeout(function(){ 
        $("body").find('img').each(function(index){
                if(index > 1){
                   var uri = $(this).attr('srcset').split(',')[3].split(' ')[1]
                   if(uri){
                        browser.runtime.sendMessage({uri : uri})
                   }
                }
        });
        refresh();
    }, 3000);
}

refresh()