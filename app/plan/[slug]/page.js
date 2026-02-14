import Introduction from "@/components/TravelPlanPage/Introduction";
import ItineraryHighlight from "@/components/TravelPlanPage/ItineraryHighlight";
import PannerHeader from "@/components/TravelPlanPage/PannerHeader";
import { getTravelPlanBySlug } from "@/db/queries";

const TravelPlanPage = async ({ params: { slug } }) => {
  const data = await getTravelPlanBySlug(slug);

  const daily_plans = data?.itinerary_section?.daily_plans;
  const allSchedules = daily_plans.flatMap((day) => day.schedule);

  const shuffled = allSchedules.sort(() => Math.random() - 0.5);

  const randomSix = shuffled.slice(0, 6);

  return (
    <>
      <PannerHeader data={data} />
      <Introduction data={randomSix} />
      <ItineraryHighlight data={data?.itinerary_section?.daily_plans} />
    </>
  );
};

export default TravelPlanPage;
