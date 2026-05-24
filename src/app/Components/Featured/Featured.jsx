import PhotoCard from "../Photo/PhotoCard";
import Link from "next/link";

const Featured = async () => {
  const res = await fetch(
    "https://pixgen-ai-image-generation-gallery.vercel.app/photos.json",
  );
  const photos = await res.json();

  const featuredPhotos = photos.filter((photo) => photo.featured).slice(0, 5);
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-4xl font-bold">Featured AI Creations</h2>
        <Link href={"/allphotos"}>
          <button className="btn btn-dash btn-primary rounded-full w-30 h-8">
            See all
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 pt-10">
        {featuredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
