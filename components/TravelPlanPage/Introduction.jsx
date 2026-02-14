import {
  TowerControl,
  Frame,
  Crown,
  Croissant,
  Lightbulb,
  Wallet,
} from "lucide-react";

// extra for mangement of colors and icons in the grid features
const featureStyles = [
  {
    bg: "bg-emerald-50",
    hoverBg: "group-hover:bg-emerald-100",
    iconColor: "text-emerald-600",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
  },
  {
    bg: "bg-orange-50",
    hoverBg: "group-hover:bg-orange-100",
    iconColor: "text-orange-500",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-800",
  },
  {
    bg: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-100",
    iconColor: "text-blue-500",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800",
  },
  {
    bg: "bg-purple-50",
    hoverBg: "group-hover:bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    bg: "bg-yellow-50",
    hoverBg: "group-hover:bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    bg: "bg-rose-50",
    hoverBg: "group-hover:bg-rose-100",
    iconColor: "text-rose-500",
  },
];
const featureIcons = [TowerControl, Frame, Crown, Croissant, Lightbulb, Wallet];

const Introduction = ({ data }) => {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
        <div className="max-w-2xl">
          <span className="text-emerald-600 font-medium tracking-wide uppercase text-xs mb-3 block">
            Destination Highlights
          </span>
          <h2 className="text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-6">
            Essentials for your <br />
            Parisian Journey
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            We've curated the must-see landmarks, crucial travel tips, and
            culinary experiences into one seamless plan. Don't just visit
            Paris—live it.
          </p>
        </div>
      </div>

      {/* <!-- Grid Features (Mapped from Attractions, Tips, Food) --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {data?.map((item, index) => {
          const style = featureStyles[index % featureStyles.length];
          const Icon = featureIcons[index % featureIcons.length];

          return (
            <div key={index} className="group">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-2xl mb-6 transition-colors ${style.bg} ${style.hoverBg}`}
              >
                <Icon className={`w-6 h-6 ${style.iconColor}`} />
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium text-slate-900 tracking-tight">
                  {item.activity}
                </h3>

                {/* Rating conditional */}
                {typeof item.rating === "number" && (
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${style.badgeBg} ${style.badgeText}`}
                  >
                    {item.rating} ★
                  </span>
                )}
              </div>

              <p className="text-lg text-slate-500 leading-relaxed">
                {item.note}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Introduction;
