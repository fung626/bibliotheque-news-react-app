import "./AppFooter.css";

interface FooterLinks {
  [key: string]: string[];
}

const array: FooterLinks = {
  "NBA Organization": [
    "NBA ID",
    "NBA Official",
    "NBA Careers",
    "NBA Fan Code of Conduct",
  ],
  "NBA Initiatives": [
    "NBA Cares",
    "Jr. NBA / Jr. WNBA",
    "NBA Foundation",
    "Social Justice Coalition",
  ],
  "Across The League": [
    "NBA Communications",
    "Lockervision",
    "NBA Transactions",
  ],
  SHOP: ["Global Stores", "NYC Store", "NBA Auctions", "NBA Photostore"],
};

const AppFooter = () => {
  return (
    <footer className="bg-black">
      <div className="p-8">
        <section className="flex flex-row justify-between">
          {Object.keys(array).map((x) => {
            const y = array[x];
            return (
              <div>
                <button>
                  <span className="text-xs text-white font-bold">{x}</span>
                </button>
                <ul>
                  {y.map((z) => {
                    return (
                      <li className="text-xs text-white leading-[2rem] w-full hover:underline cursor-pointer">
                        {z}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="ml-[20%] mr-[1.5rem]">
            <button>
              <span className="text-xs text-white font-bold">
                Subscriptions
              </span>
            </button>
            <ul>
              <li className="">
                <a
                  href="#"
                  className="text-sm text-black bg-amber-400 rounded-[4px] mt-4 p-1"
                >
                  League Pass
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="text-sm text-white hover:underline cursor-pointer mt-4 p-1"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default AppFooter;
