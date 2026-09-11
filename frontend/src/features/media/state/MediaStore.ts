import Media from "@/domain/media/Media";
import MediaService from "@/infrastructure/wails/media";
import { makeAutoObservable, runInAction } from "mobx";

export default class MediaStore {
  media: Media | null = null;
  // images: Image[] = [];
  loading = false;

  constructor(
    private readonly mediaService: MediaService,
    // private readonly imageService: ImageService,
  ) {
    makeAutoObservable(this);
  }

  async load(id: string) {
    this.loading = true;

    try {
      const mediaData = await this.mediaService.findById(id);

      // const imageData = await this.imageService.findForMedia(id);

      runInAction(() => {
        this.media = new Media(mediaData);

        // this.images = imageData.map((image) => new Image(image));

        this.loading = false;
      });
    } catch (error) {
      // ...
    }
  }
}
