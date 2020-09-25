const backgroundImage = imageUrl => ({
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
});

export default backgroundImage;
