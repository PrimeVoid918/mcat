import ent from "./ent";

// const ents = ent.EntClient;

type ActorContract = ent.ent.Actor;

export default class Actor {
  constructor(private readonly data: ActorContract) {}

  get name() {
    return this.data.name;
  }

  get heightCm() {
    return this.data.heightCm;
  }
}
