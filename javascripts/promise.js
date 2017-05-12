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