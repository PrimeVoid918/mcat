import * as ent from "@/app/config/ent";

export default class Media {
  constructor(private readonly data: ent.ent.ent.Media) {}

  get id() {
    return this.data.id;
  }

  get title() {
    return this.data.title;
  }

  get durationSeconds() {
    return this.data.durationSeconds;
  }

  get durationMinutes(): number | undefined {
    const dur = this.data.durationSeconds;
    if (dur == undefined) {
      return undefined;
    }
    return Math.floor(dur / 60);
  }

  get durationHours() {
    const dur = this.data.durationSeconds;
    if (dur == undefined) {
      return undefined;
    }
    return Math.floor(dur / 3600);
  }

  get isReleased() {
    return new Date(this.data.releaseDate) <= new Date();
  }

  get displayTitle() {
    return this.data.title?.trim();
  }
}
