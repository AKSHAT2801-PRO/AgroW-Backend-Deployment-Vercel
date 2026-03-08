const express = require("express")
const cors = require("cors")
const path = require("path")
const multer = require("multer")
const farmerRouter = require("../routes/farmer")
const serviceProviderRouter = require("../routes/serviceProvider")
const communityRouter = require("../routes/community")
const manageCommunityRouter = require("../routes/communityMembers")
const manageDashBoardRouter = require("../routes/dashboard")
const manageContentRouter = require("../routes/content")
const {connectMongoDb} = require("../api/connection")
const {logRequests} = require("../middlewares/logs")
const getNews = require("../routes/news")

const {
  clerkMiddleware,
  clerkClient,
  requireAuth,
  getAuth
} = require("@clerk/express");
const fs = require("fs")  // Logs create karne ke liye use karunga
require('dotenv').config()
// import Module Completed----------------------------------------------------
const app = express()
const port = 8001;

connectMongoDb(process.env.DB_URI)
// mongo db connection and app creation completed-----------------------------
// Database Work Completed--------------------------------------------------------------
app.use(cors({
    origin: "*",
    methods: ["GET","POST","PUT","DELETE","PATCH"],
    allowedHeaders: ["Content-Type"]
}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(logRequests('logs.txt')) // Logs middleware added, all requests will be logged in logs.txt file
app.use(clerkMiddleware())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Added Middlewares-------------------------------------------------

// Now creating Rest APIs ===>>>

// Now For Security of CLerk
// app.get('/protected', requireAuth(), async (req, res) => {
//   // Use `getAuth()` to get the user's `userId`
//   const { userId } = getAuth(req)

//   // Use Clerk's JavaScript Backend SDK to get the user's User object
//   const user = await clerkClient.users.getUser(userId)

//   return res.json({ user })
// })
// clerk--------------------------------------------
// const query = "Artificial"
// fetch(`https://newsapi.org/v2/everything?q=${query}&from=2026-01-19&sortBy=publishedAt&apiKey=${process.env.NewsAPI_KEY}`).then(res => res.json()).then(data => console.log(data)).catch(console.error(error))

//Routers 

app.use('/api/farmer',farmerRouter);  // Farmer Registeration  APIs
app.use('/api/serviceProvider',serviceProviderRouter) // Service Provider Registeration APIs
app.use('/api/createCommunity',communityRouter) // Community Creation APIs
app.use('/api/community',manageCommunityRouter) // Community Member Management APIs
app.use('/api/dashboard',manageDashBoardRouter)  // Dashboard Management APIs
app.use('/api/content',manageContentRouter) // Content Management APIs
// app.get('/api/news',async (req,res)=>{
//     const query = "Agriculture"
//     const newsData = await getNews(query)
//     if(newsData) {
//         return res.status(200).json({message : "News fetched successfully",news : newsData})
//     }else{
//         return res.status(500).json({message : "Error fetching news"})
//     } 
// })  

// News API>{
app.get("/",(req,res)=>{
    return res.send("<h1>Welcome to AgroW Backend</h1>")
})
app.get("/api/community/addmember",(req,res)=>{
  return res.send("<h1>Welcome to AgroW Backend Community</h1>")
})

module.exports = app;
// app.listen(port,()=>{console.log("Server started at port: "+port)})
// // started the server at port: 8001

