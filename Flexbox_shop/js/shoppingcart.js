/* visar dropdow menyn och döljer den genom att byta mellan display none och display block */
function dropdown(){
    document.getElementById("cartdropdown").classList.toggle("show")
}

/* dessa två funktioner tar bort föremål 1 och föremål 2 respektive ur kundvagnen */
function remove1(){
    document.getElementById('cartitem1product').innerHTML = document.getElementById('cartitem2product').innerHTML
    document.getElementById('cartitem1price').innerHTML = document.getElementById('cartitem2price').innerHTML
    document.getElementById('cartitem2product').innerHTML = "varukorg plats"
    document.getElementById('cartitem2price').innerHTML = "$$$"
}
function remove2(){
    document.getElementById('cartitem2product').innerHTML = "varukorg plats"
    document.getElementById('cartitem2price').innerHTML = "$$$"
}

/* Dessa funktioner lägger till respektive produkt i kundvagnen se namnet på funktionen för vilket förmel den lägger till */
function iphone12pro(){
    if(document.getElementById('cartitem1price').innerHTML === "$$$"){
        document.getElementById('cartitem1product').innerHTML = document.getElementById('iphone12pro').innerHTML
        document.getElementById('cartitem1price').innerHTML = document.getElementById('iphone12proprice').innerHTML
    }
    else if(document.getElementById('cartitem2price').innerHTML === "$$$"){
        document.getElementById('cartitem2product').innerHTML = document.getElementById('iphone12pro').innerHTML
        document.getElementById('cartitem2price').innerHTML = document.getElementById('iphone12proprice').innerHTML
    }
    else{
        alert("Kundvagnen är full")
    }
}

function nokia3310(){
    if(document.getElementById('cartitem1price').innerHTML === "$$$"){
        document.getElementById('cartitem1product').innerHTML = document.getElementById('nokia-3310').innerHTML
        document.getElementById('cartitem1price').innerHTML = document.getElementById('nokia-3310price').innerHTML
    }
    else if(document.getElementById('cartitem2price').innerHTML === "$$$"){
        document.getElementById('cartitem2product').innerHTML = document.getElementById('nokia-3310').innerHTML
        document.getElementById('cartitem2price').innerHTML = document.getElementById('nokia-3310price').innerHTML
    }
    else{
        alert("Kundvagnen är full")
    }
}

function zflip(){
    if(document.getElementById('cartitem1price').innerHTML === "$$$"){
        document.getElementById('cartitem1product').innerHTML = document.getElementById('zflip').innerHTML
        document.getElementById('cartitem1price').innerHTML = document.getElementById('zflipprice').innerHTML
    }
    else if(document.getElementById('cartitem2price').innerHTML === "$$$"){
        document.getElementById('cartitem2product').innerHTML = document.getElementById('zflip').innerHTML
        document.getElementById('cartitem2price').innerHTML = document.getElementById('zflipprice').innerHTML
    }
    else{
        alert("Kundvagnen är full")
    }
}

function ipadpro(){
    if(document.getElementById('cartitem1price').innerHTML === "$$$"){
        document.getElementById('cartitem1product').innerHTML = document.getElementById('ipadpro').innerHTML
        document.getElementById('cartitem1price').innerHTML = document.getElementById('ipadproprice').innerHTML
    }
    else if(document.getElementById('cartitem2price').innerHTML === "$$$"){
        document.getElementById('cartitem2product').innerHTML = document.getElementById('ipadpro').innerHTML
        document.getElementById('cartitem2price').innerHTML = document.getElementById('ipadproprice').innerHTML
    }
    else{
        alert("Kundvagnen är full")
    }
}

function zfold(){
    if(document.getElementById('cartitem1price').innerHTML === "$$$"){
        document.getElementById('cartitem1product').innerHTML = document.getElementById('zfold').innerHTML
        document.getElementById('cartitem1price').innerHTML = document.getElementById('zfoldprice').innerHTML
    }
    else if(document.getElementById('cartitem2price').innerHTML === "$$$"){
        document.getElementById('cartitem2product').innerHTML = document.getElementById('zfold').innerHTML
        document.getElementById('cartitem2price').innerHTML = document.getElementById('zfoldprice').innerHTML
    }
    else{
        alert("Kundvagnen är full")
    }
}

function iphone8(){
    if(document.getElementById('cartitem1price').innerHTML === "$$$"){
        document.getElementById('cartitem1product').innerHTML = document.getElementById('iphone8').innerHTML
        document.getElementById('cartitem1price').innerHTML = document.getElementById('iphone8price').innerHTML
    }
    else if(document.getElementById('cartitem2price').innerHTML === "$$$"){
        document.getElementById('cartitem2product').innerHTML = document.getElementById('iphone8').innerHTML
        document.getElementById('cartitem2price').innerHTML = document.getElementById('iphone8price').innerHTML
    }
    else{
        alert("Kundvagnen är full")
    }
}

function mi11(){
    if(document.getElementById('cartitem1price').innerHTML === "$$$"){
        document.getElementById('cartitem1product').innerHTML = document.getElementById('mi11').innerHTML
        document.getElementById('cartitem1price').innerHTML = document.getElementById('mi11price').innerHTML
    }
    else if(document.getElementById('cartitem2price').innerHTML === "$$$"){
        document.getElementById('cartitem2product').innerHTML = document.getElementById('mi11').innerHTML
        document.getElementById('cartitem2price').innerHTML = document.getElementById('mi11price').innerHTML
    }
    else{
        alert("Kundvagnen är full")
    }
}

function oneplus7(){
    if(document.getElementById('cartitem1price').innerHTML === "$$$"){
        document.getElementById('cartitem1product').innerHTML = document.getElementById('oneplus7').innerHTML
        document.getElementById('cartitem1price').innerHTML = document.getElementById('oneplus7price').innerHTML
    }
    else if(document.getElementById('cartitem2price').innerHTML === "$$$"){
        document.getElementById('cartitem2product').innerHTML = document.getElementById('oneplus7').innerHTML
        document.getElementById('cartitem2price').innerHTML = document.getElementById('oneplus7price').innerHTML
    }
    else{
        alert("Kundvagnen är full")
    }
}
