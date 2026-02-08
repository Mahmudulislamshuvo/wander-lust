import HomePageFooter from "@/components/footer/HomePageFooter";
import AiPromptField from "@/components/home/AiPromptField";
import HeroText from "@/components/home/HeroText";
import HomeTravelCard from "@/components/home/HomeTravelCard";

const HomePage = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 relative w-full max-w-7xl mx-auto">
        <HeroText />
        <AiPromptField />
        <HomeTravelCard />
      </main>

      <HomePageFooter />
    </>
  );
};

export default HomePage;
