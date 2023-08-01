import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { PietileCarousel } from "pietile-carousel";

function Sliding() {
  return (
    <PietileCarousel autoplayInterval={3} margin={20}>
      <figure className="bg-[url(/images/firstsingle-carousel.jpg)] w-[300] h-[430px] bg-cover bg-no-repeat bg-center rounded-md"></figure>
      <figure className="bg-[url(/images/single2-carousel.jpg)] w-[300]  h-[430px]  bg-cover bg-no-repeat bg-center rounded-md"></figure>
      <figure className="bg-[url(/images/single3-carousel.jpg)] w-[300]  h-[430px]  bg-cover bg-no-repeat bg-center rounded-md"></figure>
    </PietileCarousel>
    // <Carousel
    //   maw={600}
    //   mx="auto"
    //   withIndicators
    //   height={430}
    //   dragFree
    //   slideGap="md"
    //   align="center"
    //   style={{ height: "400px" }}
    // >
    //   <Carousel.Slide>
    //     <div className="h-[430px] w-[600px]">
    //       <Image
    //         height={500}
    //         width={600}
    //         src={"/images/gym.png"}
    //         alt=""
    //         className="h-full rounded-md"
    //       />
    //     </div>
    //   </Carousel.Slide>
    //   <Carousel.Slide>
    //     <div className="h-[430px] w-[600px]">
    //       <Image
    //         height={100}
    //         width={600}
    //         src={"/images/laundry.png"}
    //         alt=""
    //         className="h-full rounded-md"
    //       />
    //     </div>
    //   </Carousel.Slide>
    //   <Carousel.Slide>
    //     <div className="h-[430px] w-[600px]">
    //       <Image
    //         height={100}
    //         width={600}
    //         src={"/images/gym.png"}
    //         alt=""
    //         className="h-full rounded-md"
    //       />
    //     </div>
    //   </Carousel.Slide>
    //   {/* ...other slides */}
    // </Carousel>
  );
}
export default Sliding;

// import { Carousel } from "@mantine/carousel";
// import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
// import Image from "next/image";

// function Sliding() {
//   return (
//     <Carousel
//       maw={320}
//       mx="auto"
//       height={300}
//       nextControlIcon={<IconArrowRight size={16} />}
//       previousControlIcon={<IconArrowLeft size={16} />}
//     >
//       <Carousel.Slide>
//         <Image height={200} width={400} src={"/images/gym.png"} alt="" />
//       </Carousel.Slide>
//       <Carousel.Slide>
//         <Image height={200} width={400} src={"/images/laundry.png"} alt="" />
//       </Carousel.Slide>
//       <Carousel.Slide>
//         <Image height={200} width={400} src={"/images/spa.png"} alt="" />
//       </Carousel.Slide>
//       {/* ...other slides */}
//     </Carousel>
//   );
// }
// export default Sliding;
