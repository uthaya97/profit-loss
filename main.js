var purchaseprice=parseInt(prompt("enter purchase amount"));
var salesprice=parseInt(prompt("enter sales amount"));
var profit=salesprice-purchaseprice;
var loss=purchaseprice-salesprice;
if(purchaseprice<salesprice){
    console.log("The product is profit Rs"+" "+profit);
}
else if(purchaseprice==salesprice){
    console.log("The product is not profit and loss");
}
else{
    console.log("The product is loss"+" "+loss);
}