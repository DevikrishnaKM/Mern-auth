import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import adminRoute from './routes/adminRoute.js'
import UserRoute from './routes/userRoute.js'
import AuthRoute from './routes/authRoute.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => console.log('Connected to MongoDB')).catch(err => console.log(err))


const app = express()

app.use(express.json())

app.use(cookieParser())


app.use("/api/user", UserRoute)
app.use("/api/auth", AuthRoute)
app.use("/api/admin", adminRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(3000, () => console.log('Server started on port 3000'))