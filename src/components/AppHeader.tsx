import ArrowDown from "../assets/arrow-down-black.svg";
import AppLogo from "../assets/logo-nba.svg";
import NavIcon from "../assets/nav-icon.svg";
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
    <div className="fixed z-20 w-full">
      <div className="bg-black px-4 py-4 lg:py-2">
        <div className="flex flex-row">
          <button className="flex flex-col justify-center items-center mx-2">
            <span className="bg-slate-100 block lg:hidden h-[3px] w-6 -translate-y-0.5 opacity-[85]"></span>
            <span className="bg-slate-100 block lg:hidden h-[2.8px] w-6 my-0.5 opacity-[85]"></span>
            <span className="bg-slate-100 block lg:hidden h-[2.6px] w-6 translate-y-0.5 opacity-[85]"></span>
          </button>
          <a className="flex w-[3rem] shrink-0">
            <img src={AppLogo} alt="App Logo" />
          </a>
          <ul className="flex flex-row grow list-none overflow-x-hidden px-2">
            {array1.map((x, index) => (
              <li key={index} className="flex items-center px-2">
                <a href="#">
                  <span className="text-white text-sm font-semibold whitespace-nowrap">
                    {x}
                  </span>
                </a>
              </li>
            ))}
            <li className="w-auto grow"></li>
            <li className="block">
              <a
                href="#"
                className="text-xs text-black bg-amber-400 hover:underline rounded-[4px] leading-[2rem] whitespace-nowrap mt-4 p-1"
              >
                League Pass
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="relative flex items-center px-2 cursor-pointer"
              >
                <span className="text-sm text-white font-semibold whitespace-nowrap">
                  Store
                </span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="relative flex items-center px-2 cursor-pointer"
              >
                <span className="text-sm text-white font-semibold whitespace-nowrap">
                  Tickets
                </span>
              </a>
            </li>
            <li className="flex items-center">
              <button className="relative flex cursor-pointer">
                <img src={NavIcon} />
              </button>
            </li>
          </ul>
          <div className="flex items-center">
            <ul>
              <li>
                <button className="relative flex items-center px-2 cursor-pointer">
                  <span className="text-sm text-white font-semibold whitespace-nowrap">
                    Sign In
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-[3rem] bg-white shadow-lg relative">
        <nav className="relative inline-flex items-center justify-between w-full h-full px-4">
          <ul className="flex flex-row items-center list-none overflow-x-hidden px-2">
            <li className="flex items-center font-bold uppercase mr-2">News</li>
            <div className="w-[1.5px] h-[30px] bg-black mr-2"></div>
            {array2.map((x, index) => (
              <li
                key={index}
                className="relative flex items-center px-2 py-4 group"
              >
                {x.expanable ? (
                  <button className="flex items-center text-black text-sm font-light whitespace-nowrap normal-case cursor-pointer">
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
                <div className="absolute bottom-[2px] left-0 w-full h-[2.5px] bg-transparent group-hover:bg-black"></div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AppHeader;
