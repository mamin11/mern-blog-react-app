import PostMessage from '../models/postMessage.js';

//get posts
export const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find();
        console.log(posts);
        
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

//create a post
export const createPost = async (req, res) => {
    
    //get the post details from the request body
    const post = req.body;

    //create a new postMessage in the db
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}