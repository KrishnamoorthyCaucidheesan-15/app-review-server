const { json } = require("body-parser");
const gplay = require("google-play-scraper");
const  fs = require("fs")

const getApp = (req, res, next) => {
    const app = req.url.split("app/")[1];
    createFile(app);
    gplay.app({appId:app}).then((data)=>{
        // fs.writeFile('app.json',JSON.stringify(data),err=>{})
        fs.writeFile('front-end/build/app.json',JSON.stringify(data),err=>{})
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(data))
    }).catch((err) => { res.end("Not Found")})
}

const getReviews = (req, res, next) => {
    const app = req.url.split("reviews/")[1];
    gplay.reviews({appId:app,num:1000}).then((data)=>{
        // fs.writeFile('reviews.json',JSON.stringify(data.data), err=>{})
        res.setHeader("Content-Type","application/json");
        res.status(200).end(JSON.stringify(data.data))
    }).catch((err) => { res.end("Not Found")})
}

function createFile(appId){
    gplay.reviews({appId:app,num:1000}).then((data)=>{
        fs.writeFile('front-end/build/reviews.json',JSON.stringify(data.data),err=>{})
    })
}
module.exports.getApp = getApp;
module.exports.getReviews=getReviews;