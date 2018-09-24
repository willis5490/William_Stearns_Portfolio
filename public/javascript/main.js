
$("#formSubmit").on('click', function(){
  alert("clicked");
  let userName = $('#userName').val().trim();
  let userChoice  = $('#userService').val().trim();
  let userMessage = $('#userMessage').val().trim();
  console.log(userName,userChoice,userMessage);
})
