import database from '../database/models';

class VideoService {
  static async getAllVideos() {
    try {
      return await database.Video.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addVideo(newVideo) {
    try {
      return await database.Video.create(newVideo);
    } catch (error) {
      throw error;
    }
  }

  static async videoTitleCount(videoTitle) {
    try {
      return await database.Video.count({
        where: [{ videoTitle }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async videoDescrCount(videoDescription) {
    try {
      return await database.Video.count({
        where: [{ videoDescription }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async videoUrlCount(videoUrl) {
    try {
      return await database.Video.count({
        where: [{ videoUrl }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async updateVideo(id, updateVideo) {
    try {
      const videoToUpdate = await database.Video.findOne({
        where: { id: Number(id) },
      });

      if (videoToUpdate) {
        return await database.Video.update(updateVideo, { where: { id: Number(id) }, returning: true });
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAVideo(id) {
    try {
      const theVideo = await database.Video.findOne({
        where: { id: Number(id) },
      });
      return theVideo;
    } catch (error) {
      throw error;
    }
  }

  static async deleteVideo(id) {
    try {
      const videoToDelete = await database.Video.findOne({ where: { id: Number(id) } });

      if (videoToDelete) {
        const deletedVideo = await database.Video.destroy({
          where: { id: Number(id) },
        });
        return deletedVideo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default VideoService;