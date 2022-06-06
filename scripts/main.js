document.getElementById("form").addEventListener("submit",signup);
function signup(){
    event.preventDefault();
    let user={};
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let amount=document.getElementById("amount").value;
    user.name=name;
    user.email=email;
    user.address=address;
    user.wallet=amount;
    localStorage.setItem("user",JSON.stringify(user));
}