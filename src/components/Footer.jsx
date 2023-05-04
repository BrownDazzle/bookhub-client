import styles from "../style";

import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`flex justify-center items-center sm:py-16 py-6 px-20 flex-col  bg-[#f02d34]`}>
    <div className={`flex justify-center items-start md:flex-row flex-row mb-8 w-full pl-10`}>
      <div className=" flex flex-col justify-start mr-5 w-[50%] md:w-full">
        <div className="flex flex-row justify-between items-center w-full ml-1">
          <h6 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[32px] md:text-[24] text-white ss:leading-[100.8px] leading-[75px]">
            bookhub
          </h6>
        </div>

        <p className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] mt-1`}>
          Wide selection of books across different genres such as academics,fiction, non-fiction, self-help, and more. With a diverse collection and community-driven features, Bookhub is a great destination for book lovers looking to discover their next read.
        </p>
      </div>

      <div className="w-[50%] md:w-full flex flex-row justify-end flex-wrap md:mt-0 mt-4 px-10 ">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 mx-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal  text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-2" : "mb-0"
                    }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center flex-col-reverse pt-6 border-t-[1px] border-t-[#fff]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 ActsCloud Inc. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 mb-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
