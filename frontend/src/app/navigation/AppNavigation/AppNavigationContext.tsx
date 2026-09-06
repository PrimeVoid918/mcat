import { createContext, useContext, type ReactNode } from "react";

import { AppNavigation } from "./AppNavigation";

const AppNavigationContext = createContext<AppNavigation | null>(null);

interface AppNavigationProviderProps {
  navigation: AppNavigation;
  children: ReactNode;
}

export function AppNavigationProvider({
  navigation,
  children,
}: AppNavigationProviderProps) {
  return (
    <AppNavigationContext.Provider value={navigation}>
      {children}
    </AppNavigationContext.Provider>
  );
}

export function useAppNavigation() {
  const navigation = useContext(AppNavigationContext);

  if (!navigation) {
    throw new Error(
      "useAppNavigation must be used within AppNavigationProvider",
    );
  }

  return navigation;
}

/* usage
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const appNavigation = useAppNavigation();

 function handleClick() {
    navigate(
      appNavigation.media.details(id),
    );
  }


  return (
    <div onClick={handleClick}>
      ...
    </div>
  );

  // for links
  import { Link } from "react-router-dom";

  return (
    <Link to={navigation.media.details(id)}>
      ...
    </Link>
  );

  // for buttons
  <Button
    component={Link}
    to={navigation.media.details(id)}
  >
    View
  </Button>
*/
