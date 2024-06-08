import Navbar from "./Navbar";
import Terminal from "./terminal/Terminal";

const Hero = () => {
  return (
    <div className="bg-blue-950 min-h-screen">
      <div className="px-6 py-12 flex flex-col gap-10">
        <Navbar />
        <Terminal />
      </div>
    </div>
  );
};

export default Hero;
