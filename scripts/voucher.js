let user=JSON.parse(localStorage.getItem("user")) || [];

document.querySelector("#wallet_balance").innerText=user.wallet;

fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    // console.log(completedata[0].vouchers);
    let alldata=completedata[0].vouchers;
    let buydata=JSON.parse(localStorage.getItem("purchase")) || [];
    alldata.map(function(el)
    {
        let div =document.createElement("div");
        let image =document.createElement("img");
        image.src=el.image;
        let name =document.createElement("p");
        name.innerText=el.name;
        let price=document.createElement("h");
        price.innerText=el.price;
        let btn=document.createElement("button");
        btn.innerText="BUY";
        btn.setAttribute("class","buy_voucher");
        btn.addEventListener("click",function(){
            buyFunction(el);
        });
        
        function buyFunction(el)
        {
            buydata.push(el);
            let remainingBalance=Number(document.getElementById("wallet_balance").innerText);
            if(el.price>=remainingBalance)
            alert("Hurray! purchase successful");
            remainingBalance-=el.price;
            document.querySelector("#wallet_balance").innerText=remainingBalance;
            localStorage.setItem("purchase",JSON.stringify(buydata));
        }
        div.append(image,name,price,btn);
        document.getElementById("voucher_list").append(div);
        
    });
}) .catch((err)=>{
    console.log(err);
})