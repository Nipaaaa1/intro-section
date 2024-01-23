import Logo from "/images/logo.svg";
import ArrowDown from "/images/icon-arrow-down.svg";

const Navigation = () => {
  return (
    <nav className="flex w-full items-center p-5">
      <img className="mr-16 h-full w-max" src={Logo} alt="Logo" />
      <div className="hidden text-mediumGray md:flex">
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
      <div className="ml-auto hidden items-center gap-10 md:flex">
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
      <div className="ml-auto flex h-8 w-12 flex-col justify-between p-1 md:hidden">
        <span className="h-1 w-full rounded-full bg-almostBlack" />
        <span className="h-1 w-full rounded-full bg-almostBlack" />
        <span className="h-1 w-full rounded-full bg-almostBlack" />
      </div>
    </nav>
  );
};

export default Navigation;
