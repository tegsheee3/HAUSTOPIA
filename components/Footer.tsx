import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <div className="pl-3 font-extrabold text-2xl">
            HAUSTOPIA
          </div>
        </Link>
        <p className='text-base text-gray-700'>
          HAUSTOPIA GmbH <br />
          Pariser Platz, 10117 Berlin <br/>
          
        </p>
      </div>

      <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
        {footerLinks.map((item) => (
          <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                 
                 <Link
                 key={link.title}
                 href={link.url}
                 className="text-gray-500 flex items-center"
               >
                 <div className="flex items-center gap-1">
                   {link.imageUrl && (
                     <img
                       src={link.imageUrl}
                       alt={link.title}
                       className="w-6 h-6 mr-2"
                     />
                   )}
                   <span>{link.title}</span>
                 </div>
               </Link>
                  
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 Haustopia GmbH</p>

      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
