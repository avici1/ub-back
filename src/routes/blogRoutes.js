import { Router } from 'express';
import blogValidation from '../middlewares/validation/blogValidation';
import BlogController from '../controllers/blogController';

const router = Router();

router.get('/', BlogController.getAllBlogs);
router.post('/', blogValidation.blogPostValidate, BlogController.addBlog);
router.get('/:id', BlogController.getABlog);
router.put('/:id', blogValidation.blogUpdateValidate, BlogController.updateBlog);
router.delete('/:id', BlogController.deleteBlog);

export default router;
