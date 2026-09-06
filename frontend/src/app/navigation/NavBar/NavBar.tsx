import React, { useState } from "react";
import { Button, Box, Toolbar, AppBar, InputBase, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppNavigation } from "@/app/navigation/AppNavigation/AppNavigationContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const appNav = useAppNavigation();

  const [searchQuery, setSearchQuery] = useState("");

  const navItems = ["Catalog", "Genre", "Actor", "Options"];

  // Determine if we are currently on the home page / Catalog route
  const isHome = location.pathname === "/" || location.pathname === "/media";

  const handleNavClick = (item: string) => {
    // Map navigation items to respective routes or handle mock routing
    if (item === "Catalog") {
      navigate(appNav.media.catalog);
    }
    if (item === "Genre") {
      navigate(appNav.genre.genre);
    }
    if (item === "Actor") {
      navigate(appNav.actor.actor);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 3 },
          minHeight: "64px !important",
          position: "relative",
        }}
      >
        {/* Left Side / Search Box Area */}

        {/* Centered Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            position: { md: "absolute" },
            left: { md: "50%" },
            transform: { md: "translateX(-50%)" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              minWidth: { sm: "220px", md: "280px" },
            }}
          >
            {!isHome && (
              <Box
                component="form"
                onSubmit={handleSearchSubmit}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: (theme) => alpha(theme.palette.action.hover, 0.4),
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                  px: 1.5,
                  py: 0.5,
                  width: { xs: "140px", sm: "200px", md: "260px" },
                  transition: "width 0.2s ease-in-out",
                  "&:focus-within": {
                    borderColor: "primary.main",
                    bgcolor: "background.default",
                  },
                }}
              >
                <SearchIcon
                  sx={{ color: "text.secondary", mr: 1, fontSize: "1.1rem" }}
                />
                <InputBase
                  placeholder="Search media..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    color: "text.primary",
                    fontSize: "0.875rem",
                    width: "100%",
                    "& input::placeholder": {
                      color: "text.disabled",
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            )}
          </Box>
          {navItems.map((item) => {
            // Check active state based on route matching
            const isActive =
              location.pathname.toLowerCase().includes(item.toLowerCase()) ||
              (isHome && item === "Catalog");

            return (
              <Button
                key={item}
                color="inherit"
                onClick={() => handleNavClick(item)}
                sx={{
                  textTransform: "none",
                  color: isActive ? "primary.main" : "text.secondary",
                  fontWeight: isActive ? 600 : 400,
                  bgcolor: isActive ? "action.selected" : "transparent",
                  "&:hover": {
                    color: "text.primary",
                    bgcolor: "action.hover",
                  },
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              >
                {item}
              </Button>
            );
          })}
        </Box>

        {/* Right spacing placeholder to balance flex layout when search is visible */}
        <Box
          sx={{
            minWidth: { sm: "220px", md: "280px" },
            display: { xs: "none", sm: "block" },
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
