import VideoService from '../services/VideoService';
import Helper from '../helpers/Helpers';

const helper = new Helper();

class VideoController {
  static async getAllVideos(req, res) {
    try {
      const allVideos = await VideoService.getAllVideos();
      if (allVideos.length > 0) {
        helper.setSuccess(200, 'Videos Retrieved Successfully!!!', allVideos);
      } else {
        helper.setSuccess(200, 'No Video Found');
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(400, error);
      return helper.send(res);
    }
  }

  static async addVideo(req, res) {
    const titleDuplicate = await VideoService.videoTitleCount(req.body.videoTitle);
    if (titleDuplicate) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'Video Title already exists, Please Enter Another Title',
      });
    }
    const descriptionDuplicate = await VideoService.videoDescrCount(req.body.videoDescription);
    if (descriptionDuplicate) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'Video Description already exists, Please Enter Another Description',
      });
    }
    const urlDuplicate = await VideoService.videoUrlCount(req.body.videoUrl);
    if (urlDuplicate) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'Video Url already exists, Please Enter Another Url',
      });
    }
    const newVideo = req.body;
    try {
      const createdVideo = await VideoService.addVideo(newVideo);
      helper.setSuccess(201, 'Video Added Successfully!', createdVideo);
      return helper.send(res);
    } catch (error) {
      helper.setError(400, error.message);
      return helper.send(res);
    }
  }


  static async updatedVideo(req, res) {
    const titleDuplicate = req.body.videoTitle ? (await VideoService.videoTitleCount(req.body.videoTitle)) : ('');
    const descriptionDuplicate = req.body.descriptionDuplicate ? (await VideoService.videoDescrCount(req.body.videoDescription)) : ('');
    const urlDuplicate = req.body.videoUrl ? (await VideoService.videoUrlCount(req.body.videoUrl)) : ('');
    if (titleDuplicate || urlDuplicate || descriptionDuplicate) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'Your Details already exists in DB',
      });
    }
    const alteredVideo = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      helper.setError(400, 'Please Input a valid numeric value');
      return helper.send(res);
    }
    try {
      const updateVideo = await VideoService.updateVideo(id, alteredVideo);
      if (!updateVideo) {
        helper.setError(404, `Cannot Find Video with the id: ${id}`);
      } else {
        helper.setSuccess(200, 'Video Updated Successfully!!!', updateVideo[1][0]);
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(404, error);
      return helper.send(res);
    }
  }

  static async getAVideo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      helper.setError(400, 'Please Input A Valid Numeric Value');
      return helper.send(res);
    }

    try {
      const theVideo = await VideoService.getAVideo(id);

      if (!theVideo) {
        helper.setError(404, `Can not Find Video with the id: ${id}`);
      } else {
        helper.setSuccess(200, 'Video Successfully Found', theVideo);
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(404, error);
      return helper.send(res);
    }
  }

  static async deleteVideo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      helper.setError(400, 'Please Provide a numeric value');
      return helper.send(res);
    }

    try {
      const videoToDelete = await VideoService.deleteVideo(id);

      if (videoToDelete) {
        helper.setSuccess(200, 'Video Deleted Successfully');
      } else {
        helper.setError(404, `Video with the id ${id} can't be found`);
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(400, error);
      return helper.send(res);
    }
  }
}

export default VideoController;