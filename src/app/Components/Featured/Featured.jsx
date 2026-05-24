import PhotoCard from "../Photo/PhotoCard";
import Link from "next/link";

const Featured = async () => {
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
      <PhotoCard />
    </div>
  );
};

export default Featured;
