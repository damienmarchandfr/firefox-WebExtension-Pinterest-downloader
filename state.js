
$('#switchDiv').hide()

browser.storage.local.get()
    .then(function(res){
        if(!res.state){
            $('#switch').prop('checked', false);  
            browser.runtime.sendMessage({state : 'off'})
            return browser.storage.local.set({
                state : 'off'
            });
        }else{
            if(res.state === 'off'){
                browser.runtime.sendMessage({state : 'off'})
                $('#switch').prop('checked', false);
            }else{
                browser.runtime.sendMessage({state : 'on'})
                $('#switch').prop('checked', true);
            }
        }      
    })
    .then(function(){
        $('#spinnerDiv').hide()
        $('#switchDiv').show()
    })

$('#switch').change(function() {
    if(this.checked){
        browser.runtime.sendMessage({state : 'on'})
        return browser.storage.local.set({
            state : 'on'
        });
    }else{
        browser.runtime.sendMessage({state : 'off'})
        return browser.storage.local.set({
            state : 'off'
        });
    }    
});

browser.runtime.onMessage.addListener(function(message){
    if(typeof message.count !== 'undefined'){
       $('#count').empty() 
       $('#count').append(message.count)
    }
})


