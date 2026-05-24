import { getPhotos } from "@/app/lib/data";

const PhotoCard = async () => {
  const allPhotos = await getPhotos();
  console.log(allPhotos);
  const featuredPhotos = allPhotos.filter((photo) => photo.featured);
  console.log(featuredPhotos);

  // const featuredPhotos = allPhotos.filter((photo) => photo.featured);
  // console.log(featuredPhotos);

  return (
    <div>
      {/* {featuredPhotos.map((photo) => (
        <div key={photo.id}>
          <h2>{photo.id}</h2>
        </div>
      ))} */}
    </div>
  );
};

export default PhotoCard;
