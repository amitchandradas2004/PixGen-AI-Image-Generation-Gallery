export const getPhotos = async () => {
  const res = await fetch(
    "https://pixgen-ai-image-generation-gallery.vercel.app/photos.json",
  );
  const data = await res.json();
  return data;
};
