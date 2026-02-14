import { getImageUrl } from "@/utils/getImages";
import Image from "next/image";

const ItineraryHighlight = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="bg-emerald-950 py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-emerald-400 font-medium tracking-wide uppercase text-xs mb-3 block">
              Travel Plan
            </span>
            <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">
              Your {data.length}-Day <br />
              Itinerary
            </h2>
          </div>
        </div>

        {/* */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((day) => (
            <div
              key={day._id}
              className="group relative rounded-3xl overflow-hidden bg-emerald-900/50 border border-emerald-800/50 hover:border-emerald-700 transition-all duration-300 flex flex-col"
            >
              {/* Day Thumbnail Image */}
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <Image
                  src={getImageUrl(day.thumbnail_image.query)}
                  alt={day.theme_title}
                  className="w-full h-full object-cover group-hover:scale-105 duration-700 opacity-90"
                  height={500}
                  width={800}
                />
                {/* Image Overlay for Title */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-emerald-950/90 to-transparent">
                  <h3 className="text-2xl font-medium text-white tracking-tight">
                    Day {day.day < 10 ? `0${day.day}` : day.day}:{" "}
                    {day.theme_title}
                  </h3>
                </div>
              </div>

              {/* Schedule List */}
              <div className="p-8 flex-grow">
                <div className="space-y-6">
                  {day.schedule.map((item) => (
                    <div key={item._id} className="flex gap-4">
                      {/* Time */}
                      <span className="text-emerald-400 font-mono text-sm w-20 pt-0.5 whitespace-nowrap shrink-0">
                        {item.time}
                      </span>

                      {/* Activity & Note */}
                      <div>
                        <p className="text-white text-sm font-medium leading-snug">
                          {item.activity}
                        </p>
                        {item.note && (
                          <p className="text-emerald-200/60 text-xs mt-1 leading-relaxed">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItineraryHighlight;
