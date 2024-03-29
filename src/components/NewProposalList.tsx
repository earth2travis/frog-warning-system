import { Link as RouterLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri/index.js";
import styled from "styled-components";
import { Bold, border, DataSm, ParMd, Tabs, Theme } from "@daohaus/ui";

import { CustomFormLego } from "../legos/config";
import { DAO_ADDRESS, DAO_CHAIN } from "../utils/constants";

const ListContainer = styled.div`
  margin-top: 2.5rem;
`;

const ListItemContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-top: 1px ${({ theme }: { theme: Theme }) => theme.secondary.step6}
    solid;
`;

const ListItemLink = styled(RouterLink)`
  text-decoration: none;
  width: 100%;
  color: unset;
  :hover {
    text-decoration: none;
  }
`;

const ListItemHoverContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: ${border.radius};

  :hover {
    background: 1px ${({ theme }: { theme: Theme }) => theme.secondary.step3};
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  word-wrap: break-word;
  max-width: 39rem;
`;

const StyledIcon = styled(RiArrowRightSLine)`
  fill: ${({ theme }: { theme: Theme }) => theme.primary.step9};
  font-size: 3rem;
`;

type NewProposalListProps = {
  basicProposals: CustomFormLego[];
  advancedProposals: CustomFormLego[];
};

const ProposalList = ({ proposals }: { proposals: CustomFormLego[] }) => {
  const daochain = DAO_CHAIN;
  const daoid = DAO_ADDRESS;

  return (
    <div>
      {proposals.map((proposalLego: CustomFormLego) => (
        <ListItemContainer key={proposalLego.id}>
          <ListItemLink to={`/new-proposal?formLego=${proposalLego.id}`}>
            <ListItemHoverContainer>
              <ListItem>
                <ParMd>
                  <Bold>{proposalLego.title}</Bold>
                </ParMd>
                <DataSm>{proposalLego.description}</DataSm>
              </ListItem>
              <StyledIcon />
            </ListItemHoverContainer>
          </ListItemLink>
        </ListItemContainer>
      ))}
    </div>
  );
};

export const NewProposalList = ({
  basicProposals,
  advancedProposals,
}: NewProposalListProps) => {
  return (
    <ListContainer>
      <Tabs
        tabList={[
          {
            label: "Basics",
            Component: () => <ProposalList proposals={basicProposals} />,
          },
          // {
          //   label: 'Advanced',
          //   Component: () => <ProposalList proposals={advancedProposals} />,
          // },
        ]}
      />
    </ListContainer>
  );
};
