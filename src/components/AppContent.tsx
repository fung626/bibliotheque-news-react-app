/* eslint-disable @typescript-eslint/no-require-imports */
import Markdown from 'react-markdown';
import ReactPlayer from 'react-player';
import rehypeRaw from 'rehype-raw';
import DemoData from '../demo-data.json';
import './AppContent.css';

const getImagePath = (image: string) => {
  return `/assets/${image}`;
};

const AppContent = () => {
  return (
    <div className="py-6">
      <section className="px-6 py-6 my-4 bg-white">
        <div className="border-b-1 border-gray-200 pb-6 mb-6">
          <h3 className="text-xs text-gray-400 font-normal uppercase mb-2">
            Top Stories
          </h3>
          <h1 className="text-3xl text-black font-bold font-knockout leading-[.8]">
            {DemoData.article.title}
          </h1>
          <p className="mt-4">{DemoData.article.sub_title}</p>
        </div>
        <div className="mb-4">
          <div className="flex justify-between flex-wrap">
            <p className="text-sm text-black font-normal whitespace-nowrap">
              From {DemoData.article.from}
            </p>
            <p className="text-sm text-gray-400 font-normal whitespace-nowrap">
              Updated on {DemoData.article.updated_on}
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="content lg:w-3/4 lg:pr-4">
            <div className="player-wrapper">
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=gWpvDJfXXKg"
                width="100%"
                height="100%"
              />
            </div>
            <Markdown rehypePlugins={[rehypeRaw]}>
              {DemoData.article.content.join('')}
            </Markdown>
          </div>
          <div className="w-1/4 pl-4 pb-2 hidden lg:block">
            <aside>
              <h4 className="text-xs text-black font-bold font-knockout uppercase border-b-1 border-gray-200 pb-2">
                Related
              </h4>
              <ul className="flex flex-col list-none">
                {DemoData.article.related.map((x, index) => {
                  return (
                    <li
                      key={index}
                      className="border-b-1 border-gray-200 pt-4 pb-2 mb-2"
                    >
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
      </section>
      <section className="my-4">
        <section className="bg-white block lg:hidden">
          <div className="p-4">
            <div className="flex border-b-1 border-gray-200 pb-3 mb-3">
              <div className="">
                <h1 className="font-bold uppercase">Related</h1>
              </div>
            </div>
            <ul>
              {DemoData.article.related.map((x, index) => {
                return (
                  <li key={index} className="flex">
                    <div className="w-[160px] h-[117px] min-w-[160px]">
                      <figure className="relative overflow-hidden h-full">
                        <img
                          className="object-cover w-full h-full"
                          src={getImagePath(x.image)}
                        />
                      </figure>
                    </div>
                    <div className="px-2 py-1">
                      <div>
                        <a href="#">
                          <header>
                            <h3 className="">
                              <span className="text-black font-bold font-knockout">
                                {x.title}
                              </span>
                            </h3>
                            <p className="py-2">
                              <span className="text-xs text-ellipsis line-clamp-2 overflow-hidden">
                                {x.details}
                              </span>
                            </p>
                          </header>
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <div className="text-xs text-gray-500">
                            {x.time}
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AppContent;
