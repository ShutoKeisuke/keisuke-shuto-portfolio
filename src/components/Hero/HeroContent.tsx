import { HeroHeading } from './HeroHeading';
import { HeroRoles } from './HeroRoles';
import { HeroDescription } from './HeroDescription';
import { HeroSocialLinks } from './HeroSocialLinks';
import { HeroStats } from './HeroStats';
import { HeroImage } from './HeroImage';

const HeroContent = () => {
  return (
    <div className="relative z-10 text-center lg:text-left lg:flex lg:items-center lg:justify-between max-w-7xl mx-auto px-4 py-20">
      <div className="lg:flex-1 lg:pr-12">
        <HeroHeading />
        <HeroRoles />
        <HeroDescription />
        <HeroSocialLinks />
        <HeroStats />
      </div>
      <HeroImage />
    </div>
  );
};

export default HeroContent;