var button = document.getElementById('counter');
var counter=0;
button.onclick = function() 
{
var request = new XMLHttpRequest(); 
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE)
    if(request.status === 200){
        var counter = request.responseText;
        var span = document.getElementById('counter');
        span.innerHTML = counter.toString();
    }
};
  
  
  request.open('GET','http://rishikumar-1996.imad.hasura-app.io/counter', true);
  request.send(null);
}; 