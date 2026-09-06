export default class MediaNavigation {
  readonly catalog = "/media";

  details(id: string) {
    return `/media/${id}`;
  }
}
