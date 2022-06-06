let purchaseData =JSON.parse(localStorage.getItem("purchase")) || [];
console.log(purchaseData);


// document.querySelector("#wallet_balance").innerText=user.wallet;


purchaseData.map(function(el)
{
 let div =document.createElement("div");
 let image =document.createElement("img");
 image.src=el.image;
 let name =document.createElement("p");
 name.innerText=el.name;
 let price=document.createElement("h");
 price.innerText=el.price;
 div.append(image,name,price);
document.getElementById("purchased_vouchers").append(div);
});
