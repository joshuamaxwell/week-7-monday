// console.log('\'Allo \'Allo!');
Parse.initialize("gCR9KS7rXD7MlaTjdrGcf9DdDcoDZG5lqIZiVoPe", "4XKF3hLDAceJzKDSAne42qDm2AJTKgNGXxnH9Nlg");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  console.log("yay! Parse worked");
});

etsyItems = new EtsyItemsCollection();

fetchObject = {
  success: function(){
    etsyItems.fillItemList()
    console.log('fetch is complete. etsyItems contains: ', etsyItems); 
    var myNewChart = new Chart(ctx).Line(dataFunc());
  },
  error: function(){
    console.log('there was a problem with fetch');
  },
  remove: false,
  dataType: 'jsonp' // have to do this to make etsy happy?
}

router = new MainRouter();
Backbone.history.start();

$.ajax({
  dataType: 'jsonp',
  url: 'http://jsonp.jit.su/?callback=?&url=http://hipsterjesus.com/api/?paras=1&type=hipster-centric&html=false',
  success: function(payload){
    payload = payload.text.split(' ').slice(1,-1)

    payload = _.reject(payload, function(word){
      return word == ''
    })

    payload = _.sample(payload, 2);

    etsyItems.keywords = payload.join('+'); //that + took forever to figure out
    console.log('keywords   ' , etsyItems.keywords);
    $('.page-title').html('Hipstermatic<br>Etsy <span class="keywords">' + payload.join(' and ') + '</span> Browser');
    console.log('url   ', etsyItems.url());
    etsyItems.fetch(fetchObject);
  },
  error: function(){
    console.log('error');
  }
});

//Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
function dataFunc(){
    data = {
      labels: ["<20", "20-50", "50-150", "150-300", ">300"],

      datasets: [
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data: [2,56,8,5,80]
        }
      ]
    }

    var group1 = etsyItems.filter(function(item){
      return (item.get('price') < 20)
    })
    var group2 = etsyItems.filter(function(item){
      return (item.get('price') > 20 && item.get('price') < 50)
    })
    var group3 = etsyItems.filter(function(item){
      return (item.get('price') > 50 && item.get('price') < 150)
    })
    var group4 = etsyItems.filter(function(item){
      return (item.get('price') > 150 && item.get('price') < 300)
    })
    var group5 = etsyItems.filter(function(item){
      return (item.get('price') > 300)
    })

    console.log(data.datasets[0].data[0] = group1.length);
    console.log(data.datasets[0].data[1] = group2.length);
    console.log(data.datasets[0].data[2] = group3.length);
    console.log(data.datasets[0].data[3] = group4.length);
    console.log(data.datasets[0].data[4] = group5.length);

  return data;
}
function erasedb () {
  $.get('http://tiny-pizza-server.herokuapp.com/collections/EtsyItemCollection',function(res){
    // console.log(res);
    for ( i=0; i<res.length; i+=1){
      console.log('http://tiny-pizza-server.herokuapp.com/collections/EtsyItemCollection/' + res[i]._id);
      var url = 'http://tiny-pizza-server.herokuapp.com/collections/EtsyItemCollection/' + res[i]._id;
      $.ajax({
        url: url,
        type: 'delete'
      })
    }
  })
}
