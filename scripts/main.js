function decrementCounter() {
    currentAmount = Number($(".item-amount").eq(0).text());
    if (currentAmount == 0) {
        return;
    }
    currentAmount = currentAmount - 1;
        $(".item-amount").text(currentAmount.toString());

    purchaseDetails['amount'] = currentAmount;
    $("#subtotal-price").text("$" + (purchaseDetails['amount'] * 120).toString());

    if (purchaseDetails['amount'] == 0) {
        $(".item-in-basket").addClass("invisible");
        $(".no-item-in-basket").removeClass("invisible");

        $("#cart-page-wrapper").addClass("invisible");


        $('#basket-wrapper').children().toggleClass("invisible");
    }
}

function incrementCounter() {
    currentAmount = Number($(".item-amount").eq(0).text());
    currentAmount = currentAmount + 1;
    $(".item-amount").text(currentAmount.toString());
    purchaseDetails['amount'] = currentAmount;
    $("#subtotal-price").text("$" + (purchaseDetails['amount'] * 120).toString());

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
    
    var mainList = $("." + text + "-wrapper").find(".item-" + text);
    console.log(mainList);
    for (let i = 0; i < mainList.length; i++) {
        const listItem = mainList.eq(i);
        listItem.click(function(){
            mainList.removeClass("active");
            // let activeColors = mainList.find(`[data-item-color='${listItem.attr("data-item-color")}']`);
            $('.item-' + text + '[data-item-'+ text + '=' + listItem.attr("data-item-" + text) + ']').addClass('active');
            purchaseDetails[text] = listItem.attr("data-item-" + text);
        })
    }
}

function navGeneration(nav) {
    var li = $("<li>", {"class": "nav-item cursor-pointer"});
    var a = $("<a>", {"class": "nav-link"});
    a.href = "#"; // Can be adjusted
    a.text(nav);
    li.append(a);
    return li;
}

function ulGeneration(navArray, menuColName) {
    var ul = $("<ul>", {"class": "nav d-flex flex-column ms-3", "id": "menu-col-" + menuColName});
    for (let i = 0; i < navArray.length; i++) {
        ul.append(navGeneration(navArray[i]));
    }
    return ul;
}

let newMenu = ["Outer", "Dress", "Blouse/Shirt", "T-Shirt", "Knitwear", "Skirt", "Pants", "Denim", "Kids"];
let newAppend = ulGeneration(newMenu, "new");

let apparelMenu = ["Outer", "Dress", "Blouse/Shirt", "T-Shirt", "Knitwear", "Skirt", "Pants", "Denim", "Kids"];
let apparelAppend = ulGeneration(apparelMenu, "apparel");

let bagMenu = ["Outer", "Dress", "Blouse/Shirt", "T-Shirt", "Knitwear", "Skirt", "Pants", "Denim", "Kids"];
let bagAppend = ulGeneration(bagMenu, "bag");

let shoesMenu = ["Outer", "Dress", "Blouse/Shirt", "T-Shirt", "Knitwear", "Skirt", "Pants", "Denim", "Kids"];
let shoesAppend = ulGeneration(shoesMenu, "shoes");

let beautyMenu = ["Outer", "Dress", "Blouse/Shirt", "T-Shirt", "Knitwear", "Skirt", "Pants", "Denim", "Kids"];
let beautyAppend = ulGeneration(beautyMenu, "beauty");

let accessoriesMenu = ["Outer", "Dress", "Blouse/Shirt", "T-Shirt", "Knitwear", "Skirt", "Pants", "Denim", "Kids"];
let accessoriesAppend = ulGeneration(accessoriesMenu, "accessories");


let listMenu = [newMenu, apparelMenu, bagMenu, shoesMenu, beautyMenu, accessoriesMenu];
let listAppend = [newAppend, apparelAppend, bagAppend, shoesAppend, beautyAppend, accessoriesAppend];
let listNames = ['new', 'apparel', 'bag', 'shoes', 'beauty', 'accessories'];

let purchaseDetails = {
    "amount": 0,
    "color": $(".item-color.active").attr("data-item-color"), 
    "size": $(".item-size.active").attr("data-item-size")};

$(document).ready(function(){

    /* Main */

    $("#add-to-basket-button").click(function(){
        $('#basket-wrapper').children().toggleClass("invisible");
        $(".item-amount").text("1");
        purchaseDetails['amount'] = 1;
    });

    minusItemButton = $(".minus-item-button");
    minusItemButton.click(function(){decrementCounter()});

    plusItemButton = $(".plus-item-button");
    plusItemButton.click(function(){incrementCounter()});

    activeSelect("color");
    activeSelect("size");

    // Cart
    
        $("#cart-button, #close-cart-button").click(function() {
            $("#cart").toggleClass("invisible");
            $("#cart-page").toggleClass("invisible");
            $(".main-page").toggleClass("invisible");
            if (purchaseDetails['amount'] == 0) {
                $(".item-in-basket").addClass("invisible");
                $(".no-item-in-basket").removeClass("invisible");
                $("#cart-page-wrapper").addClass("invisible");

            }
            else {
                $("#cart-page-wrapper").removeClass("invisible");
                $(".item-in-basket").removeClass("invisible");
                $(".no-item-in-basket").addClass("invisible");
                $("#subtotal-price").text("$" + (purchaseDetails['amount'] * 120).toString());
            }
        });


    // Menu
    $("#menu-button, #close-menu-button").click(function() {
        $("#menu-page").toggleClass("invisible");
        $(".main-page").toggleClass("invisible");
    });

    $("#women-tab").click(function() {
        $("#women-tab").addClass("active");
        $("#man-tab").removeClass("active");
        $("#kids-tab").removeClass("active");
        
        $("#women-tab-content").removeClass("invisible");
        $("#man-tab-content").addClass("invisible");
        $("#kids-tab-content").addClass("invisible");
    });

    $("#man-tab").click(function() {
        $("#women-tab").removeClass("active");
        $("#man-tab").addClass("active");
        $("#kids-tab").removeClass("active");

        $("#women-tab-content").addClass("invisible");
        $("#man-tab-content").removeClass("invisible");
        $("#kids-tab-content").addClass("invisible");
    });

    $("#kids-tab").click(function() {
        $("#women-tab").removeClass("active");
        $("#man-tab").removeClass("active");
        $("#kids-tab").addClass("active");

        $("#women-tab-content").addClass("invisible");
        $("#man-tab-content").addClass("invisible");
        $("#kids-tab-content").removeClass("invisible");
    });


    for (let i = 0; i < listMenu.length; i++) {
        $("#menu-" + listNames[i] + "-container").click(function() {
            if ($("#menu-col-" + listNames[i]).children().length > 0) {
                $("#menu-col-" + listNames[i]).children().toggleClass("invisible");
            }
            else {
                $("#menu-" + listNames[i] + "-container").after(listAppend[i]);
            }
        })
                
    }

    // $("#menu-apparel-container").click(function() {
    //     if ($("#menu-col-apparel").children().length > 0) {
    //         $("#menu-col-apparel").children().toggleClass("invisible");
    //     }
    //     else {
    //         $("#menu-apparel-container").after(apparelAppend);
    //     }
    // })


        
    
    // Extra


    $("#heart-icon").click(function() {
        $("#heart-icon").toggleClass("bi-suit-heart");
        $("#heart-icon").toggleClass("bi-suit-heart-fill");
    });






});