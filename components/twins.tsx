import { PietileCarousel } from "pietile-carousel";

function TwinsRoom() {
  return (
    <PietileCarousel autoplayInterval={3} margin={20}>
      <figure className="bg-[url(/images/twins1-carousel.jpg)] w-[300] h-[430px] bg-cover bg-no-repeat bg-center rounded-md"></figure>
      <figure className="bg-[url(/images/twins2-carousel.jpg)] w-[300]  h-[430px]  bg-cover bg-no-repeat bg-center rounded-md"></figure>
      <figure className="bg-[url(/images/twins3-carousel.jpg)] w-[300]  h-[430px]  bg-cover bg-no-repeat bg-center rounded-md"></figure>
    </PietileCarousel>
  );
}

export default TwinsRoom;
