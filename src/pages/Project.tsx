import * as React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GrMysql } from "react-icons/gr";
import { SiPhp } from "react-icons/si";
import { TbBrandNuxt } from "react-icons/tb";
import Cards from "@/components/Cards";
import { FaReact } from "react-icons/fa";
import aos from "aos";
import "aos/dist/aos.css";
import { SiSupabase } from "react-icons/si";
type Checked = DropdownMenuCheckboxItemProps["checked"];
const Project: React.FC = () => {
  React.useEffect(() => {
    aos.init();
  }, []);
  const [showFront, setShowFront] = React.useState<Checked>(true);
  const [showBack, setShowBack] = React.useState<Checked>(false);
  const [showMobile, setShowMobile] = React.useState<Checked>(false);
  return (
    <>
      <section>
        <div className="container mx-auto min-h-screen">
          <div className="flex justify-between mt-12" data-aos="fade-up">
            <div className="justify-start">
              <h1 className="font-montserrat text-2xl font-bold">
                Portofolio Project
              </h1>
              <p className="mt-2 font-montserrat">
                Beberapa Projek Yang Saya Kerjakan Serta Upcoming Projek
              </p>
            </div>
            <div
              className="justify-end"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="max-w-[400px] w-32" variant="outline">
                    Category
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Category</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showFront}
                    onCheckedChange={setShowFront}
                  >
                    WebApps
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showBack}
                    onCheckedChange={setShowBack}
                    disabled
                  >
                    Api(Comming Soon)
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showMobile}
                    onCheckedChange={setShowMobile}
                    disabled
                  >
                    Mobile(Nothing)
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <section className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              <a href="https://l4tomo.vercel.app/" data-aos="fade-up">
                <Cards
                  image="/L4tomo.png"
                  icon1={<FaReact size="2em" />}
                  icon2={<SiSupabase size="2em" />}
                  title="Letter For Tomorrow"
                  description="Sebuah Aplikasi WebApps Yang Bertujuan Untuk Mengekspresikan Sesuatu Secara Anonim"
                />
              </a>
              <a
                href="https://student-deploy.vercel.app/"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Cards
                  icon1={<TbBrandNuxt size="2em" />}
                  icon2={<SiSupabase size="2em" />}
                  image="/Student.png"
                  title="StudentBooks"
                  description="Aplikasi Webs Sosial Media Untuk Mengeskpresikan Memori Dengan Tujuan Untuk Kelulusan NuxtJs SMKCoding "
                />
              </a>
              <a
                href="https://zaychikuy.000webhostapp.com/"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Cards
                  icon1={<SiPhp size="2em" />}
                  icon2={<GrMysql size="2em" />}
                  image="/Portofolio.png"
                  title="Portofolio 0.1"
                  description="Sebuah Portfolio Yang Ditugaskan Untuk Assignment Dari Pak Arif Dengan Simple CRUD PHP serta MariaDB"
                />
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Project;
