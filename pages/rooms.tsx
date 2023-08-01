import Testimonial from "@/components/testimonial";
import RoomFeatures from "@/rooms/features";
import RoomsHeroSection from "@/rooms/hero-section";

export default function Room() {
  return (
    <div>
      <RoomsHeroSection />
      <RoomFeatures />
      <Testimonial />
    </div>
  );
}
