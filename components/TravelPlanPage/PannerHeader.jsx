import { getBlurData } from "@/utils/getBlurEffect";
import { getImageUrl } from "@/utils/getImages";
import { Clock } from "lucide-react";
import Image from "next/image";

const PannerHeader = async ({ data }) => {
  const { base64 } = await getBlurData(
    getImageUrl(data?.hero_section?.cover_image?.query),
  );

  return (
    <header className="relative w-full h-[85vh] min-h-[600px] overflow-hidden group">
      {/* <!-- Background Image --> */}
      <Image
        src={getImageUrl(data?.hero_section?.cover_image?.query)}
        alt={data?.hero_section?.cover_image?.alt || "Travel Plan Image"}
        className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 ease-in-out duration-700"
        width={1200}
        height={1786}
        placeholder="blur"
        blurDataURL={base64}
      />

      {/* <!-- Gradient Overlay --> */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-black/30"></div>

      {/* <!-- Hero Content --> */}
      <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 flex flex-col items-start gap-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-sm font-medium drop-shadow-lg">
          <Clock className="w-3.5 h-3.5" />
          <span>{data?.hero_section?.duration}</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl drop-shadow-lg font-medium text-white tracking-tight leading-[1.1]">
          {data?.hero_section?.destination_name} <br />
          <span className="text-emerald-400">
            {data?.hero_section?.tagline}
          </span>
        </h1>

        <p className="text-lg text-gray-50 max-w-2xl drop-shadow-lg font-normal leading-relaxed">
          {data?.hero_section?.overview_description}
        </p>
      </div>
    </header>
  );
};

export default PannerHeader;
