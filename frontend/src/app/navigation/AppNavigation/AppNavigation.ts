// src/app/navigation/AppNavigation.ts

import { makeAutoObservable } from "mobx";

import MediaNavigation from "@/features/media/navigation/MediaNavigation";
import SearchNavigation from "@/features/search/navigation/SearchNavigation";
import ActorNavigation from "@/features/actor/navigation/ActorNavigation";
import GenreNavigation from "@/features/genre/navigation/GenreNavigation";

export class AppNavigation {
  //* good for bread crumbs
  // currentSection = "media";
  drawerOpen = false;

  readonly media = new MediaNavigation();
  readonly actor = new ActorNavigation();
  readonly genre = new GenreNavigation();
  readonly search = new SearchNavigation();

  constructor() {
    makeAutoObservable(this);
  }

  openDrawer() {
    this.drawerOpen = true;
  }

  closeDrawer() {
    this.drawerOpen = false;
  }

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
}
