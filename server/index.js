import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//all posts routes. prefixed with /posts
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://theoneamin:Amiinkeey11@cluster0.jrvqj.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT  = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,  {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);