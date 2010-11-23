;
feedback = {
    submit: function(form){
        var data = {};
        var feedback_url = $(form).attr('action');
        $(form).find(':input').each(function(){
            var key = $(this).attr('name');
            var value = $(this).attr('value');
            data[key] = value;
        });
        
        console.log($(form).find(':input'));
        console.log(data);
        
        $.post(feedback_url, data, function(data, textStatus){
            $(form).replaceWith(data).show();
        });
        return false;
    }
};
