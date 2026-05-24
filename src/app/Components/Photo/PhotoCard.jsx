import Image from "next/image";

const PhotoCard = ({ photo }) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl

        bg-white/30 dark:bg-black/20
        backdrop-blur-xl

        border border-black/10
        dark:border-white/10

        transition duration-300
        hover:scale-102
        hover:border-cyan-400/40
      "
    >
      {/* Image */}
      <div className="relative h-85 w-full overflow-hidden">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          className="
            object-cover
            transition duration-500
            group-hover:scale-105 select-none
          "
        />
      </div>

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-t
          from-black/90
          via-black/20
          to-transparent
        "
      />

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-white">
        {/* Category */}
        <span
          className="
            inline-block rounded-full
            bg-white/10
            backdrop-blur-md
            px-3 py-1
            text-xs
            border border-white/10
            mb-3
          "
        >
          {photo.category}
        </span>

        {/* Title */}
        <h2 className="text-xl font-bold">{photo.title}</h2>

        {/* Prompt */}
        <p className="mt-2 text-sm text-white/70 line-clamp-2">
          {photo.prompt}
        </p>

        {/* Bottom Row */}
        <div className="mt-4 flex items-center gap-4 text-sm text-white/70">
          <span>❤️ {photo.likes}</span>
          <span>⚡ {photo.model}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
