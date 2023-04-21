//your JS code here. If required.
function submit() {
	var name= document.getElementbyId("username").value;
	var password= document.getElementbyId("password").value;
var check=document.getElementbyId("checkbox");

	  if (document.getElementById('checkbox').checked) {
            alert(`Logged in as ${name}`);
        } 
    
	console.log(name,password);
	localStorage.setItem("name", name);
	localStorage.setItem("password",password)
}
