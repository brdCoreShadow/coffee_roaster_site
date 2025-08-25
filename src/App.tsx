import { Route, Routes } from "react-router-dom";
import * as SC from "./AppStyled";
import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import Logo from "./components/Logo/Logo";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const SubscribePage = lazy(() => import("./pages/SubscribePage/SubscribePage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App: React.FC = () => {
  return (
    <SC.AppStyled>
      <Header>
        <Logo />
        <BurgerBtn />
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="subscribe" element={<SubscribePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </SC.AppStyled>
  );
};

export default App;
