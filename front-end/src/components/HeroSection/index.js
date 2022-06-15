import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroH1
} from "./HeroElements";

import Video from "../../videos/Dj.mp4"; //Video by <a href="https://pixabay.com/users/matthias_groeneveld-4535957/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=8437">Matthias Groeneveld</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=8437">Pixabay</a>

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="pexels-artem-podrez-6274579.mp4"
        />
      </HeroBg>
      <HeroH1>500 Greatest Albums Of All Time</HeroH1>
    </HeroContainer>
  );
};

export default HeroSection;
