
  $(document).ready(function(){
      $('#myform').validate({
          rules:{
              user:{
                  required:true,
                  pattern: /^[A-Za-z' ']+$/,
                  minlength:5,
                  maxlength:15,
              },
              mbl:{
                  required:true,
                  pattern:/^[0-9]{10}$/,
              },
              mail:{
                  required:true,
                  email:true,
                  pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
              },
              comment:{
                required:true,
                maxlength:100,
                pattern: /^[A-Za-z0-9' ']+$/,
              },
              
          },
          messages:{
         user:{
                  required:"Enter your username",
                  pattern:"username contains alphabets and space only",
                  minlength:"username atleast have five characters",
                  maxlength:"username have 15 characters only",
              },
              mbl:{
                  required:"Enter your Phone number",
                  pattern:"Enter the valid number",
              },
              mail:{
                  required:"enter your email",
                  email:"enter valid email",
              },
              comment:{
                required:"enter the comment",
                pattern:"combination of alphabets and numbers only",
              }
             
          },
      });
  });

 

