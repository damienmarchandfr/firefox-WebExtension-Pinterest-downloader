
browser.storage.local.get()
    .then(function(res){
        if(!res.state){
            $('#switch').prop('checked', false);
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


