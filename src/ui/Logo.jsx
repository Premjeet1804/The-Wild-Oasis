import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const Brand = styled.h2`
color: #2afcdc; 
background-image: -webkit-linear-gradient(45deg, #2afcdc 29%, #5f8dbc 87%); 
background-clip: text; 
-webkit-background-clip: text; 
text-fill-color: transparent; 
-webkit-text-fill-color: transparent;

`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Brand>QuickTrip</Brand>
      {/* <Img src={src} alt="Logo" /> */}
    </StyledLogo>
  );
}

export default Logo;
