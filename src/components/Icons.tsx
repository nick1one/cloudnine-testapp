import React from "react";
import whiteLeftArrow from "../assets/arrow-left-white.svg";
import backIcon from "../assets/arrow-left.svg";
import clock from "../assets/clock.svg";
import downArrow from "../assets/down-arrow.svg";
import filter from "../assets/filter.svg";
import globe from "../assets/globe.svg";
import heart from "../assets/heart.svg";
import phone from "../assets/phone.svg";
import pin from "../assets/pin.svg";
import starFilled from "../assets/star-filled.svg";
import starOutlined from "../assets/star-outlined.svg";

const getImg = (src: any, props: any) => <img src={src} alt="" {...props} />;

export const Pin = (props: any) => getImg(pin, props);
export const Filter = (props: any) => getImg(filter, props);
export const Phone = (props: any) => getImg(phone, props);
export const Globe = (props: any) => getImg(globe, props);
export const Clock = (props: any) => getImg(clock, props);
export const WhiteArrowLeft = (props: any) => getImg(whiteLeftArrow, props);
export const ArrowLeft = (props: any) => getImg(backIcon, props);
export const Heart = (props: any) => getImg(heart, props);
export const DownArrow = (props: any) => getImg(downArrow, props);
export const StarFilled = (props: any) => getImg(starFilled, props);
export const StarOutlined = (props: any) => getImg(starOutlined, props);
