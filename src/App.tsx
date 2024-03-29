import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./pages/Home";
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
