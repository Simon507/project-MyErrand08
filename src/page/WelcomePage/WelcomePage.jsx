import React from "react";
import {
  Box,
  Wrapper,
  Link,
  Title,
  Text,
  IMG,
  ImgIcon,
} from "./WelcomePage.Styled";
import img from "../../images/Image.png";
import sprite from "../../images/sprite.svg";

const title = "My card 2";
const description = "Description my card 2";

const WelcomePage = () => {
  return (
    <Box>
      <IMG src={img} alt="photo" height="162" width="162" />
      <Wrapper>
        <ImgIcon>
          <use href={sprite + `#icon-icon-logo`}></use>
        </ImgIcon>
        <Title>Task Pro</Title>
      </Wrapper>
      <Text>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </Text>
      <Link to="/auth/register">Registration</Link>
      <Link to="/auth/login">Log In</Link>
    </Box>
  );
};

export default WelcomePage;
