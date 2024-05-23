import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaFigma,
  FaCode,
  FaMobile,
  FaShop,
} from "react-icons/fa6";

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export const skills = [
  {
    title: "Languages",
    languages: [
      {
        icon: "/html-5.png",
        name: "HTML",
      },
      {
        icon: "/css-3.png",
        name: "CSS",
      },
      {
        icon: "/sass.png",
        name: "SASS",
      },
      {
        icon: "/js.png",
        name: "Javascript",
      },
    ],
  },
  {
    title: "Libraries and Frameworks",
    languages: [
      {
        icon: "/physics.png",
        name: "ReactJs",
      },
      {
        icon: "/nextjs-fill-64.webp",
        name: "NextJs",
      },
      {
        icon: "/icons8-redux-48.png",
        name: "Redux",
      },
      {
        icon: "/icons8-tailwind-css-48.png",
        name: "TailwindCss",
      },
    ],
  },
];

export const services = [
  {
    title: "Web development",
    icons: <FaCode />,
    para: "I deliver visually stunning and user-friendly websites to help you establish a strong online presence. Whether it's a simple informational site or a complex e-commerce platform, I provide tailored web development solutions. Using the latest frameworks and technologies, I create responsive,that offer a seamless browsing experience on all devices. ",
  },
  {
    title: "Responsive websites",
    icons: <FaMobile />,
    para: "I deliver visually stunning and user-friendly websites to help you establish a strong online presence. Whether it's a simple informational site or a complex e-commerce platform, I provide tailored web development solutions. Using the latest frameworks and technologies, I create responsive,that offer a seamless browsing experience on all devices. ",
  },
  {
    title: "Ecommerce website",
    icons: <FaShop />,
    para: "I deliver visually stunning and user-friendly websites to help you establish a strong online presence. Whether it's a simple informational site or a complex e-commerce platform, I provide tailored web development solutions. Using the latest frameworks and technologies, I create responsive,that offer a seamless browsing experience on all devices. ",
  },
  {
    title: "Figma to Html/React",
    icons: <FaFigma />,
    para: "I will convert figma design to code with Html,Css or React stunning and user-friendly websites to help you establish a strong online presence. Whether it's a simple informational site or a complex e-commerce platform, I provide tailored web development solutions. Using the latest frameworks and technologies, I create responsive,that offer a seamless browsing experience on all devices. ",
  },
];

export const social_Icons = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/hammad-mughal-455274227/",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/HammadM72050635",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/i.m.hammadmughal/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/hammadmughal648/",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/HammadMugha?tab=repositories",
  },
];

export const projects = [
  {
    img: "/ecommerce_portfolio.png",
    name: "Ecommerce Website",
    source: "https://github.com/HammadMugha/Next_Ecommerce_with_Sanity",
    live: "https://next-ecommerce-with-sanity.vercel.app/",
    desc: "Ecommerce portfolio website with stunning and interactive UI using Nextjs with TailwindCss or Sanity cms if you wan't a source code of this project.. go to github and enjoy.",
  },
  {
    img: "/netflix.png",
    name: "Netflix Clone",
    source: "https://github.com/HammadMugha/Nextjs_Netflix_Clone",
    live: "https://nextjs-netflix-clone-flax.vercel.app/",
    desc: "Netflix Clone website with stunning and interactive UI with User Authentication with next-auth this is big project and I hope you like it using Nextjs with TailwindCss this project is main focus on UI Okay.. I hope you like it if you wan't a source code of this project.. go to github and enjoy.",
  },
  {
    img: "/portfolio.png",
    name: "Agency Website",
    source: "https://github.com/HammadMugha/Portfolio1_nextjs",
    live: "https://next-portfolio-xi-lilac.vercel.app/",
    desc: "Agency portfolio website with stunning and interactive UI using Nextjs with TailwindCss this project is main focus on UI Okay.. I hope you like it if you wan't a source code of this project.. go to github and enjoy.",
  },
  {
    img: "/my_portfolio.png",
    name: "My portfolio",
    source: "https://github.com/HammadMugha/Next_Ecommerce_with_Sanity",
    live: "https://next-ecommerce-with-sanity.vercel.app/",
    desc: "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
  },
  {
    img: "/bearweb.png",
    name: "Benji bear",
    source: "https://github.com/HammadMugha/Next_Ecommerce_with_Sanity",
    live: "https://benjithebear.com/",
    desc: "This is client website made using Html, Css and Javascript.",
  },
  {
    img: "/crypto.png",
    name: "Crypto landingpage",
    source: "https://github.com/HammadMugha/Crypto_landingpage",
    live: "https://crypto-landingpage-lovat.vercel.app/",
    desc: "This is landingpage website made using Nextjs, tailwindcss.",
  },
];
