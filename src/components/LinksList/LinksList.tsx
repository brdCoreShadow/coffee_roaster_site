import * as SC from "./LinksListStyled"

const LinksList:React.FC = () => {
  return (
    <SC.ListStyled>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="about">About Us</a>
      </li>
      <li>
        <a href="subscribe">Create Your Plan</a>
      </li>
    </SC.ListStyled>
  );
};

export default LinksList;
