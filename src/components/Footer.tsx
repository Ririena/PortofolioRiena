import { Button } from "./ui/button";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { GoRepo } from "react-icons/go";

const Footer: React.FC = () => {
  return (
    <footer className="shadow-xl py-6 w-full bg-white mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg">
          <p className="font-light font-montserrat">
            &copy; 2024 Ayrienetsu &amp; All Rights Reserved &amp;{" "}
            <span>Duivion</span>
          </p>
        </div>
        <div className="flex space-x-4">
          <Button className="" variant="ninja">
            <a href="https://github.com/Ririena">
              Github
            </a>
            <div className="mr-2"></div>
            <FiGithub />
          </Button>
          <Button className="">
            <a href="https://github.com/Ririena/PortofolioRiena.git">Repo</a>
            <div className="mr-2"></div>
            <GoRepo />
          </Button>
          <Button className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] ">
            <a
              href="https://www.instagram.com/elzaychikk?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw=="
            >
              Instagram
            </a>
            <div className="mr-2"></div>
            <FiInstagram />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
