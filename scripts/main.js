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
    
    let mainList = $("#" + text + "-wrapper").find(".item-" + text);
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

// let purchaseDetails = {
//     "amount": 0,
//     "color": $(".item-color.active").attr("data-item-color"), 
//     "size": $(".item-size.active").attr("data-item-size")};
var purchaseDetails = {
    "amount": 0,
    "color": "",
    "size": ""
};

$(document).ready(function(){
    const colorCol = $("<div>", {"class": "col-6 item-color-wrapper d-flex", "id": "color-wrapper"});
    const colorText = $("<h4>", {"class": "customization-text"});
    colorText.text("Color");
    const colorBlack = $("<div>", {"class": "active rounded-circle item-color", "id": "item-color-black", "data-item-color": "black"});
    const colorGolden = $("<div>", {"class": "rounded-circle item-color", "id": "item-color-golden", "data-item-color": "golden"});
    const colorSilver = $("<div>", {"class": "rounded-circle item-color", "id": "item-color-silver", "data-item-color": "silver"});
    colorCol.append(colorText, colorBlack, colorGolden, colorSilver);
    
    const sizeCol = $("<div>", {"class": "col-6 item-size-wrapper d-flex", "id": "size-wrapper"});
    const sizeText = $("<h4>", {"class": "customization-text"});
    const sizeSmall = $("<div>", {"class": "active rounded-circle item-size", "data-item-size": "small"});
    const sizeMedium = $("<div>", {"class": "rounded-circle item-size", "data-item-size": "medium"});
    const sizeLarge = $("<div>", {"class": "rounded-circle item-size", "data-item-size": "large"});
    sizeSmall.text("S");
    sizeMedium.text("M");
    sizeLarge.text("L");
    sizeCol.append(sizeText, sizeSmall, sizeMedium, sizeLarge);

    $("#item-customization").append(colorCol, sizeCol);
    purchaseDetails["color"] = $(".item-color.active").attr("data-item-color");
    purchaseDetails["size"] = $(".item-size.active").attr("data-item-size");
    
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
    
    /* Cart */
    mainContainer = $("#main-container");
    cartContainer = $("#cart-container");
    // $("#cart-button").click(function() {
    //     console.log("Click!");
    //     mainContainer.remove();
    //     cartContainer.toggleClass("invisible");


    //     // $("#main-body").add();
    //     // $("#page-cart").toggleClass("invisible");
    // });

    cartTitle = $("h1");
    cartTitle.text("CART");

    cartItem = $("<div>", {"class": "d-flex flex-row"});
    cartItemImg = $("<img>", {"src": "assets/images/carousel-1.png"});
    cartItemInfo = $("<div>", {"class": "d-flex flex-column"});
    cartItemTitle = $("<h1>");
    cartItemTitle.text("MOHAN");
    cartItemDesc = $("<h2>");
    cartItemDesc.text("Recycle Boucle Knit Cardigan Pink");
    cartItemPrice = $("<h3>");
    cartItemPrice.text("$120");
    
    
    cartItemInfo.append(cartItemTitle, cartItemDesc, cartItemPrice);
    cartItem.append(cartItemImg, cartItemInfo);


    $("#cart-button").click(function() {
        // Header
        $("header").empty();
        let container = $("<div>", {"class": "container"});
        $("header").append(container);
        let icon = $("<i>", {"class": "bi bi-x-lg", "id": "cart-close-button"});
        $("header").children('.container').append(icon);

        // Main
        $("main").empty();
        $("main").append([cartTitle]);

        $("main").append([cartItem]);

    });







});