export default class GenreNavigation {
  readonly genre = "/genre";

  details(id: string) {
    return `/genre/${id}`;
  }
}
