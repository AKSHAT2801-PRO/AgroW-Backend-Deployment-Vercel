const express = require('express')
const getNews = async (query)=>{
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=${query}&lang=en&max=5&apikey=d70bb0feca0545943e6fff3de23aea39`)
        const data = await response.json()
        return data
    }catch(err) {
        return null
    }
}
module.exports = getNews
