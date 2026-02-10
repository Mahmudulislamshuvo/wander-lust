import PannerHeader from "@/components/TravelPlanPage/PannerHeader";
import { getTravelPlanBySlug } from "@/db/queries";

const TravelPlanPage = async ({ params: { slug } }) => {
  const data = await getTravelPlanBySlug(slug);

  console.log(data);

  return (
    <>
      <PannerHeader data={data} />
    </>
  );
};

export default TravelPlanPage;
