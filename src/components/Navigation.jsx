import Logo from "/images/logo.svg";
import ArrowDown from "/images/icon-arrow-down.svg";
import iconTodoList from "/images/icon-todo.svg";
import iconCalendar from "/images/icon-calendar.svg";
import iconReminders from "/images/icon-reminders.svg";
import iconPlanning from "/images/icon-planning.svg";
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

  const changeFeatures = () => {
    setFeatures(!features);
  };
  const changeCompany = () => {
    setCompany(!company);
  };
  return (
    <nav className="relative flex w-full items-center p-5">
      <img className="mr-16 h-full w-max" src={Logo} alt="Logo" />
      <div className="hidden text-mediumGray md:flex">
        <ul className="flex items-center gap-10">
          <motion.li>
            <a
              onClick={changeFeatures}
              className="flex items-center gap-2 transition-colors ease-in-out hover:text-black"
              href="#"
            >
              Features
              <img className="h-full w-max" src={ArrowDown} alt="Arrow Down" />
            </a>
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
          </motion.li>
          <motion.li>
            <a
              onClick={changeCompany}
              className="flex items-center gap-2 transition-colors ease-in-out hover:text-black"
              href="#"
            >
              Company
              <img className="h-full w-max" src={ArrowDown} alt="Arrow Down" />
            </a>
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
          </motion.li>
          <li className="transition-colors ease-in-out hover:text-black">
            <a href="#">Carrers</a>
          </li>
          <li className="transition-colors ease-in-out hover:text-black">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
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
      <div className="ml-auto flex h-8 w-12 flex-col justify-between p-1 md:hidden">
        <span className="h-1 w-full rounded-full bg-almostBlack" />
        <span className="h-1 w-full rounded-full bg-almostBlack" />
        <span className="h-1 w-full rounded-full bg-almostBlack" />
      </div>
    </nav>
  );
};

export default Navigation;
