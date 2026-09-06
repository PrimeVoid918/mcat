import WailsMediaService from "../../../wailsjs/go/media/Service";
// import {context} from "../../../wailsjs/go/models";

export class MediaService {
  async findAll() {
    return WailsMediaService.FindAll();
  }

  async findById(id: string) {
    // try {
    //   const result = await WailsMediaService.FindByID(id);

    //   return MediaSchema.parse(result);
    // } catch (error) {
    //   throw new MediaServiceError("Unable to retrieve media", { cause: error });
    // }

    return WailsMediaService.FindByID(id);
  }

  async findByCode(code: string) {
    return WailsMediaService.FindByCode(code);
  }
}
