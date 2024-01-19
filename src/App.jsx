function App() {
  return (
    <main className="h-svh w-full bg-almostWhite px-10 py-6 font-epilogue">
      <nav className="flex items-center justify-between">
        <div className="flex text-mediumGray">
          <img className="mr-16" src="/images/logo.svg" alt="Logo" />
          <ul className="flex items-center gap-10">
            <li className="flex items-center gap-2">
              Features
              <img
                className="h-full w-max"
                src="/images/icon-arrow-down.svg"
                alt="Arrow Down"
              />
            </li>
            <li className="flex items-center gap-2">
              Company
              <img
                className="h-full w-max"
                src="/images/icon-arrow-down.svg"
                alt="Arrow Down"
              />
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
      <section>
        <div>
          <div>
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div>
            <img src="/images/client-databiz.svg" alt="Databiz" />
            <img src="/images/client-audiophile.svg" alt="Audiophile" />
            <img src="/images/client-meet.svg" alt="Meet" />
            <img src="/images/client-maker.svg" alt="Maker" />
          </div>
        </div>
        <img src="/images/image-hero-desktop.png" alt="Hero" />
      </section>
    </main>
  );
}

export default App;
