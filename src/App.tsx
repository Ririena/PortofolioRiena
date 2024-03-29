import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
const withLayout = (LayoutComponent: any, ChildComponent: any) => {
  return (props: any) => (
    <LayoutComponent>
      <ChildComponent {...props}></ChildComponent>
    </LayoutComponent>
  );
};

const HomeWithLayout = withLayout(Layouts, Home);
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeWithLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
