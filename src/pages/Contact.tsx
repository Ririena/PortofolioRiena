import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { format } from "date-fns";
interface ObjectData {
  title: string;
  content: string;
}

interface MessageData {
  id: number;
  title: string;
  content: string;
  created_at: string;
  // Tambahkan properti lain sesuai kebutuhan
}

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const [messageData, setMessageData] = useState<MessageData[] | null>(null);

  useEffect(() => {
    async function fetchMessage() {
      try {
        const { data, error } = await supabase.from("portofolio").select("*");

        if (error) {
          console.error(error.message);
          throw error;
        }

        setMessageData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    }

    fetchMessage();
  }, []);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const [formData, setFormData] = useState<ObjectData>({
    title: "",
    content: "",
  });

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return format(date, "MMMM, dd, yyyy");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { title, content } = formData;
    try {
      const { data, error } = await supabase
        .from("portofolio")
        .insert([{ title, content }])
        .single();
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        // Bersihkan formulir setelah pengiriman berhasil
        setFormData({ title: "", content: "" });
        navigate(0);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="mt-12 min-h-screen">
      <div className="mx-auto container">
        <div className="flex justify-center items-center">
          <Card className="max-w-[800px] w-full">
            <CardHeader className="">
              <section className="flex justify-between">
                <CardTitle>Contact Form</CardTitle>
                <div className="flex justify-end">
                  <Button variant="destructive" onClick={handleVisible}>
                    {visible ? "Hide" : "Show"}
                  </Button>
                </div>
              </section>
            </CardHeader>

            <hr />
            {visible && (
              <form onSubmit={handleSubmit}>
                <div className="m-6">
                  <label className="font-montserrat font-bold" htmlFor="title">
                    Title:
                  </label>
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Berikan Judul Pesan"
                  />

                  <label
                    className="font-montserrat font-bold"
                    htmlFor="content"
                  >
                    Content:
                  </label>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Enter content"
                    required
                  />
                </div>
                <hr />
                <CardFooter>
                  <Button
                    className="mt-4 max-w-full w-full"
                    variant="ninja"
                    type="submit"
                  >
                    Submit
                  </Button>
                </CardFooter>
              </form>
            )}
          </Card>
        </div>
      </div>

      <div className="mx-auto container">
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-6">
          {/* Tambahkan logika untuk menampilkan data */}
          {messageData ? (
            messageData.map((message, index) => (
              <Card
                key={message.id}
                className="border p-4"
                data-aos="fade-up"
                data-aos-duration={(index + 1) * 800}
              >
                <h2 className="text-lg font-semibold">{message.title}</h2>
                <p className="mt-2">{message.content}</p>
                <hr />
                <CardDescription className="mt-2">
                  {formatDate(message.created_at)}
                </CardDescription>
              </Card>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;
