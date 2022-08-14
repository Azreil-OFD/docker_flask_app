let elem = document.querySelector('.row');


$.ajax({
    url: 'https://avocado-dev.site/article/favorite',
    method: 'GET',
    success: function(response){
      response.forEach(element => {
        console.log(element)
        let block = ''
        block += '\
        <div class="col">\
        <div class="card" style="width: 18rem;">\
        <img src="..." class="card-img-top" alt="...">\
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