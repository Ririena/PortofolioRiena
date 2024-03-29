import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About: React.FC = () => {
  useEffect(() => {
    aos.init();
  }, []);

  const navigate = useNavigate();

  const handleProject = () => {
    navigate("/project");
  };
  return (
    <>
      <Tabs defaultValue="Me" className="container mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Me">Me</TabsTrigger>
          <TabsTrigger value="Duivion">Duivion</TabsTrigger>
        </TabsList>
        <TabsContent value="Me">
          <Card className="max-w-h" data-aos="fade-up">
            <CardHeader
              className="flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src="/Adlin.jpg"
                className="object-cover object-top rounded-full size-52"
              />
            </CardHeader>
            <hr className="mb-6" />
            <CardContent data-aos="fade-up" data-aos-duration="2000">
              <CardTitle>About</CardTitle>

              <h1 className="mt-8 font-montserrat font-medium">
                Saya Adlin Qaidul Jaisy, saat ini saya seorang pelajar di sebuah
                sekolah kejuruan Negeri di Bandung sebagai Jurusan Rekayasa
                Perangkat Lunak. Untuk Sekarang Saya Lebih Berfokus Pada Front
                End Developer Dengan Ekosistem React JS ataupun PHP Yakni
                Laravel
              </h1>

              <h1 className="mt-4  font-montserrat font-medium">
                Beberapa Tech Stack Yang Saya Kuasai Diantaranya:
              </h1>
              <div className="mt-4 flex-1 font-montserrat font-medium">
                <li>React Js</li>
                <li>Tailwind CSS</li>
                <li>Supabase</li>
                <li>Sequelize, Node Js</li>
              </div>

              <div className="mt-4">
                <h1 className="font-montserrat font-medium">
                  Untuk saat ini, kebanyakan saya mengerjakan personal project
                  sesuai hobi saya dengan rekan rekan Duivion, dengan tujuan
                  untuk meningkatkan logika pemrograman web saya khususnya
                  dibidang Front-end serta kadang kadang saya juga mengerjakan
                  Back-end pembuatan serverless Api.
                </h1>
              </div>
            </CardContent>
            <hr className="p-2" />
            <CardFooter className="flex justify-center items-center">
              <Button
                onClick={handleProject}
                className="max-w-full w-full bg-primary  text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/60"
                variant="outline"
              >
                Lihat Project Saya
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="Duivion">
          <Card className="max-w-h" data-aos="fade-up">
            <CardHeader
              className="flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src="/logo.png"
                className="object-cover object-top rounded-full size-52"
              />
            </CardHeader>
            <hr className="mb-6" />
            <CardContent data-aos="fade-up" data-aos-duration="2000">
              <CardTitle>About</CardTitle>

              <h1 className="mt-8 font-montserrat font-medium">
                Duivion Adalah Sekumpulan Programmer Yang Awalnya itu Dibuat
                Oleh Mas Darmadi Untuk Pair Programming Dengan Satu Sama Lain,
                Dengan Berawal Dari Kursus Yang Diberikana Oleh Salah Satu
                Organisasi Yakni P****** Yang Bergerak Dibidang UMKM.
              </h1>

              <div className="mt-4">
                <h1 className="font-montserrat font-medium">
                  Untuk saat ini, Komunitas Nya Tidak Aktif Lagi Dan Digantikan
                  Dengan Programmer Programmer Potensial Dari SMKN 7 BALEENDAH
                  Yang Awalnya Dibuat Public Sekarang Diubah Menjadi
                  Private(Jatuhnya Malah InnerCircle Sih)
                </h1>
              </div>
            </CardContent>
            <hr className="p-2" />
            <CardFooter className="flex justify-center items-center">
              <Button
                className="max-w-full w-full bg-primary  text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/60"
                variant="outline"
              >
                <a href="https://discord.gg/PUQxGZRC">Masuk Discord</a>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default About;
