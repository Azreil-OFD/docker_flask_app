let elem = document.querySelector('.row');


$.ajax({
    url: 'http://localhost:5000/article/favorite',
    method: 'GET',
    success: function(response){
      response.forEach(element => {
        console.log(element)
        let block = ''
        block += '\
        <div class="col">\
        <div class="card" style="width: 18rem;">\
        <div class="card-body">\
          <h5 class="card-title">'+element['title']+'</h5>\
          <p class="card-text">'+element['body']+'</p>\
        </div>\
      </div>\
      </div>\
       ';
        elem.innerHTML +=block;
      });
   }
  })