// filepath: c:\Users\91790\Desktop\P\contest-tracker (1)\Tammy\Client\src\components\TeamSection.tsx
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";

const TeamSection = () => (
  <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Meet Our Team
      </h2>
      <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
        Our diverse team brings together expertise in AI, finance, and
        technology to deliver innovative solutions for the future of investing.
      </p>
      <div className="flex justify-center">
        <AnimatedTooltipPreview />
      </div>
    </div>
  </section>
);

export default TeamSection;
