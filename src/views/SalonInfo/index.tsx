import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ContentLine } from "./components/ContentLine";
import { FormattedParagraph } from "./components/FormattedParagraph";
import { Clock, DownArrow, Globe, Phone, Pin } from "../../components/Icons";
import { SalonHeader } from "./components/SalonHeader";
import { TabsContainer } from "./components/TabsContainter";

const SalonInfoWrapper = styled.div`
  padding: 0 15px;
  border-top: solid 20px #f9f9f9;
`;

const SalonDescription = styled(FormattedParagraph)`
  margin-top: 20px;
  color: #2b2b2b;
  line-height: 1.47;
`;

const StyledDownArrow = styled(DownArrow)`
  margin-left: 6px;
  cursor: pointer;
  user-select: none;
`;

function SalonInfo() {
  let { id }: { id: string } = useParams();
  console.log(`Salon ${id} info`);

  return (
    <>
      <SalonHeader />
      <TabsContainer />
      <SalonInfoWrapper>
        <ContentLine icon={<Pin />}>
          Rådmansgatan 46, 113 57 Stockholm
        </ContentLine>
        <ContentLine icon={<Clock />}>
          Öppet till 19:00 idag <StyledDownArrow />
        </ContentLine>
        <ContentLine icon={<Phone />}>08-522 389 20</ContentLine>
        <ContentLine icon={<Globe />}>
          <a href="http://www.salongweb.se">www.salongweb.se</a>
        </ContentLine>
        <SalonDescription>
          Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus
          feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies
          massa, duis nun quis que amet.
        </SalonDescription>
      </SalonInfoWrapper>
    </>
  );
}

export default SalonInfo;
