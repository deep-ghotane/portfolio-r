import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutComponent from "./components/AboutComponent";
import BannerComponent from "./components/BannerComponent";
import ContactCopmonent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import HeroComponent from "./components/HeroComponent";
import NavComponent from "./components/NavComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import SkillsComponent from "./components/SkillsComponent";
import DefaultLayout from "./components/DefaultLayout";
import Layout2 from "./components/layout2";

function App() {
  return (
    <>
      <Routes>
        {/* hero */}
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HeroComponent />
            </DefaultLayout>
          }
        />

        {/* skills */}
        <Route
          path="/skills"
          element={
            <DefaultLayout>
              <SkillsComponent />
            </DefaultLayout>
          }
        />

        {/* projects */}
        <Route
          path="/projects"
          element={
            <DefaultLayout>
              <ProjectsComponent />
            </DefaultLayout>
          }
        />

        {/* about me */}
        <Route path="" element={<Layout2 />}>
          <Route path="/about" element={<AboutComponent />} />
          {/* Contact */}
          <Route path="/contact" element={<ContactCopmonent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
