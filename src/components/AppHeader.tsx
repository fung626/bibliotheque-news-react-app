import ArrowDown from "../assets/arrow-down.svg";
import AppLogo from "../assets/logo-nba.svg";
import "./AppHeader.css";

const array1 = [
  "Game",
  "Schedule",
  "Watch",
  "News",
  "All-Star",
  "Stats",
  "Standings",
  "Teams",
  "Players",
];

const array2 = [
  {
    title: "Home",
    expanable: false,
  },
  {
    title: "Top Stories",
    expanable: false,
  },
  {
    title: "Trade Deadline",
    expanable: false,
  },
  {
    title: "Power Rankings",
    expanable: false,
  },
  {
    title: "MVP Ladder",
    expanable: false,
  },
  {
    title: "Transactions",
    expanable: false,
  },
  {
    title: "Features",
    expanable: true,
  },
  {
    title: "Events",
    expanable: true,
  },
  {
    title: "Key Dates",
    expanable: false,
  },
  {
    title: "Future Starts Now",
    expanable: false,
  },
  {
    title: "More",
    expanable: true,
  },
];

const AppHeader = () => {
  return (
    <div className="fixed w-full">
      <div className="bg-black px-4 md:py-4">
        <div className="flex flex-row">
          {/* <button className="NavHamburger_hamburger__kqDDP NavHamburger_squeeze__F9qaj">
            <span className="NavHamburger_box__r0p_S">
              <span className="NavHamburger_inner__whZdg">
                <span className="NavHamburger_navToggle__nOZPv">
                  Navigation Toggle
                </span>
              </span>
            </span>
          </button> */}
          <a className="flex w-[3rem] shrink-0">
            <img src={AppLogo} alt="App Logo" />
          </a>
          <ul className="flex flex-row list-none overflow-x-hidden px-2">
            {array1.map((x, index) => (
              <li key={index} className="flex items-center px-2">
                <a href="#">
                  <span className="text-white text-sm font-semibold whitespace-nowrap">
                    {x}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div>
            <ul>
              <li>
                <button>Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-[3rem] bg-white shadow-lg relative">
        <nav className="relative inline-flex items-center justify-between w-full h-full px-4">
          <ul className="flex flex-row list-none overflow-x-hidden px-2">
            <li className="flex items-center font-bold uppercase pr-4 mr-2 border-r-1">
              News
            </li>
            {array2.map((x, index) => (
              <li key={index} className="relative flex items-center px-2 group">
                {x.expanable ? (
                  <button className="flex items-center text-black text-sm font-light whitespace-nowrap overflow-visible normal-case cursor-pointer">
                    <span className="mr-2">{x.title}</span>
                    <img
                      src={ArrowDown}
                      className="ease-out duration-300 transition-all group-hover:rotate-180"
                      alt="arrow-down"
                    />
                  </button>
                ) : (
                  <a
                    href="#"
                    className="text-black text-sm font-light whitespace-nowrap"
                  >
                    {x.title}
                  </a>
                )}
                {/* <div className="absolute bottom-[0px] left-0 w-full h-[2px] bg-transparent group-hover:bg-black overflow-visible"></div> */}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AppHeader;
