import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
  const navigate = useNavigate();

  function handleProject() {
    navigate("/contact");
  }
  function handleHome() {
    navigate("/");
  }

  function handleAbout() {
    navigate("/about");
  }

  function handleContact() {
    navigate("/project");
  }
  return (
    <>
      <nav className="bg-background p-4 shadow-md flex justify-between">
        <div className="justify-start">
          <h1 className=" font-montserrat text-2xl">PortRiena</h1>
        </div>
        <div className="justify-end hidden md:block lg:block xl:block">
          <div className="flex gap-2">
            <Button onClick={handleHome} variant="link">
              Main
            </Button>
            <Button onClick={handleAbout} variant="link">
              {" "}
              About
            </Button>
            <Button onClick={handleContact} variant="link">
              {" "}
              Project
            </Button>
          </div>
        </div>
        <div className="justify-center">
          <Button
            className="hidden md:block lg:block xl:block"
            onClick={handleProject}
          >
            Contact Me
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="block md:hidden lg:hidden xl:hidden">
              <RxHamburgerMenu size="2em" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleHome}>Home</DropdownMenuItem>
              <DropdownMenuItem onClick={handleAbout}>About</DropdownMenuItem>
              <DropdownMenuItem onClick={handleContact}>Project</DropdownMenuItem>
              <hr />
              <DropdownMenuItem>
                <Button onClick={handleProject} className="max-w-full w-full">Contact Me</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
}
