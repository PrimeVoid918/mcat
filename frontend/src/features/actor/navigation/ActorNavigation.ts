export default class ActorNavigation {
  readonly actor = "/actor";

  details(id: string) {
    return `/actor/${id}`;
  }
}
