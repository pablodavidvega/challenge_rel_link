
$( window ).on( "load", function() {
  
  $(".navbar-toggler-icon").on("click", function(){
    $(".image-1").toggle();
  }); 
});


document.getElementById("shorten-it").onclick = function() {
  var link = $('#shorten').val();
  var data = {
    "group_guid": "Bm2p2bjiSgt",
    "domain": "bit.ly",
    "long_url": link
  };
  fetch('https://api-ssl.bitly.com/v4/shorten', {
  method: 'post',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': 'Bearer 893e8e371e2fba64896ee4fbfafbc0392a74d81a'
  },
  body: JSON.stringify(data)
  }) .then(function(response) {
  return response.json();
  })
  .then(function(data){
      document.getElementById("message").innerHTML = "Your short link is " + "<a href='"+data.link+"'>" + data.id
  })
  
  document.getElementById("shorten").value='';
}

