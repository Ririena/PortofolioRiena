import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };
  const [isActive, setIsActive] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);

  const images = ["/Ariena.jpg", "/Riena.jpg"];

  const handleImageChange = () => {
    const newIndex = (imageIndex + 1) % images.length;
    setImageIndex(newIndex);
  };

  const containerVariants = {
    active: {
      opacity: 1,
      scale: 1,
    },
    inactive: {
      opacity: 0.5,
      scale: 0.9,
    },
  };

  return (
    <>
      <section className="bg-purple-50 pb-[300px] pt-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="max-w-lg mx-4 text-center md:text-left mb-8 md:mb-0 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="3000"
              initial="inactive"
              animate={isActive ? "active" : "inactive"}
              variants={containerVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsActive(!isActive)}
            >
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hello There 👋
              </h1>
              <h1 className="mt-4 text-2xl sm:text-2xl md:text-4xl text-primary">
                I'm <span className="">Adlin Qaidul Jaisy</span>
              </h1>
              <div className="mt-4">
                <h1 className="font-normal font-montserrat">
                  I am a Front-end developer with more than 2 years of
                  practicing as web developer, I'm familiar with React
                  Framework. Now I learn as a software engineer at SMKN 7
                  BALEENDAH. Feel free to contact me and stay best practice.
                </h1>
              </div>
              <div className="mx-auto mt-4">
                <Button
                  onClick={handleContact}
                  className="max-w-[600px] w-72"
                  size="default"
                >
                  Leave Me A Message (Realtime Fetching)
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="max-w-md"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={handleImageChange}
            >
              <div className="mb-4">
                <Input
                  disabled
                  placeholderAnimation={[
                    "Flip Me",
                    3000,
                    "She Just My Partner",
                    2000,
                    "I Think",
                    1000,
                    "Ariena Maalika💖",
                    1000,
                  ]}
                />
              </div>
              <motion.img
                key={images[imageIndex]}
                src={images[imageIndex]}
                className="rounded-lg object-cover size-[400px] cursor-pointer"
                alt="Adlin Qaidul Jaisy"
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.2, flip: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
