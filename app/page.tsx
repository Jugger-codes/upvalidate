import Audience from "@/components/Rashad/Audience";
import Banner from "@/components/Rashad/Banner";
import FooterBanner from "@/components/Rashad/FooterBanner";
import Motivation from "@/components/Rashad/Motivation";
import TailoredTalk from "@/components/Rashad/TailoredTalk";
import Testimonial from "@/components/Rashad/Testimonial";
import Transformation from "@/components/Rashad/Transformation";
import WatchRashad from "@/components/Rashad/WatchRashad";

export default function Home() {
  return (
    <main className="w-screen overflow-hidden">
      <Banner />
      <Motivation />
      <Audience />
      <Transformation />
      <div className="bg-black">
        <WatchRashad />
        <TailoredTalk />
      </div>
      <Testimonial />
      <FooterBanner />
    </main>
  );
}
