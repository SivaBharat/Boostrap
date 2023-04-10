
  $(document).ready(function(){
      $('#myform').validate({
          rules:{
              user:{
                  required:true,
                  pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#])[A-Za-z\d@$#]{7,15}$/,
              },
              mbl:{
                  required:true,
                  pattern:/^[0-9]{10}$/,
              },
              mail:{
                  required:true,
                  email:true,
                  pattern:/^([a-zA-Z0-9_])+@cgvak.com$/,
              },
              comment:{
                required:true,
              },
          },
          messages:{
              pass:{
                  required:"Enter your username",
                  pattern:"Enter the valid username",
              },
              mbl:{
                  required:"Enter your Phone number",
                  pattern:"Enter the valid number",
              },
              mail:{
                  required:"enter your email",
                  email:"enter valid email",
              },
          },
      });
  });