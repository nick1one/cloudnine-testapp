import React from "react";
import Select from "react-select";
import { DropdownConfig, PriceIntervalSelected } from "../../../../types";
import { DropDownShevron } from "./DropDownShevron";

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

const components = {
  IndicatorSeparator: () => null,
  DropdownIndicator: () => <DropDownShevron />,
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
