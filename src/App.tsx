import * as SC from "./AppStyled";
import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import Logo from "./components/Logo/Logo";
import Header from "./layouts/Header/Header";

const App: React.FC = () => {
  return (
    <SC.AppStyled>
      <Header>
        <Logo />
        <BurgerBtn />
      </Header>
    </SC.AppStyled>
  );
};

export default App;
