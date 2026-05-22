import Marquee from "react-fast-marquee";
import { FaArrowRightLong } from "react-icons/fa6";
const photos = [
  {
    id: 1,
    title: "Cyberpunk City",
    category: "Cyberpunk",
  },
  {
    id: 2,
    title: "Fantasy Dragon",
    category: "Fantasy",
  },
  {
    id: 3,
    title: "Astronaut in Space",
    category: "Sci-Fi",
  },
  {
    id: 4,
    title: "AI Robot Girl",
    category: "Technology",
  },
  {
    id: 5,
    title: "Dreamy Forest",
    category: "Nature",
  },
  {
    id: 6,
    title: "Samurai Warrior",
    category: "Anime",
  },
  {
    id: 7,
    title: "Underwater Kingdom",
    category: "Fantasy",
  },
  {
    id: 8,
    title: "Desert Adventure",
    category: "Adventure",
  },
  {
    id: 9,
    title: "Floating Islands",
    category: "Fantasy",
  },
  {
    id: 10,
    title: "Neon Street",
    category: "Cyberpunk",
  },
  {
    id: 11,
    title: "Alien Planet",
    category: "Sci-Fi",
  },
  {
    id: 12,
    title: "Ancient Temple",
    category: "Adventure",
  },
  {
    id: 13,
    title: "Snowy Mountains",
    category: "Nature",
  },
  {
    id: 14,
    title: "Cyberpunk City",
    category: "Futuristic Car",
  },
  {
    id: 15,
    title: "Fantasy Castle",
    category: "Fantasy",
  },
  {
    id: 16,
    title: "Digital Hacker",
    category: "Cyberpunk",
  },
  {
    id: 17,
    title: "Anime Warrior Girl",
    category: "Anime",
  },
  {
    id: 18,
    title: "Moonlight Lake",
    category: "Nature",
  },
  {
    id: 19,
    title: "Space Battle",
    category: "Sci-Fi",
  },
  {
    id: 20,
    title: "Cute AI Cat",
    category: "Technology",
  },
  {
    id: 21,
    title: "Volcanic Planet",
    category: "Sci-Fi",
  },
  {
    id: 22,
    title: "Mystic Wizard",
    category: "Fantasy",
  },
  {
    id: 23,
    title: "Robot Factory",
    category: "Technology",
  },
  {
    id: 24,
    title: "Galaxy Portal",
    category: "Sci-Fi",
  },
  {
    id: 25,
    title: "Floating Cyber Castle",
    category: "Cyberpunk",
  },
];
const MarqueeLayout = () => {
  return (
    <div className="bg-gray-100 dark:bg-black dark:text-white backdrop-blur-lg shadow-md py-5 my-10 dark:border-t border-gray-600 dark:border-b">
      <Marquee pauseOnHover="true">
        {photos.map((photo) => (
          <span
            key={photo.id}
            className="pl-5 flex items-center gap-2 font-medium "
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-700"></span>
            </span>{" "}
            {photo.title} <FaArrowRightLong />
            {photo.category}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeLayout;
