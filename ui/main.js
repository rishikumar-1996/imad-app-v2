var button = document.getElementById('counter');
var counter=3;
button.onclick = function() 
{
var request = new XMLHttpRequest(); 
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE)
    if(request.status === 200){
        var counter = this.responseText;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
    }
};
  
  
  request.open('GET','/counter', true);
  request.send(null);
}; 