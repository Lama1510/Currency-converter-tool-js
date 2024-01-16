var register_Form = document.querySelector(".registerForm");
var result =0 ;
register_Form.onsubmit = function(e){
e.preventDefault();
//console.log(e);

var elements = e.target.elements
//console.log(elements[0].value);

var option = document.querySelector("select");

//console.log(option[0].value);


if (option.value == 1 )
 result = elements[0].value * 0.27;
else if (option.value == 2 )
result = elements[0].value * 0.19;
else 
result = elements[0].value ;

//console.log(result);
  
document.querySelector("p").textContent=result;


};
