import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';


// Create express app
const app = express();
dotenv.config();

// apply middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect to DB
try{
    mongoose.connect('mongodb://127.0.0.1:27017/englighten');
    console.log('DB Connected');
}catch(err){
    console.log(err);
}

// routes
const routeFiles = fs.readdirSync('./routes');
console.log(routeFiles);

// // Loop through each file
routeFiles.forEach((file) => {
    // Check if the file is a JavaScript file
    if (file.endsWith('.js')) {
        // Dynamically import the route module
        import(`./routes/${file}`).then((module) => {
            // Mount the route
            app.use('/api', module.default);
        }).catch((error) => {
            console.error(`Error importing route ${file}:`, error);
        });
    }
});

app.listen(8000, () => console.log('Listening on  port 8000'));