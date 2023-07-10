import React, { useState } from "react";
import { styled } from "styled-components";

const DarkMode = () => {
  const [colorMode, setColorMode] = useState(false);

  const toggleMode = () => {
    setColorMode((preMode) => !preMode);
  };

  return (
    <>
      <ColorModeStyle colorMode={colorMode}>{colorMode ? "다크모드" : "화이트모드"}</ColorModeStyle>
      <input type="checkbox" value={colorMode} onChange={toggleMode} />
    </>
  );
};

export default DarkMode;

const ColorModeStyle = styled.p.withConfig({
  shouldForwardProp: (prop) => !["colorMode"].includes(prop),
})`
  background-color: ${(props) => (props.colorMode ? "black" : "white")};
  color: ${(props) => (props.colorMode ? "white" : "black")};
`;
