import Logo from "/images/logo.svg";
import ArrowDown from "/images/icon-arrow-down.svg";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
