import { makeAutoObservable } from "mobx";
import { Location, NavigateFunction } from "react-router-dom";
interface NavBarControllerInterface {
  navItems: string[];
  location: Location;
  navigate: NavigateFunction;
}

export default class NavBarController {
  navItems: string[] = [];
  location: Location;
  navigate: NavigateFunction;

  constructor({ navItems, location, navigate }: NavBarControllerInterface) {
    this.navItems = navItems;
    this.location = location;
    this.navigate = navigate;

    makeAutoObservable(this);
  }

  handleNavClick(item: string) {
    
  }
}
