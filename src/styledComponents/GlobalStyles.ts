import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
//font-family: "PT Serif", serif;
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');
//font-family: "Roboto Serif", serif;
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
// font-family: "Work Sans", sans-serif;
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap');
//font-family: "Cinzel Decorative", serif;
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
html{
    font-size:62.5%;
}
body{
    background-color: #12121b;
}
`;
export default GlobalStyles;
