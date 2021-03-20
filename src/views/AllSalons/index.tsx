import React, { ReactElement } from "react";
import { ALL_SALONS_TITLE } from "../../constants";
import { Headline } from "./components/Headline";
import { PriceDropdownContainer } from "./components/PriceFilter/PriceFilterDropdownContainer";
import { SalonsListContainer } from "./components/SalonsListContainer";

const AllSalons = (): ReactElement => (
  <>
    <Headline title={ALL_SALONS_TITLE} />
    <PriceDropdownContainer />
    <SalonsListContainer />
  </>
);
export default AllSalons;
