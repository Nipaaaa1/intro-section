import Audiophile from "/images/client-audiophile.svg";
import Databiz from "/images/client-databiz.svg";
import Maker from "/images/client-maker.svg";
import Meet from "/images/client-meet.svg";
import Navigation from "./components/Navigation";

function App() {
  return (
    <main className="flex h-svh w-full flex-col bg-almostWhite font-epilogue md:px-10 md:py-6">
      <Navigation />
      <div className="bg-heroMobile h-2/3 w-full bg-contain bg-center bg-no-repeat md:hidden" />
      <section className="flex h-full flex-col items-center md:ml-24 md:mr-20 md:flex-row md:p-16">
        <div className="flex size-full flex-col items-center gap-10 px-5 pt-5 text-center md:items-start md:px-0 md:pt-36 md:text-left">
          <h1 className="w-full text-3xl font-semibold md:w-[70%] md:text-8xl">
            Make remote work
          </h1>
          <p className="w-full text-mediumGray md:w-[58%] md:text-xl">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <a
            className="w-max rounded-xl bg-almostBlack px-6 py-3 text-sm text-almostWhite md:px-10 md:py-4 md:text-xl"
            href="#"
          >
            Learn More
          </a>
          <div className="flex h-6 w-full items-center justify-evenly md:mt-auto md:justify-start md:gap-10">
            <img className="h-4/5 w-max md:h-max" src={Databiz} alt="Databiz" />
            <img
              className="h-4/5 w-max md:h-max"
              src={Audiophile}
              alt="Audiophile"
            />
            <img className="h-4/5 w-max md:h-max" src={Meet} alt="Meet" />
            <img className="h-4/5 w-max md:h-max" src={Maker} alt="Maker" />
          </div>
        </div>
        <div className="bg-heroDesktop hidden h-full w-2/3 bg-contain bg-right bg-no-repeat md:block" />
      </section>
    </main>
  );
}

export default App;
