let elem = document.querySelector('.row');


$.ajax({
    url: 'http://localhost:5000/hello',
    method: 'GET',
    success: function(response){
      response.forEach(element => {
        console.log(element)
      });
   }
  })