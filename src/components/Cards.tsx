import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";


import { Button } from "@/components/ui/button";

interface CardsProps {
  image: any;
  title: any;
  description: any;
  icon1: React.ReactElement;
  icon2: React.ReactElement;
}

import { motion } from "framer-motion";
const Cards: React.FC<CardsProps> = (props: any) => {
  return (
    <>
      <motion.main
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} 
        transition={{ duration: 0.3 }} 
      >
        <Card>
          <CardHeader className="max-w-xl w-full">
            <img src={props.image} className="object-cover" />
          </CardHeader>
          <hr />
          <div className="mt-4">
            <CardContent>
              <section className="flex justify-between">
                <div className="justify-start">
                  <CardTitle className="">{props.title}</CardTitle>
                </div>
                <div className="flex justify-end gap-2">
                  <Button size="icon" className="" variant="ghost">
                    {props.icon1}
                  </Button>
                  <Button size="icon" variant="ghost">
                    {props.icon2}
                  </Button>
                </div>
              </section>
              <CardDescription>{props.description}</CardDescription>
            </CardContent>
          </div>
        </Card>
      </motion.main>
    </>
  );
};

export default Cards;
