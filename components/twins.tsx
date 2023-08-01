import { Carousel } from "@mantine/carousel";
import Image from "next/image";

function TwinsRoom() {
  return (
    <Carousel
      maw={600}
      mx="auto"
      withIndicators
      height={430}
      dragFree
      slideGap="md"
      align="center"
      style={{ height: "400px" }}
    >
      <Carousel.Slide>
        <div className="h-[430px] w-[600px]">
          <Image
            height={500}
            width={600}
            src={"/images/twins1-carousel.jpg"}
            alt=""
            className="h-full"
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="h-[430px] w-[600px]">
          <Image
            height={100}
            width={600}
            src={"/images/twins2-carousel.jpg"}
            alt=""
            className="h-full rounded-md"
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="h-[430px] w-[600px]">
          <Image
            height={100}
            width={600}
            src={"/images/twins3-carousel.jpg"}
            alt=""
            className="h-full rounded-md"
          />
        </div>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
export default TwinsRoom;
