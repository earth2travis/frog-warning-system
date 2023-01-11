import { useMemo } from "react";
import styled from "styled-components";
import { getNetwork } from "@daohaus/keychain-utils";

import { ProposalHistoryCard } from "./ProposalHistoryCard";
import {
  buildProposalHistory,
  ProposalHistoryElement,
} from "../utils/historyHelpers";
import { MolochV3Proposal } from "@daohaus/moloch-v3-data";
import { DAO_CHAIN } from "../utils/constants";

const HistoryContainer = styled.div`
  margin-top: 3rem;
`;

type ProposalHistoryProps = {
  proposal?: MolochV3Proposal;
};

export const ProposalHistory = ({ proposal }: ProposalHistoryProps) => {
  const daochain = DAO_CHAIN;
  const historyData: ProposalHistoryElement[] | null = useMemo(() => {
    if (!proposal || !daochain) return null;
    return buildProposalHistory({
      proposal,
      networkData: getNetwork(daochain),
    });
  }, [proposal, daochain]);

  if (!historyData) return null;

  return (
    <HistoryContainer>
      {historyData.map((element) => {
        return (
          <ProposalHistoryCard
            proposal={proposal}
            element={element}
            key={element.title}
          />
        );
      })}
    </HistoryContainer>
  );
};
