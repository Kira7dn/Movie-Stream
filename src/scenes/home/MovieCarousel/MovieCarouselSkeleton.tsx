import CarouselItemSkeleton from "@/components/carousel/CarouselItemSkeleton";
import CarouselWrapper from "@/components/carousel/CarouselWrapper";

function MovieCarouselSkeleton() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <CarouselWrapper>
      {array.map((item) => {
        return <CarouselItemSkeleton key={item} />;
      })}
    </CarouselWrapper>
  );
}

export default MovieCarouselSkeleton;
