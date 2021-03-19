import React from "react";
import arrowBack from "../assets/arrow-left-white.svg";
import backIcon from "../assets/arrow-left.svg";
import clock from "../assets/clock.svg";
import downArrow from "../assets/down-arrow.svg";
import filter from "../assets/filter.svg";
import globe from "../assets/globe.svg";
import phone from "../assets/phone.svg";
import pin from "../assets/pin.svg";
import heart from "../assets/heart.svg";

export const Pin = () => <img src={pin} alt="" />;
export const Filter = () => <img src={filter} alt="" />;
export const Phone = () => <img src={phone} alt="" />;
export const Globe = () => <img src={globe} alt="" />;
export const Clock = () => <img src={clock} alt="" />;
export const WhiteArrowLeft = () => <img src={arrowBack} alt="" />;
export const ArrowLeft = () => <img src={backIcon} alt="" />;
export const Heart = (props: any) => <img src={heart} alt="" {...props} />;
export const DownArrow = (props: any) => (
  <img src={downArrow} alt="" {...props} />
);
