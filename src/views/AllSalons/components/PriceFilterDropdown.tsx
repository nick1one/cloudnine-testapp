import React from "react";
import Select from "react-select";
import styled from "styled-components";
import downArrow from "../../../svg/down-arrow.svg";
import { DropdownConfig, PriceIntervalSelected } from "../../../types";

type DropdownChangeHandler = (a: PriceIntervalSelected) => void;

interface PriceDropdownProps {
  options: DropdownConfig[];
  defaultValue: PriceIntervalSelected;
  onChange: DropdownChangeHandler;
}

const DropdownTextStyle = {
  fontFamily: "HelveticaNeue",
  fontSize: "15px",
  fontWeight: 300,
  color: "#202020",
};

const styles = {
  control: (provided: any, state: any) => ({
    ...provided,
    cursor: "pointer",
    boxShadow: "none",
    borderWidth: 0,
    borderBottomWidth: "1px",
    borderBottomColor: "#b69f58",
    "&:hover": {
      borderBottomColor: "#b69f58",
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    ...DropdownTextStyle,
    marginLeft: "6px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    ...DropdownTextStyle,
    cursor: "pointer",
    backgroundColor: state.isSelected ? "#e7d28a" : "transparent",
  }),
  menu: (provided: any) => ({
    ...provided,
    marginTop: "0",
  }),
};

const DropdownShevron = styled.div`
  width: 42px;
  height: 35px;
  padding-top: 14px;
  text-align: center;
  cursor: pointer;
`;

const components = {
  IndicatorSeparator: () => null,
  DropdownIndicator: () => (
    <DropdownShevron>
      <img src={downArrow} alt="Pick a a price range" />
    </DropdownShevron>
  ),
};

export const PriceDropdown = ({
  options,
  defaultValue,
  onChange,
}: PriceDropdownProps) => {
  const dropDownProps = {
    options,
    ...(!!defaultValue && { defaultValue }),
    onChange,
    isSearchable: false,
    theme: (theme: any) => ({
      ...theme,
      borderRadius: 0,
    }),
    styles,
    components,
  };

  return <Select {...dropDownProps} />;
};
