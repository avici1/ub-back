import BlogServices from '../services/blogService';
import Helper from '../helpers/blogHelper';

const helper = new Helper();

class BlogController {
  static async addBlog(req, res) {
    const newBlog = req.body;
    try {
      const checkBlogTtl = await BlogServices.checkDuplicateTitles(req.body.blogTitle);
      if (checkBlogTtl) return res.status(409).json({ message: 'blogTitle already exists' });

      const checkBlogDesc = await BlogServices.checkDuplicateDescs(req.body.blogDescription);
      if (checkBlogDesc) return res.status(409).json({ message: 'blogDescription already exists' });

      const checkBlogPost = await BlogServices.checkDuplicatePosts(req.body.blogPost);
      if (checkBlogPost) return res.status(409).json({ message: 'blogPost already exists' });

      const checkBlogPic = await BlogServices.checkDuplicatePics(req.body.blogPost);
      if (checkBlogPic) return res.status(409).json({ message: 'blogPic already exists' });

      const createdBlog = await BlogServices.addBlog(newBlog);
      helper.setSuccess(201, 'Blog Added!', createdBlog);
      return helper.send(res);
    } catch (error) {
      helper.setError(400, error.message);
      return helper.send(res);
    }
  }

  static async updateBlog(req, res) {
    const changes = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      helper.setError(400, 'Please Input a valid numeric value');
      return helper.send(res);
    }

    const blogTtlDuplicate = req.body.blogTitle ? (await BlogServices.checkDuplicateTitles(req.body.blogTitle)) : ('');
    const blogDescrDuplicate = req.body.blogDescription ? (await BlogServices.checkDuplicateDescs(req.body.blogDescription)) : ('');
    const blogPostDuplicate = req.body.blogPost ? (await BlogServices.checkDuplicatePosts(req.body.blogPost)) : ('');
    const blogPicDuplicate = req.body.blogPic ? (await BlogServices.checkDuplicatePics(req.body.blogPic)) : ('');
    if (blogTtlDuplicate || blogDescrDuplicate || blogPostDuplicate || blogPicDuplicate) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'Your content already exist',
      });
    }
    try {
      const updatedBlog = await BlogServices.updateABlog(changes, id);
      if (!updatedBlog) {
        helper.setError(404, `Cannot Find blog with the id: ${id}`);
      } else {
        helper.setSuccess(200, 'Blog Updated', updatedBlog[1][0]);
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(404, error);
      return helper.send(res);
    }
  }

  static async getABlog(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      helper.setError(400, 'Please Input A Valid Numeric Value');
      return helper.send(res);
    }

    try {
      const theBlog = await BlogServices.getABlog(id);
      console.log(theBlog);
      if (!theBlog) {
        helper.setError(404, `Can't find blog with the id: ${id}`);
      } else {
        helper.setSuccess(200, 'Blog Found', theBlog);
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(404, error);
      return helper.send(res);
    }
  }

  static async getAllBlogs(req, res) {
    try {
      const allBlogs = await BlogServices.getAllBlogs();
      if (allBlogs.length > 0) {
        helper.setSuccess(200, 'All Blogs Retrieved', allBlogs);
      } else {
        helper.setSuccess(200, 'No blog Found');
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(400, error);
      return helper.send(res);
    }
  }

  static async deleteBlog(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      helper.setError(400, 'Please provide a numeric value');
      return helper.send(res);
    }

    try {
      const blogToDelete = await BlogServices.deleteBlog(id);

      if (blogToDelete) {
        helper.setSuccess(200, 'Blog Deleted');
      } else {
        helper.setError(404, `Blog with the id ${id} can't be found`);
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(400, error);
      return helper.send(res);
    }
  }
}

export default BlogController;
