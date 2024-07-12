
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoute from './routes/authoRoute.js'


// Middleware
dotenv.config()
const app = express();
const corsOptions=
{
    origin:true

}
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(cors(corsOptions));

app.use('/auth', authRoute);
app.get('/', authRoute)
//database
// mongoose.set('strictQuery',false)
//   const connectDB = async()=>{
//       try {
//          await mongoose.connect(process.env.MONGO_URL,{
//             useNewUrlParser:true,
//             useUnifiedTopology: true
//           })
//           console.log('Monogdb is connected')
//       } catch (error) {
//           console.log("Mongodb is not connected");
//       }
//   }
// Database connection
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log('Database is Connected'))
//   .catch((err) => console.log('Database not connected', err));
  
// Server setup
const port = process.env.PORT || 8000;

app.listen(port, () =>
  
  console.log(`Server is running on port ${port}`),
  // connectDB(),
);

