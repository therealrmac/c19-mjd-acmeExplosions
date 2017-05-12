(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
console.log('main.js has loaded');
var select= $("#select");
let promise= require("./promise");
var divCont1="";
var divCont2="";
var divCont3="";
var output= $("#output");
var output2= $("#output2");
var output3= $("#output3");

function categories(categories){
             var x= categories.categories;
         for (var i=0; i<x.length; i++){
            if(x[i].id==select.val()){
                divCont1+= 
                "<span>"+ x[i].name+"</span>";
            }else if(x[i].id ==select.val()){
                divCont1+= 
                "<span>"+ x[i].name+"</span>";
            }
        }
         output.html(divCont1);
}

function types(types){
    var x= types.types;
     for (var i=0; i<x.length; i++){
        var cat= x[i].category;
        var id= x[i].id;
        if(cat==select.val() && id <=2){ 
        divCont2+=
            "<span class='type'>"+ x[i].name+", "+ x[i].description+"</span>" +"<hr>";
        } else if(cat==select.val() && id>=3){
            divCont2+=
            "<span class='type'>"+ x[i].name+", " + x[i].description+  "</span>"+"<hr>";
        }
     output2.html(divCont2);
    }
}
function products(products){
     var x= products.products;
     console.log("x equals", x);
     for (var i=0; i<x.length; i++){     
        console.log(x[i].description);
        console.log(x[i].id);
        var name= x[i].name;
        var type= x[i].type;
        var id= x[i].id;
        var desc= x[i].description;
        if(type== select.val() && id <=8){ 
        divCont3+=
            "<span class='product'>"+ name+", "+ desc+  "</span>"+"<hr>";
        } else if(type== select.val() && id>8){
            divCont3+=
            "<span class='product'>"+ name+", " + desc+  "</span>"+"<hr>";
        }
     output3.html(divCont3);
    }
}
select.on('change', ()=>{
        promise.loadCategories().then(
        categories,

            promise.loadTypes().then(
            types, 
        
            promise.loadProducts().then(
            products,
           
        (reason)=>{
            console.log("error");
            }
        )));
    });
},{"./promise":2}],2:[function(require,module,exports){
"use strict";

let categories= [];
let products=[];
let types= [];
    let loadCategories= function(callback){
        return new Promise((resolve, reject)=>{
             $.ajax({
            url: "categories.json",
            success: function(categories){
                 resolve(categories);
             }
         });
    });
};
    let loadTypes= function(callback){
        return new Promise((resolve, reject)=>{
         $.ajax({
            url: "types.json",
            success: function(types){
                 resolve(types);
             }
        });
    });
};
    let loadProducts= function(callback){
        return new Promise((resolve, reject)=>{
            $.ajax({
            url: "products.json",
            success: function(products){
                console.log(products.products);
                 resolve(products);
            }
        });
    });
};

module.exports= {loadCategories, loadTypes, loadProducts};
},{}]},{},[1]);
