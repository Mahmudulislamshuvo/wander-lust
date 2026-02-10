import HomePageFooter from "@/components/footer/HomePageFooter";
import AiPromptField from "@/components/home/AiPromptField";
import HeroText from "@/components/home/HeroText";
import HomeTravelCard from "@/components/home/HomeTravelCard";
import { getAllTravelPlans } from "@/db/queries";

const HomePage = async () => {
  const data = await getAllTravelPlans();

  console.log(data);

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 relative w-full max-w-7xl mx-auto">
        <HeroText />
        <AiPromptField />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.5s_forwards]">
          {data?.map((plans) => (
            <HomeTravelCard key={plans.slug} plan={plans} />
          ))}
        </div>
      </main>

      <HomePageFooter />
    </>
  );
};

export default HomePage;
