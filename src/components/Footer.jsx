import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { FaLinkedin, FaLinkedinIn, FaQuestionCircle } from "react-icons/fa";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="m-8 flex flex-col justify-center items-center">
      <div className="flex  capitalize my-8">
        <div className="w-96 p-2">
          <Link to="/">
            <h1 className="my-4 text-2xl font-bold">Spark</h1>
          </Link>
          <p className="my-2">Simplifying corporate banking and finance</p>
        </div>
        <div className="w-48 p-2">
          <h1 className="my-4 text-xl font-bold">Company</h1>
          <Link to="" className="my-2 block">
            About
          </Link>
          <Link to="" className="my-2 block">
            Career
          </Link>
        </div>
        <div className="w-48 p-2">
          <h1 className="my-4 text-xl font-bold">Products</h1>
          <Link to="" className="my-2 block">
            corporate cards
          </Link>
          <Link to="" className="my-2 block">
            Spark pay
          </Link>
          <Link to="" className="my-2 block">
            Spend Management
          </Link>
        </div>
        <div className="w-48 p-2">
          <h1 className="my-4 text-xl font-bold">Legal</h1>
          <Link to="" className="my-2 block">
            Terms of service
          </Link>
          <Link to="" className="my-2 block">
            Privacy policy
          </Link>
          <Link to="" className="my-2 block">
            SBM T&C for cards
          </Link>
        </div>
        <div className="w-48 p-2">
          <h1 className="my-4 text-xl font-bold">Support</h1>
          <Link to="" className="my-2 flex">
            <AiOutlineMail className="text-2xl" />
            <p className="mx-2 lowercase">test@test.com</p>
          </Link>
          <Link to="" className="my-2 flex">
            <IoIosContact className="text-2xl" />
            <p className="mx-2">contact</p>
          </Link>
          <Link to="" className="my-2 flex">
            <FaQuestionCircle className="text-2xl" />
            <p className="mx-2">Faq</p>
          </Link>
        </div>
      </div>
      <div className="h-32 w-[70%] p-4 flex justify-between items-center border-t-2 border-black ">
        <div>Copyright © 2022. All rights reserved</div>
        <div className="flex">
          <Link to="">
            <AiFillTwitterCircle className="w-12 h-12 m-2 " />
          </Link>
          <Link to="">
            <BsFacebook className="w-10 h-12 m-2 " />
          </Link>
          <Link to="">
            <AiFillInstagram className="w-12 h-12 m-2 " />
          </Link>
          <Link to="">
            <FaLinkedin className="w-10 h-12 m-2 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
