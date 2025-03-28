import whiteBamsyLogo from "../../Assets/whiteBamsyLogo.png"
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
              <div className="flex space-x-2">
                           <img src={whiteBamsyLogo} alt="Barmsy Logo" className="h-8  text-white" />
                           <div className="text-2xl font-semibold text-white">Barmsy</div>
                           </div>
          <p className="text-[11px] mt-2">Lorem ipsum dolor sit amet</p>
        </div>

      <div className="ml-48 flex space-x-36">
          {/* Company Section */}
          <div>
          <h3 className="font-bold text-[11px]  " >COMPANY</h3>
          <ul className="mt-5 space-y-1 text-xs">
            <li>Mission</li>
            <li>Vision</li>
            <li>Explore</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-[11px] ">SUPPORT</h3>
          <ul className="mt-5 space-y-1 text-xs">
            <li>Help</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

         {/* Social & Contact Section */}
         <div>
          <h3 className="font-bold text-[11px] ">SOCIALS</h3>
          <div className="flex items-center space-x-3 mt-5">
            <FaFacebook className="text-sm" />
            <FaInstagram className="text-sm" />
            <FaTiktok className="text-sm" />
            <FaYoutube className="text-sm" />
          </div>
          <p className="mt-2 text-[10px] font-bold">
            <span className="border-b">0816-XXX-XXXX</span> |{" "}
            <a href="#" className="border-b">Email Us</a>
          </p>
        </div>
      </div>

       
      </div>

      {/* Footer Bottom */}
      <div className="mt-20 text-center text-[10px] text-white/80">
        <p>© Barmsy 2025. <span className="mx-2">|</span> Privacy Policy <span className="mx-2">|</span> Terms of Service <span className="mx-2">|</span> Cookie Policy <span className="mx-2">|</span> Contact Information</p>
      </div>
    </footer>
  );
};

export default Footer;
