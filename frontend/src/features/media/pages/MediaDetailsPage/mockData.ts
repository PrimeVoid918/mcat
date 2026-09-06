const mockActorImage = {
  id: "mock-actor-image",
  displayType: "THUMBNAIL",
  path: "/mock/actor.jpg",
  mimeType: "image/jpeg",
  widthPx: 400,
  heightPx: 600,
  fileSizeBytes: 100000,
  checksum: "mock",
  altText: "Actor",
  caption: "Actor",
  createdAt: "2026-01-01T00:00:00Z",
  updatedAt: null,
};

export const movie = {
  title: "The Dark Knight",
  code: "TDK-273",
  duration: "2:32:07",
  description:
    "A mysterious story unfolds as the characters find themselves caught in a series of unexpected events. This is a sample description for the MCat media details page.",
  genres: ["Action", "Crime", "Drama", "Thriller"],
  year: 2008,

  poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1000",

  previews: [
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500",
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500",
  ],

  actors: [
    {
      id: "actor-001",
      name: "Abel Cain",
      birthdate: "1995-04-12",
      gender: "Male",
      heightCm: 178,
      cover: mockActorImage,
      movies: [],
    },
    {
      id: "actor-002",
      name: "Johan Yogur",
      birthdate: "1992-08-21",
      gender: "Male",
      heightCm: 181,
      cover: mockActorImage,
      movies: [],
    },
    {
      id: "actor-003",
      name: "John Kennesd",
      birthdate: "1997-03-15",
      gender: "Male",
      heightCm: 175,
      cover: mockActorImage,
      movies: [],
    },
  ],

  sources: [
    {
      name: "Primary Source",
      url: "https://example.com/source/1",
      duration: "2:32:07",
    },
    {
      name: "Alternative Source",
      url: "https://example.com/source/2",
      duration: "2:32:07",
    },
  ],
};

export const recommendations = [
  {
    title: "The Prestige",
    code: "MOV-001",
    duration: "2:10:14",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
  },
  {
    title: "Blade Runner 2049",
    code: "MOV-002",
    duration: "2:43:21",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400",
  },
  {
    title: "Interstellar",
    code: "MOV-003",
    duration: "2:49:03",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400",
  },
  {
    title: "Inception",
    code: "MOV-004",
    duration: "2:28:41",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
  },
];

export const metadata = [
  ["Release date", "2025-05-23"],
  ["Code", movie.code],
  ["Title", movie.title],
  ["Actors", movie.actors],
  ["Genre", movie.genres.join(", ")],
];
