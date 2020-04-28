var x = 0;
var s = "";

//alert('Hello Pluralsight! alert');
console.log('Hello Pluralsight!!');

//jQuery default command är getElementById så det kan ersättas med $('#theForm'), # och . har sammband med 
// CSS syntax där # står för ID och . (punkt) står för Class
// resultatet blir en collection

//var theForm = document.getElementById('theForm');
var theForm = $("#theForm");
theForm.hide;

var button = $('#buyButton');
button.on("click", function () {
    console.log("Buy button is clicked!");
});


//var productInfo = document.getElementsByClassName('product-props');
var productInfo = $(".product-props li");

productInfo.on("click", function () {
    console.log("You clicked on " + $(this).text());
});