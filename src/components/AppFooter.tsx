import { useState } from 'react';
import ArrowDown from '../assets/arrow-down-white.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import WarnerMediaLogo from '../assets/logo-warnermedia.svg';
import Snapchat from '../assets/snapchat.svg';
import TickTok from '../assets/ticktok.svg';
import Twitch from '../assets/twitch.svg';
import Twitter from '../assets/twitter.svg';
import Youtube from '../assets/youtube.svg';
import './AppFooter.css';

interface FooterLinks {
  [key: string]: string[];
}

const array: FooterLinks = {
  'NBA Organization': [
    'NBA ID',
    'NBA Official',
    'NBA Careers',
    'NBA Fan Code of Conduct',
  ],
  'NBA Initiatives': [
    'NBA Cares',
    'Jr. NBA / Jr. WNBA',
    'NBA Foundation',
    'Social Justice Coalition',
  ],
  'Across The League': [
    'NBA Communications',
    'Lockervision',
    'NBA Transactions',
  ],
  SHOP: [
    'Global Stores',
    'NYC Store',
    'NBA Auctions',
    'NBA Photostore',
  ],
};

const array2 = [
  'Privacy Policy',
  'EEA/UK Privacy Statement',
  'Brazil Privacy Statement',
  'Colorado Consumer Privacy Statement',
  'California Consumer Privacy Statement',
  'Terms of Use',
  'Cookie Policy',
  'Accessibility and Closed Captions',
  'Customer Support',
  'Your Privacy Choices',
];

const socials = [
  {
    name: 'Facebook',
    image: Facebook,
  },
  {
    name: 'Instagram',
    image: Instagram,
  },
  {
    name: 'Snapchat',
    image: Snapchat,
  },
  {
    name: 'TickTok',
    image: TickTok,
  },
  {
    name: 'Twitter',
    image: Twitter,
  },
  {
    name: 'Youtube',
    image: Youtube,
  },
  {
    name: 'Twitch',
    image: Twitch,
  },
];

const AppFooter = () => {
  //
  const [expandedSections, setExpandedSections] = useState<string[]>(
    []
  );

  const handleToggle = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };
  return (
    <footer className="bg-black">
      <div className="max-w-[1440px] lg:p-8 m-auto">
        <section className="flex flex-col mb-6 lg:mb-0 lg:flex-row justify-between">
          {Object.keys(array).map((x, index) => {
            const y = array[x];
            const isExpanded = expandedSections.includes(x);
            return (
              <div key={`fl-${index}`}>
                <button
                  className="flex justify-between px-8 py-4 w-full lg:w-auto lg:px-2 lg:py-3 border-b border-white lg:border-none cursor-pointer"
                  onClick={() => handleToggle(x)}
                >
                  <span className="text-xs text-white font-bold uppercase whitespace-nowrap">
                    {x}
                  </span>
                  <img
                    src={ArrowDown}
                    className={`block lg:hidden ease-out duration-300 transition-all ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    alt="arrow-down"
                  />
                </button>
                <ul
                  className={`px-8 pb-6 lg:px-2 lg:pb-0 ${
                    isExpanded ? 'block' : 'hidden'
                  } lg:block`}
                >
                  {y.map((z, subIdx) => {
                    return (
                      <li
                        key={`fsl-${subIdx}`}
                        className="text-xs text-white leading-[2rem] w-full hover:underline cursor-pointer"
                      >
                        {z}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="hidden lg:block ml-[20%] mr-[1.5rem]">
            <button className="flex px-2 py-3">
              <span className="text-xs text-white font-bold uppercase">
                Subscriptions
              </span>
            </button>
            <ul className="px-2">
              <li className="block w-full">
                <a
                  href="#"
                  className="text-xs text-black bg-amber-400 hover:underline rounded-[4px] leading-[2rem] mt-4 p-1"
                >
                  League Pass
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="text-sm text-white hover:underline cursor-pointer leading-[2rem] whitespace-nowrap mt-4 p-1"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
        </section>
        <hr className="hidden lg:block border-t-1 border-gray-200 my-8"></hr>
        <div className="flex flex-row">
          <section className="">
            <div className="text-xs text-white font-bold mb-4">
              © 2025 NBA Media Ventures, LLC. All rights reserved.
            </div>
            <ul className="flex flex-wrap list-none">
              {array2.map((x, index) => (
                <li
                  key={`fl-${index}`}
                  className="text-xs text-white font-light leading-[1.625] hover:underline"
                >
                  <a href="#" className="relative">
                    {x}
                  </a>
                  {index < array2.length - 1 && (
                    <span className="mx-2">|</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-xs text-white font-light leading-[1.625]">
              If you are having difficulty accessing any content on
              this website, please visit our
              <a href="#" className="relative hover:underline">
                {' '}
                Accessibility page.
              </a>
            </p>
            <div>
              <p className="text-xs text-white font-light leading-[1.625]">
                NBA.com is part of Warner Media, LLC’s Turner Sports
                &amp; Entertainment Digital Network
              </p>
              <img
                className="w-[6rem] mt-3"
                src={WarnerMediaLogo}
                alt="Warner Media Logo"
                title="Warner Media Logo"
              />
            </div>
          </section>
          <section className="flex">
            {socials.map((x, index) => (
              <a
                key={`sm-${index}`}
                href="#"
                className="mr-2"
                target="_blank"
              >
                <img
                  className="w-[1.45rem] mr-[1.25rem] mt-3"
                  src={x.image}
                  alt={`${x.name} Icon Button`}
                  title={`${x.name} Icon Button`}
                />
              </a>
            ))}
          </section>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
