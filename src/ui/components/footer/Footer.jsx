import image1 from "./icons/footer-image-1.svg";
import image2 from "./icons/footer-image-2.svg";
import image3 from "./icons/footer-image-3.svg";
import PayPal from "./icons/PayPal-logo.svg";
import Visa from "./icons/visa-logo.svg";
import Amex from "./icons/amex-logo.svg";
import MasterCard from "./icons/mastercard-logo.svg";
import "./Footer.scss";
import Button from "../../buttons/Button";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import Logo from "../Logo";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="bg-grey-light">
        <div className="row">
          <div className="row__boxes">
            <div className="row__box">
              <img className="" src={image1} alt="" />
              <h2>Garden Care</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="row__box">
              <img className="" src={image2} alt="" />
              <h2>Garden Care</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="row__box">
              <img className="" src={image3} alt="" />
              <h2>Garden Care</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className="row__form">
            <h2>Would you like to join our newsletters?</h2>
            <form className="focus-within:ring-primary mb-9 flex w-full rounded-2xl transition-all duration-300 focus-within:ring-1">
              <input
                className="flex-1 rounded-l-2xl bg-white p-4 shadow-sm focus:outline-none"
                type="text"
                placeholder="enter your email address..."
              />
              <Button className="font-second rounded-r-2xl px-11 text-2xl font-bold tracking-wider">
                Join
              </Button>
            </form>
            <p className="text-grey-dark-2 mt-auto text-[14px]">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)
              house to yours!{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary/10 border-primary/30 flex items-center gap-30 border-y-1 p-12">
        <Logo />
        <div className="flex items-center gap-4">
          <HiOutlineLocationMarker className="text-primary text-5xl" />
          <span>
            70 West Buckingham Ave.
            <br /> Farmingdale, NY 11735
          </span>
        </div>
        <div className="flex items-center gap-4">
          <HiOutlineMail className="text-primary text-5xl" />
          <a href="mailto:contact@greenshop.com">contact@greenshop.com</a>
        </div>
        <div className="flex items-center gap-4">
          <LuPhoneCall className="text-primary text-5xl" />
          <span>+88 01911 717 490</span>
        </div>
      </div>
      <div className="bg-grey-light flex gap-77 px-12 py-10">
        <div>
          <ul className="footer__list">
            <li>Account</li>
            <li>My Account</li>
            <li>Our stores</li>
            <li>Contact us</li>
            <li>Career</li>
            <li>Specials</li>
          </ul>
        </div>
        <div>
          <ul className="footer__list">
            <li>Help & Guide</li>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>Product Policy</li>
            <li>How to Return</li>
          </ul>
        </div>
        <div>
          <ul className="footer__list">
            <li>Categories</li>
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="flex flex-col gap-15">
          <div className="footer__social">
            <h2 className="mb-6">Social Media</h2>
            <div className="flex gap-8">
              <div className="footer__social__icon">
                <FaFacebookF />
              </div>
              <div className="footer__social__icon">
                <FiInstagram />
              </div>
              <div className="footer__social__icon">
                <FaXTwitter />
              </div>
              <div className="footer__social__icon">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="footer__social">
            <h2>We Accept</h2>
            <div className="flex gap-8">
              <img src={PayPal} alt="PayPal logo" />
              <img src={MasterCard} alt="Master Card logo" />
              <img src={Visa} alt="Visa logo" />
              <img src={Amex} alt="American Express logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-primary/20 text-grey-dark/60 border-t-1 py-8 text-center text-2xl font-semibold">
        &copy; 2025 made by NEVO {"<3"}
      </div>
    </footer>
  );
}
