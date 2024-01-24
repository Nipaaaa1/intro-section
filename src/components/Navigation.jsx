import Logo from "/images/logo.svg";
import ArrowDown from "/images/icon-arrow-down.svg";
import iconTodoList from "/images/icon-todo.svg";
import iconCalendar from "/images/icon-calendar.svg";
import iconReminders from "/images/icon-reminders.svg";
import iconPlanning from "/images/icon-planning.svg";
import iconMenu from "/images/icon-menu.svg";
import iconCloseMenu from "/images/icon-close-menu.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const itemsAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Navigation = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const changeFeatures = () => {
    setFeatures(!features);
  };
  const changeCompany = () => {
    setCompany(!company);
  };
  const changeMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <nav className="relative flex w-full items-center p-5">
      <img className="mr-16 h-full w-max" src={Logo} alt="Logo" />
      <ul className="hidden items-center gap-10 text-mediumGray md:flex">
        <li>
          <button
            onClick={changeFeatures}
            className="flex items-center gap-2 transition-colors ease-in-out hover:text-black"
          >
            Features
            <img className="h-full w-max" src={ArrowDown} alt="Arrow Down" />
          </button>
          <AnimatePresence>
            {features && (
              <motion.div
                initial={{ scale: 0, opacity: 0, y: -20, borderRadius: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0, borderRadius: 12 }}
                exit={{ scale: 0, opacity: 0, y: -20, borderRadius: 50 }}
                className="absolute top-[80%] -ml-12 origin-top-right bg-white p-5 shadow-xl"
              >
                <ul className="flex flex-col gap-3 text-sm">
                  <li className="flex items-center gap-3">
                    <img
                      className="h-full w-max"
                      src={iconTodoList}
                      alt="TodoList Icon"
                    />
                    <a href="#">TodoList</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      className="h-full w-max"
                      src={iconCalendar}
                      alt="Calendar Icon"
                    />
                    <a href="#">Calendar</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      className="h-full w-max"
                      src={iconReminders}
                      alt="Reminders Icon"
                    />
                    <a href="#">Reminders</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      className="h-full w-max"
                      src={iconPlanning}
                      alt="Planning Icon"
                    />
                    <a href="#">Planning</a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        <li>
          <button
            onClick={changeCompany}
            className="flex items-center gap-2 transition-colors ease-in-out hover:text-black"
            href="#"
          >
            Company
            <img className="h-full w-max" src={ArrowDown} alt="Arrow Down" />
          </button>
          <AnimatePresence>
            {company && (
              <motion.div
                initial={{ scale: 0, opacity: 0, y: -20, borderRadius: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0, borderRadius: 12 }}
                exit={{ scale: 0, opacity: 0, y: -20, borderRadius: 50 }}
                className="absolute top-[80%] origin-top-left bg-white p-5 shadow-xl"
              >
                <ul className="flex flex-col gap-3 text-sm">
                  <li>
                    <a href="#">History</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        <li className="transition-colors ease-in-out hover:text-black">
          <a href="#">Carrers</a>
        </li>
        <li className="transition-colors ease-in-out hover:text-black">
          <a href="#">About</a>
        </li>
      </ul>
      <div className="ml-auto hidden items-center gap-10 md:flex">
        <a
          className="text-mediumGray transition-colors ease-in-out hover:text-almostBlack"
          href="#"
        >
          Login
        </a>
        <a
          className="rounded-xl border-2 border-mediumGray px-6 py-2 text-mediumGray transition-colors ease-in-out hover:border-almostBlack hover:text-almostBlack"
          href="#"
        >
          Register
        </a>
      </div>
      <img
        onClick={changeMobileMenu}
        className="ml-auto md:hidden"
        src={iconMenu}
        alt="Menu Icon"
      />
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-screen bg-slate-900/50"
          >
            <div className="absolute right-0 top-0 z-10 flex h-screen w-2/3 flex-col bg-almostWhite p-5 text-mediumGray">
              <img
                onClick={changeMobileMenu}
                className="size-max place-self-end"
                src={iconCloseMenu}
                alt="Close Menu Icon"
              />
              <motion.ul className="flex flex-col gap-4">
                <li onClick={changeFeatures} className="flex flex-col gap-3">
                  <button className="flex items-center gap-3" href="#">
                    Features
                    <img src={ArrowDown} alt="Arrow Down Icon" />
                  </button>
                  <AnimatePresence>
                    {features && (
                      <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-4 pl-5"
                      >
                        <li className="flex items-center gap-3">
                          <img
                            className="h-full w-max"
                            src={iconTodoList}
                            alt="TodoList Icon"
                          />
                          <a href="#">TodoList</a>
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            className="h-full w-max"
                            src={iconCalendar}
                            alt="Calendar Icon"
                          />
                          <a href="#">Calendar</a>
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            className="h-full w-max"
                            src={iconReminders}
                            alt="Reminders Icon"
                          />
                          <a href="#">Reminders</a>
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            className="h-full w-max"
                            src={iconPlanning}
                            alt="Planning Icon"
                          />
                          <a href="#">Planning</a>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li onClick={changeCompany} className="flex flex-col gap-3">
                  <button className="flex items-center gap-3" href="#">
                    Company <img src={ArrowDown} alt="Arrow Down Icon" />
                  </button>
                  <AnimatePresence>
                    {company && (
                      <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-4 pl-5"
                      >
                        <li className="flex items-center gap-3">
                          <a href="#">History</a>
                        </li>
                        <li className="flex items-center gap-3">
                          <a href="#">Our Team</a>
                        </li>
                        <li className="flex items-center gap-3">
                          <a href="#">Blog</a>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li>Careers</li>
                <li>About</li>
                <a className="w-full py-2 text-center" href="#">
                  Login
                </a>
                <a
                  className="w-full rounded-xl border-2 border-mediumGray py-2 text-center"
                  href="#"
                >
                  Register
                </a>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
