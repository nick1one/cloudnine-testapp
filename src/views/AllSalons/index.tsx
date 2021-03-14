import React from "react";
import { Headline } from "./components/Headline";
import { PriceDropdownContainer } from "./components/PriceFilterDropdownContainer";
import { SalonsListContainer } from "./components/SalonsListContainer";

const AllSalons = () => (
  <>
    <Headline />
    <PriceDropdownContainer />
    <SalonsListContainer />
  </>
);
export default AllSalons;
