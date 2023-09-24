const carouselNavigation = (
  dir: string,
  carouselContainer: React.MutableRefObject<HTMLDivElement | null>
) => {
  const container = carouselContainer.current;
  if (container) {
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth - 200)
        : container.scrollLeft + (container.offsetWidth - 200);
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
};

export default carouselNavigation;
