// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-JS/sw.js", {
    scope: "/ICS2O-Unit5-06-JS/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  const intA = parseFloat(document.getElementById("integer-a").value)
  const intB = parseFloat(document.getElementById("integer-b").value)

while (intA < intA * intB) {
    document.getElementById("multiplication-product").innerHTML = "<p>The product is equal to</p> + intA"

} 
}
