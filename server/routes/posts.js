import express from 'express';

//Import logic from controllers/posts
import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router();

//Routes
router.get('/', getPosts);
router.get('/post', createPosts);

export default router;