import database from '../database/models';

class blogService {
  static async getAllBlogs() {
    try {
      return await database.Blogs.findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async addBlog(newBlog) {
    try {
      return await database.Blogs.create(newBlog);
    } catch (error) {
      throw error;
    }
  }

  static async checkDuplicateTitles(blogTitle) {
    try {
      return await database.Blogs.count({ where: [{ blogTitle }] });
    } catch (error) {
      throw error;
    }
  }

  static async checkDuplicateDescs(blogDescription) {
    try {
      return await database.Blogs.count({ where: [{ blogDescription }] });
    } catch (error) {
      throw error;
    }
  }

  static async checkDuplicatePosts(blogPost) {
    try {
      return await database.Blogs.count({ where: [{ blogPost }] });
    } catch (error) {
      throw error;
    }
  }

  static async checkDuplicatePics(blogPic) {
    try {
      return await database.Blogs.count({ where: [{ blogPic }] });
    } catch (error) {
      throw error;
    }
  }

  static async updateABlog(updateBlog, id) {
    try {
      const blogToUpdate = await database.Blogs.findOne({
        where: { id: Number(id) },
      });

      if (blogToUpdate) {
        return await database.Blogs.update(updateBlog,
          { where: { id: Number(id) }, returning: true });
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getABlog(id) {
    try {
      const theBlog = await database.Blogs.findOne({
        where: { id: Number(id) },
      });
      return theBlog;
    } catch (error) {
      throw error;
    }
  }

  static async deleteBlog(id) {
    try {
      const blogToDelete = await database.Blogs.findOne({ where: { id: Number(id) } });

      if (blogToDelete) {
        const deletedBlog = await database.Blogs.destroy({
          where: { id: Number(id) },
        });
        return deletedBlog;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default blogService;
