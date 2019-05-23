var request = require('request');
const $ = require('cheerio');
const puppeteer = require('puppeteer');


// https://ricardodb.tk/post/ 

// <source type="video/webm" src="data/posts/1064_57c4bee89db5bbab.webm"></source>


// the shit u need boy 
// https://www.youtube.com/watch?v=vsmxMLmroyQ 


var n = Math.floor(Math.random() * 3400);
// console.log(n);



function grab_Webm(post) {
    var site = "https://ricardodb.tk/post/3362";
    // request(site, (error, response, html) => {
    //     if (!error && response.statusCode == 200) {
    //         const $ = cheerio.load(html);

    //         const postNr = $("Title")

    //         const output = postNr.html()
    //         console.log(output)
    //     } else {
    //         console.log("I fucked up, here's error\n" + error)
    //     }

    // });

    puppeteer
        .launch()
        .then(function (browser) {
            return browser.newPage();
        })
        .then(function (page) {
            return page.goto(site).then(function () {
                return page.content();
            });
        })
        .then(function (html) {
            $('h2', html).each(function () {
                console.log($(this).text());
            });
        })
        .catch(function (err) {
            //handle error
        });

    grab_Webm(n)






    // var pageToVisit = "https://ricardodb.tk/post/" + post;
    // // console.log("Visiting page " + pageToVisit);
    // request(pageToVisit, function (error, response, body) {
    //     if (error) {
    //         console.log("Error: " + error);
    //     }
    //     // Check status code (200 is HTTP OK)
    //     console.log("Status code: " + response.statusCode);
    //     if (response.statusCode === 200) {
    //         // Parse the document body
    //         var $ = cheerio.load(body);
    //         console.log("Page title:  " + $('title').text());
    //     }
    // });