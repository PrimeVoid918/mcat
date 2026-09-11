import { makeAutoObservable } from "mobx";

export class MediaCreateModel {
  title = "";
  code = "";
  description = "";

  actorIds: string[] = [];
  genreIds: string[] = [];

  poster = null;
  previews = [];

  constructor() {
    makeAutoObservable(this);
  }

  get isValid() {
    return this.title.trim().length > 0 && this.code.trim().length > 0;
  }

  toPayload() {
    return {
      Title: this.title.trim(),
      Code: this.code.trim(),
      description: this.description.trim() || null,
      convertValues: () => {
        /* ... */
      },
    };
  }

  reset() {
    this.title = "";
    this.code = "";
    this.description = "";
    this.actorIds = [];
    this.genreIds = [];
    this.poster = null;
    this.previews = [];
  }
}
