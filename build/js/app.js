(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Bike(){
  this.state = null;
}


exports.bikeModule = Bike;

},{}],2:[function(require,module,exports){
var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function(){
  $("#find-bike").submit(function(event){
    event.preventDefault();
    var location = $('#location').val();

    $(".search-result").text("Your search results for " + location + ":");
    $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location="+ location + "&distance=10&stolenness=proximity&access_token=4e7b88c7343fe7d642db50104a7afc73f05fb20bf657399c298c08307c689b4e", function(response) {
      console.log(response);
      $('search-result').append("<li>" + response.bikes.frame_colors + "</li>");
    });
  });
});

},{"./../js/bike.js":1}]},{},[2]);
