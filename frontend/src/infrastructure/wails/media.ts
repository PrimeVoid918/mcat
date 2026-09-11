import { ent } from "@/app/config/ent";
import * as WailsMediaService from "../../../wailsjs/go/media/Service";

export default class MediaService {
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

  async create(input: ent.media.CreateInput) {
    return WailsMediaService.Create(input);
  }

  async findByCode(code: string) {
    return WailsMediaService.FindByCode(code);
  }
}
