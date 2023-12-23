import { Hero } from "../components";

const HomePage = ({ searchParams }: any) => {
  return (
    <div className="lg:w-[90%] m-auto">
      <Hero />
    </div>
  );
};

export default HomePage;
