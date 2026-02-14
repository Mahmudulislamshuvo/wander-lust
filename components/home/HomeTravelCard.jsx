import { getBlurData } from "@/utils/getBlurEffect";
import Image from "next/image";
import { Clock } from "lucide-react";

const HomeTravelCard = async ({ plan }) => {
  const { base64 } = await getBlurData(plan?.hero_section?.cover_image?.url);

  return (
    <div
      key={plan.slug}
      className="group relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
    >
      <Image
        src={plan?.hero_section?.cover_image?.url}
        alt={plan.hero_section.destination_name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        width={800}
        height={600}
        placeholder="blur"
        blurDataURL={base64}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3" />
          {plan.hero_section.duration}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-2xl font-medium text-white tracking-tight leading-tight mb-1 group-hover:text-emerald-200 transition-colors">
          {plan.hero_section.destination_name} <br />
          {plan.hero_section.tagline}
        </h3>
        <p className="text-white/70 text-sm line-clamp-2">
          {plan.hero_section.description}
        </p>
      </div>
    </div>
  );
};

export default HomeTravelCard;
