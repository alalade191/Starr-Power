import { PietileCarousel } from "pietile-carousel";

function DoubleRoom() {
  return (
    <PietileCarousel autoplayInterval={3} margin={20}>
      <figure className="bg-[url(/images/double1-carousel.jpg)] w-[300] h-[430px] bg-cover bg-no-repeat bg-center rounded-md"></figure>
      <figure className="bg-[url(/images/double2-carousel.jpg)] w-[300]  h-[430px]  bg-cover bg-no-repeat bg-center rounded-md"></figure>
      <figure className="bg-[url(/images/double3-carousel.jpg)] w-[300]  h-[430px]  bg-cover bg-no-repeat bg-center rounded-md"></figure>
    </PietileCarousel>
  );
}

export default DoubleRoom;
