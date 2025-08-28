import { Route, Routes } from "react-router-dom";
import * as SC from "./AppStyled";
import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import Logo from "./components/Logo/Logo";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { lazy, Suspense, useEffect, useState } from "react";
import BurgerPortal from "./components/Portal/Portal";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { IFormValues } from "./utils/types";
import Footer from "./layouts/Footer/Footer";
import LinksList from "./components/LinksList/LinksList";
import SocNet from "./components/SocNet/SocNet";
import { useToggleMenu } from "./hooks/useToggleMenu";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const SubscribePage = lazy(() => import("./pages/SubscribePage/SubscribePage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App: React.FC = () => {
  const [order, setOrder] = useState<IFormValues | null>(null);

  const { isMenu, toggleMenu } = useToggleMenu();

  const orderSubmit = (orderData: IFormValues) => {
    setOrder(orderData);
  };

 useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenu]);

  console.log(order);

  return (
    <SC.AppStyled>
      <Header>
        <Logo location="header" />
        <BurgerBtn toggleMenu={toggleMenu} isMenu={isMenu}/>
      </Header>
      {isMenu && (
        <BurgerPortal>
          <BurgerMenu />
        </BurgerPortal>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage orderSubmit={orderSubmit} />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="subscribe" element={<SubscribePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer>
        <SC.FooterFlexCon>
          <Logo location="footer" />
          <LinksList location="footer" />
        </SC.FooterFlexCon>
        <SocNet />
      </Footer>
    </SC.AppStyled>
  );
};

export default App;
