import DemoData from "../demo-data.json";

const AppContent = () => {
  return (
    <div className="py-2">
      <div className="px-6 py-6 bg-white">
        <div className="border-b-1 border-gray-200 pb-6 mb-6">
          <h3 className="text-xs text-gray-400 font-normal uppercase mb-2">
            Top Stories
          </h3>
          <h1 className="text-3xl text-black font-bold font-knockout leading-[.8]">
            {DemoData.article.title}
          </h1>
          <p className="mt-4">{DemoData.article.sub_title}</p>
        </div>
        <div className="pb-2">
          <div className="flex justify-between">
            <p className="text-sm text-black font-normal">
              From {DemoData.article.from}
            </p>
            <p className="text-sm text-gray-400 font-normal">
              Updated on {DemoData.article.updated_on}
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-3/4"></div>
          <div className="w-1/4 pb-2 hidden lg:block">
            <aside>
              <h4 className="text-xs text-black font-bold font-knockout uppercase border-b-1 border-gray-200 pb-2">
                Related
              </h4>
              <ul className="flex flex-col list-none">
                {DemoData.article.related.map((x) => {
                  return (
                    <li className="border-b-1 border-gray-200 pt-4 pb-2 mb-2">
                      <a href="#">
                        <article>
                          <div>
                            <h3 className="">
                              <span className="text-black font-bold font-knockout">
                                {x.title}
                              </span>
                            </h3>
                            <p className="py-2">
                              <span className="text-xs text-cblue">
                                {x.details}
                              </span>
                            </p>
                          </div>
                        </article>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppContent;
