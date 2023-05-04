import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/storybookcover.png";
import psale2 from "../assets/novelcover.png";
import psale3 from "../assets/textbookcover.png";
import physbook from "../assets/physicsbook.png"
import physadv from "../assets/physicsadv.png"

import thnovel from "../assets/thriller-novel.png"
import students from "../assets/flyers/flyer3.png"

import product1 from "../assets/storybookcover.png";
import product2 from "../assets/novelcover.png";
import product3 from "../assets/physicsadv.png"
import product4 from "../assets/thriller-novel.png";
import product5 from "../assets/textbookcover.png";
import product6 from "../assets/physicsbook.png";
import product7 from "../assets/storybookcover.png";
import product8 from "../assets/textbookcover.png";
import product9 from "../assets/novelcover.png";
import product10 from "../assets/physicsadv.png";
import product11 from "../assets/textbookcover.png";
import product12 from "../assets/thriller-novel.png";
import bag1 from "../assets/bag1.jpg"
import bag2 from "../assets/bag2.jpg"
import bag3 from "../assets/bag3.jpg"
import bag4 from "../assets/bag4.jpg"
import bag5 from "../assets/bag5.jpg"


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const ImgArray = [
  {
    id: 1,
    attributes: {
      url: product1,
      name: "Story Book"
    }
  },
  {
    id: 1,
    attributes: {
      url: product2,
      name: "Novel"
    }
  },
  {
    id: 1,
    attributes: {
      url: product3,
      name: "Physics"
    }
  },
  {
    id: 1,
    attributes: {
      url: product4,
      name: "Thriller"
    }
  },
]

const heroapi = {
  title: "Top Achievers",
  subtitle: "Are All-Time Learners",
  img: product2,
  btntext: "Explore Books",
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Categories",
  items: [
    {
      id: "0p0x1",
      title: "PAMPHLETS",
      text: "Secondary Level For All Grades.",
      rating: "4.9",
      btn: "Shop Now",
      cover: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "STORY BOOKS",
      text: "Joy Time For Kids",
      rating: "4.5",
      btn: "Shop Now",
      cover: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "NOVELS",
      text: "Thrilling Stories",
      rating: "5+",
      btn: "Shop Now",
      cover: psale2,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "Havard Institute",
  text: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 as Harvard College and named for its first benefactor, the Puritan clergyman John Harvard.",
  btn: "Explore More",
  url: "",
  img: students,
};

const sneaker = {
  heading: "BOOK LAUNCH SEGMENT",
  title: "Iron Sniper By David Healey",
  text: "A thrilling novel of a young man seeking revenge against his town.",
  btn: "Explore More",
  url: "",
  img: thnovel,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Think And Grow Rich",
      text: "Napoleon Hill",
      rating: "5+",
      btn: "Buy Now",
      cover: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "SpongeBob",
      text: "Nicolodean Series",
      rating: "5+",
      btn: "Buy Now",
      cover: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Physics",
      text: "Advanced Level",
      rating: "5+",
      btn: "Buy Now",
      cover: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Biology",
      text: "Advanced Level",
      rating: "5+",
      btn: "Buy Now",
      cover: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Chemistry",
      text: "Advanced Level",
      rating: "5+",
      btn: "Buy Now",
      cover: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "All Subjects G-7",
      text: "Questions And Answers",
      rating: "5+",
      btn: "Buy Now",
      cover: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "All Subjects G-9",
      text: "Questions And Answers",
      rating: "5+",
      btn: "Buy Now",
      cover: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "All Subjects G-9",
      text: "Questions And Answers",
      rating: "5+",
      btn: "Buy Now",
      cover: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },

  ],
};

const bookCategories = [
  {
    category: "Pamphlets",
    cover: product8,
    subCategory: ["All", "G7", "G9", "G12"],
  },
  {
    category: "Motivation",
    cover: product2,
    subCategory: ["All", "Self Help", "Development"],
  },
  {
    category: "Novels",
    cover: product4,
    subCategory: ["All", "Thriller", "Romance", "Adventure", "Mystery", "Literature"],
  },
  {
    category: "Childrens",
    cover: product1,
    subCategory: ["All", "Stories", "Drawings"],
  },
  {
    category: "Primary School",
    cover: product1,
    subCategory: ["All", "English", "Mathematics", "Science", "Social Studies"],
  },
  {
    category: "Secondary School",
    cover: physadv,
    subCategory: ["All", "English", "Mathematics", "Physics", "Biology", "Chemistry", "Geography", "History", "Religious Education", "Civic Education"],
  },
  {
    category: "Tertiary School",
    cover: physbook,
    subCategory: ["All", "English", "Mathematics", "Physics", "Biology", "Chemistry", "Geography", "History", "Religious Education", "Civic Education"],
  },
  {
    category: "Business",
    cover: product5,
    subCategory: ["All", "Admistration", "Accounting", "Finance", "Law", "Economics", "Supply And Purchacing", "Marketing"],
  },
  {
    category: "Entrepreneurship",
    cover: product2,
    subCategory: ["All", "Self Help", "Development"],
  },
  {
    category: "Bibles",
    cover: product1,
    subCategory: ["All", "KJV", "Good News"],
  },
  {
    category: "Cookbooks",
    cover: product6,
    subCategory: ["All", "Restraunt Recipes", "Home Recipes"],
  },
  {
    category: "Languages",
    cover: product9,
    subCategory: ["All", "Zambian Languanges", "French", "Spanish", "Portugies"],
  },
  {
    category: "Black Shoes",
    cover: bag3,
    subCategory: ["All", "Leather", "Coat"],
  },
  {
    category: "School Accesories",
    cover: bag1,
    subCategory: ["All", "Exercise Books", "Pens/Pencils"],
  },
  {
    category: "Bags",
    cover: bag4,
    subCategory: ["All", "Kids", "Teens", "Adults", "Office"]
  },
]


const footerAPI = {
  titles: [{ title: "About bookhub" }, { title: "Get Help" }, { title: "Company" }],
  links: [
    [
      { link: "News" },
      { link: "Careers" },
      { link: "Investors" },
      { link: "Prupose" },
      { link: "Sustainability" },
    ],
    [
      { link: "Order Status" },
      { link: "Shipping & Delivery" },
      { link: "Payment Options" },
      { link: "Gift Card Balance" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Signup" },
      { link: "bookhub Journal" },
      { link: "Send Us Feeback" },
    ],
  ]
};


export { heroapi, footerAPI, bookCategories, sneaker, highlight, toprateslaes, popularsales, ImgArray };
