import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import ListIcon from "@mui/icons-material/List";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MovieIcon from "@mui/icons-material/Movie";
import LinkIcon from "@mui/icons-material/Link";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { movie, recommendations, metadata } from "./mockData";
import AppContainer from "@/components/AppContainer/AppContainer";

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
};

export default function MediaDetailsPage() {
  return (
    <Container>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "minmax(0, 1fr) 300px",
          },
          gap: 2,
        }}
      >
        {/* ========================================================
              MAIN COLUMN
          ======================================================== */}

        <Box sx={{ minWidth: 0 }}>
          {/* PLAYER */}

          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              bgcolor: "#050609",
              borderRadius: 1,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
            }}
          >
            {/* fake video image */}

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${movie.poster})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(.65)",
              }}
            />

            {/* dark overlay */}

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,.05) 50%, rgba(0,0,0,.75) 100%)",
              }}
            />
          </Box>

          {/* ======================================================
                TITLE
            ====================================================== */}

          <Box sx={{ pt: 1.5 }}>
            <Typography
              sx={{
                fontSize: {
                  xs: 16,
                  md: 18,
                },
                fontWeight: 600,
                lineHeight: 1.5,
                color: "#d7d8dd",
              }}
            >
              {movie.code} "{movie.title}" — A sample Media Details page
              demonstrating the MCat media layout and metadata.
            </Typography>
          </Box>

          {/* ======================================================
                ACTIONS
            ====================================================== */}

          <Stack
            sx={{
              py: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 2.5,
            }}
          >
            <Button
              startIcon={<FavoriteBorderIcon />}
              sx={{
                color: "#aeb1ba",
                textTransform: "none",
                fontSize: 14,
              }}
            >
              Save
            </Button>

            <Button
              startIcon={<ListIcon />}
              sx={{
                color: "#aeb1ba",
                textTransform: "none",
                fontSize: 14,
              }}
            >
              Playlist
            </Button>

            <Button
              startIcon={<DownloadIcon />}
              sx={{
                color: "#aeb1ba",
                textTransform: "none",
                fontSize: 14,
              }}
            >
              Download
            </Button>

            <Button
              startIcon={<ShareIcon />}
              sx={{
                color: "#aeb1ba",
                textTransform: "none",
                fontSize: 14,
              }}
            >
              Share
            </Button>
          </Stack>

          {/* ======================================================
                DESCRIPTION
            ====================================================== */}

          <Box sx={{ py: 2.5 }}>
            <Typography
              sx={{
                color: "#858994",
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              {movie.description}
            </Typography>
          </Box>

          <Box
            sx={{
              mb: 4,
              color: "#a7a8ae",
              fontSize: 15,
              lineHeight: 1.9,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            {metadata.map(([label, value], index) => {
              if (Array.isArray(value)) {
                return (
                  <div
                    key={`${label}-${index}`}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Box component="span" sx={{ color: "#a7a8ae" }}>
                      {`${label}`}:{` `}
                    </Box>

                    <Box
                      sx={{
                        // mb: 4,
                        color: "#a7a8ae",
                        fontSize: 15,
                        lineHeight: 1.9,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                      }}
                    >
                      {value.map((val, index) => (
                        <Typography
                          // Create a guaranteed unique key for every array item
                          key={`${label}-${index}`}
                          component="div"
                          sx={{
                            fontSize: 15,
                            lineHeight: 1.9,
                            color: "#a7a8ae",
                          }}
                        >
                          <Box component="span" sx={{ color: "#c5a35a" }}>
                            {val.name},&nbsp;
                          </Box>
                        </Typography>
                      ))}
                    </Box>
                  </div>
                );
              }

              // 2. Handle the flat value case (strings/numbers)
              return (
                <Typography
                  key={index}
                  component="div"
                  sx={{
                    fontSize: 15,
                    lineHeight: 1.9,
                    color: "#a7a8ae",
                  }}
                >
                  <Box sx={{ color: "#a7a8ae", component: "span" }}>
                    {Array.isArray(label) &&
                      label.map((item) => (
                        <div key={item.id}>
                          <p>{item.name}</p>
                          {/* Render other properties like cover, birthdate, etc. */}
                        </div>
                      ))}
                  </Box>

                  <Box
                    component="span"
                    sx={{
                      color: "#c5a35a",
                    }}
                  >
                    {value}
                  </Box>
                </Typography>
              );
            })}
          </Box>

          {/* ======================================================
                SOURCES
            ====================================================== */}

          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 700,
                mb: 1.5,
              }}
            >
              Sources
            </Typography>

            <Stack spacing={1}>
              {movie.sources.map((source) => (
                <Box
                  key={source.name}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 1.5,
                    bgcolor: "#141720",
                    border: "1px solid #252833",
                    borderRadius: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 42,
                      bgcolor: "#242733",
                      borderRadius: 0.5,
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <PlayArrowIcon
                      sx={{
                        color: "#e45165",
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      {source.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 12,
                        color: "#676b76",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {source.url}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#777b86",
                    }}
                  >
                    {source.duration}
                  </Typography>

                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      color: "#aeb0b7",
                      borderColor: "#363946",
                      textTransform: "none",
                    }}
                  >
                    Open
                  </Button>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* ========================================================
              SIDEBAR
          ======================================================== */}

        <Box
          sx={{
            minWidth: 0,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          {/* AD / EMPTY BLOCK */}

          <Box
            sx={{
              height: 220,
              bgcolor: "#15171e",
              border: "1px solid #1e2028",
              mb: 2,
              display: "grid",
              placeItems: "center",
              color: "#444751",
            }}
          >
            <Typography sx={{ fontSize: 12 }}>Sidebar</Typography>
          </Box>

          {/* RECOMMENDATIONS */}

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: "#c1c3ca",
              mb: 1,
            }}
          >
            Related Movies
          </Typography>

          <Stack spacing={1.5}>
            {recommendations.map((item) => (
              <Box
                key={item.code}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 1,
                  cursor: "pointer",

                  "&:hover .recommendation-title": {
                    color: "#e45165",
                  },
                }}
              >
                {/* thumbnail */}

                <Box
                  sx={{
                    position: "relative",
                    aspectRatio: "16 / 9",
                    overflow: "hidden",
                    borderRadius: 0.5,
                    bgcolor: "#1a1c24",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 3,
                      right: 3,
                      bgcolor: "rgba(0,0,0,.8)",
                      color: "#ddd",
                      px: 0.5,
                      py: 0.15,
                      borderRadius: 0.3,
                      fontSize: 10,
                    }}
                  >
                    {item.duration}
                  </Box>
                </Box>

                {/* text */}

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    className="recommendation-title"
                    sx={{
                      fontSize: 13,
                      lineHeight: 1.4,
                      color: "#999ca5",
                      transition: "color .15s",
                    }}
                  >
                    {item.code} {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#555963",
                      mt: 0.4,
                    }}
                  >
                    Unwatched
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
