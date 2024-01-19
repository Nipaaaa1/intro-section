import HeroDesktop from "/images/image-hero-desktop.png";
import Logo from "/images/logo.svg";
import ArrowDown from "/images/icon-arrow-down.svg";
import Audiophile from "/images/client-audiophile.svg";
import Databiz from "/images/client-databiz.svg";
import Maker from "/images/client-maker.svg";
import Meet from "/images/client-meet.svg";

function App() {
  return (
    <main className="flex h-svh w-full flex-col bg-almostWhite px-10 py-6 font-epilogue">
      <nav className="flex w-full items-center justify-between">
        <div className="flex text-mediumGray">
          <img className="mr-16" src={Logo} alt="Logo" />
          <ul className="flex items-center gap-10">
            <li className="flex items-center gap-2">
              Features
              <img className="h-full w-max" src={ArrowDown} alt="Arrow Down" />
            </li>
            <li className="flex items-center gap-2">
              Company
              <img className="h-full w-max" src={ArrowDown} alt="Arrow Down" />
            </li>
            <li>Carrers</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex items-center gap-10">
          <a className="text-mediumGray" href="#">
            Login
          </a>
          <a
            className="rounded-xl border-2 border-mediumGray px-6 py-2 text-mediumGray"
            href="#"
          >
            Register
          </a>
        </div>
      </nav>
      <section className="flex h-full items-center pl-24 pr-20">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex translate-x-10 translate-y-48 flex-col gap-14">
            <h1 className="text-8xl font-bold text-almostBlack">
              Make
              <br />
              remote work
            </h1>
            <p className="text-xl text-mediumGray">
              Get your team in sync, no matter your location.
              <br />
              Streamline processes, create team rituals, and
              <br />
              watch productivity soar.
            </p>
            <a
              className="w-max rounded-xl bg-almostBlack px-8 py-4 text-xl text-almostWhite"
              href="#"
            >
              Learn More
            </a>
          </div>
          <div className="flex -translate-y-20 translate-x-10 items-center gap-8">
            <img className="h-2/3 w-max" src={Databiz} alt="Databiz" />
            <img className="h-3.4 w-max" src={Audiophile} alt="Audiophle" />
            <img className="h-2/3 w-max" src={Meet} alt="Meet" />
            <img className="h-2/3 w-max" src={Maker} alt="Maker" />
          </div>
        </div>
        <img className="h-max w-2/6" src={HeroDesktop} alt="Desktop Herp" />
      </section>
    </main>
  );
}

export default App;
