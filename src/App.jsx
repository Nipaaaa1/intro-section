import HeroDesktop from "/images/image-hero-desktop.png";

import Audiophile from "/images/client-audiophile.svg";
import Databiz from "/images/client-databiz.svg";
import Maker from "/images/client-maker.svg";
import Meet from "/images/client-meet.svg";
import Navigation from "./components/Navigation";

function App() {
  return (
    <main className="flex h-svh w-full flex-col bg-almostWhite px-10 py-6 font-epilogue">
      <Navigation />
      <section className="ml-24 mr-20 flex h-full items-center p-16">
        <div className="flex h-full w-full flex-col gap-10 pt-36">
          <h1 className="text-8xl font-semibold">
            Make <br />
            remote work
          </h1>
          <p className="text-xl text-mediumGray">
            Get your team in sync, no matter your location. <br /> Streamline
            processes, create team rituals, and <br /> watch productivity soar.
          </p>
          <a
            className="w-max rounded-xl bg-almostBlack px-10 py-4 text-xl text-almostWhite"
            href="#"
          >
            Learn More
          </a>
          <div className=" mt-auto flex w-auto items-center gap-10">
            <img className="h-max" src={Databiz} alt="Databiz" />
            <img className="h-max" src={Audiophile} alt="Audiophile" />
            <img className="h-max" src={Meet} alt="Meet" />
            <img className="h-max" src={Maker} alt="Maker" />
          </div>
        </div>
        <div className="bg-heroDesktop h-full w-2/3 bg-contain bg-right bg-no-repeat" />
      </section>
    </main>
  );
}

export default App;
