function decrementCounter() {
    currentAmount = Number($("#item-amount").text());
    if (currentAmount == 0) {
        return;
    }
    currentAmount = currentAmount - 1;
    $("#item-amount").text(currentAmount.toString());
    purchaseDetails['amount'] = currentAmount;
}

function incrementCounter() {
    currentAmount = Number($("#item-amount").text());
    currentAmount = currentAmount + 1;
    $("#item-amount").text(currentAmount.toString());
    purchaseDetails['amount'] = currentAmount;
}

function activeSelect(text) {
    // var mainList;
    // if (text == "color") {
    //     mainList = $("#color-wrapper").find(".item-color");
    // }
    // else if (text == "size") {
    //     mainList = $("#size-wrapper").find(".item-size");
    // }
    // else {
    //     return -1;
    // }
    
    var mainList = $("#" + text + "-wrapper").find(".item-" + text);
    console.log(mainList);
    for (let i = 0; i < mainList.length; i++) {
        const listItem = mainList.eq(i);
        listItem.click(function(){
            mainList.removeClass("active");
            listItem.addClass("active");
            purchaseDetails[text] = listItem.attr("data-item-" + text);
        })
    }
}

let purchaseDetails = {
    "amount": 0,
    "color": $(".item-color.active").attr("data-item-color"), 
    "size": $(".item-size.active").attr("data-item-size")};

$(document).ready(function(){

    /* Main */

    $("#add-to-basket-button").click(function(){
        $('#basket-wrapper').children().toggleClass("invisible");
        purchaseDetails['amount'] = 2;
    });

    minusItemButton = $("#minus-item-button");
    minusItemButton.click(function(){decrementCounter()});

    plusItemButton = $("#plus-item-button");
    plusItemButton.click(function(){incrementCounter()});

    activeSelect("color");
    activeSelect("size");
    
    // /* Cart */
    // mainContainer = $("#main-container");
    // cartContainer = $("#cart-container");
    // // $("#cart-button").click(function() {
    // //     console.log("Click!");
    // //     mainContainer.remove();
    // //     cartContainer.toggleClass("invisible");


    // //     // $("#main-body").add();
    // //     // $("#page-cart").toggleClass("invisible");
    // // });

    // cartTitle = $("h1");
    // cartTitle.text("CART");

    // cartItem = $("<div>", {"class": "d-flex flex-row"});
    // cartItemImg = $("<img>", {"src": "assets/images/carousel-1.png"});
    // cartItemInfo = $("<div>", {"class": "d-flex flex-column"});
    // cartItemTitle = $("<h1>");
    // cartItemTitle.text("MOHAN");
    // cartItemDesc = $("<h2>");
    // cartItemDesc.text("Recycle Boucle Knit Cardigan Pink");
    // cartItemPrice = $("<h3>");
    // cartItemPrice.text("$120");
    
    // cartItem.append(cartItemImg, cartItemInfo);

    // cartItemInfo.append(cartItemTitle, cartItemDesc, cartItemPrice);


    // $("#cart-button").click(function() {
    //     // Header
    //     $("header").empty();
    //     let container = $("<div>", {"class": "container"});
    //     $("header").append(container);
    //     let icon = $("<i>", {"class": "bi bi-x-lg", "id": "cart-close-button"});
    //     $("header").children('.container').append(icon);

    //     // Main
    //     $("main").empty();
    //     $("main").append([cartTitle]);

    //     $("main").append([cartItem]);

    // });







});