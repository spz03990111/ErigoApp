(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(".uib_w_4").click(function(evt)
        {
        /* your code goes here */ 
        });
        $("#SignIn").click(function(evt)
        {
        /* your code goes here */ 
            var usertag=document.getElementById("username");
            var name=usertag.getElementsByTagName("value");
            var passwordtag = document.getElementById("password");
            var password=passwordtag.getElementsByTagName("value");
            var packet = "Signin:" + user+ ":" + password;
            $.post('user.php', {variable: packet});
            document.write('Username is'\ + packet);
            
        });
        $(".uib_w_9").click(function(evt)
        {
        /* your code goes here */ 
        });
        $(".uib_w_28").click(function(evt)
        {
        /* your code goes here */ 
        });
        $("#SignUp").click(function(evt)
        {
        /* your code goes here */ 
        });
        $("#addsong").click(function(evt)
        {
        /* your code goes here */ 
        });
        $("#addimage").click(function(evt)
        {
        /* your code goes here */ 
        });
        $("#addlink").click(function(evt)
        {
        /* your code goes here */ 
        });
        $("#record").click(function(evt)
        {
        /* your code goes here */ 
        });
}
 $(document).ready(register_event_handlers);
})();
