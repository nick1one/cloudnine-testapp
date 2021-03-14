import { createGlobalStyle } from "styled-components";

import MillerBannerLight from "./MillerBannerLight.otf";
import HelveticaNeue from "./HelveticaNeue.otf";
import HelveticaNeueLight from "./HelveticaNeue-Light.otf";

export default createGlobalStyle`
  @font-face {
    font-family: 'MillerBanner';
    src: local('MillerBanner'),
    url(${MillerBannerLight}) format('otf');
  }  
  @font-face {
    font-family: 'HelveticaNeue-Light';
    src: local('HelveticaNeueLight'),
    url(${HelveticaNeue}) format('otf');
  }  
  @font-face {
    font-family: 'HelveticaNeue';
    src: local('HelveticaNeue'),
    url(${HelveticaNeueLight}) format('otf');
  }
`;
