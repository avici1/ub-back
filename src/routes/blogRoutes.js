import { Router } from 'express';
import blogValidation from '../middlewares/validation/blogValidation';
import checkAuth from '../middlewares/checkAuth';
import BlogController from '../controllers/blogController';

const router = Router();

router.get('/', BlogController.getAllBlogs);
router.post('/', checkAuth, blogValidation.blogPostValidate, BlogController.addBlog);
router.get('/:id', BlogController.getABlog);
router.put('/:id', checkAuth, blogValidation.blogUpdateValidate, BlogController.updateBlog);
router.delete('/:id', checkAuth, BlogController.deleteBlog);

export default router;
