import HeroSection from "@/components/shadcn-studio/blocks/hero-section-35/hero-section-35";
import Members from "@/components/shadcn-studio/blocks/hero-section-41/hero-section-41";
import { blogData, execomData } from "@/data";

const Hero = () => {
  return (
    <div>
      <HeroSection blogdata={blogData} />
      <Members menudata={execomData} />
    </div>
  );
};

export default Hero;
