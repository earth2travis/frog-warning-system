import styled from 'styled-components';
import {
  H3,
  H4,
  DataIndicator,
  ParSm,
  widthQuery,
  Theme,
  Button,
  Link,
} from '@daohaus/ui';

import { MolochV3Dao } from '@daohaus/moloch-v3-data';
import {
  charLimit,
  formatPeriods,
  formatValueTo,
  fromWei,
  INFO_COPY,
  lowerCaseLootToken,
} from '@daohaus/utils';

import { getNetwork } from '@daohaus/keychain-utils';

import { useMemo } from 'react';
import { DAO_ADDRESS, DAO_CHAIN } from '../utils/constants';

const GovernanceContainer = styled.div`
  .tokens {
    margin-top: 3rem;
  }
  h4 {
    margin-top: 4rem;
  }
`;

const GovernanceCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const TokensHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const DataGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-content: space-between;
  div {
    margin-top: 3rem;
    width: 34rem;

    @media ${widthQuery.sm} {
      min-width: 100%;
    }
  }
`;

const TokenDataGrid = styled(DataGrid)`
  div {
    width: 22.7rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }: { theme: Theme }) => theme.primary.step10};
  :hover {
    text-decoration: none;
  }
`;

const StyledButtonLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`;

type GovernanceSettingsProps = {
  dao: MolochV3Dao;
};

export const GovernanceSettings = ({ dao }: GovernanceSettingsProps) => {
  const daochain = DAO_CHAIN;
  const daoid = DAO_ADDRESS;
  const networkData = useMemo(() => {
    if (!daochain) return null;
    return getNetwork(daochain);
  }, [daochain]);

  const defaultValues = useMemo(() => {
    if (!dao) return null;
    return {
      votingPeriod: dao.votingPeriod,
      votingPeriodUnits: 'seconds',
      gracePeriodUnits: 'seconds',
      gracePeriod: dao.gracePeriod,
      proposalOffering: dao.proposalOffering,
      quorum: dao.quorumPercent,
      minRetention: dao.minRetentionPercent,
      sponsorThreshold: dao.sponsorThreshold,
      newOffering: dao.proposalOffering,
      vStake: dao.sharesPaused,
      nvStake: dao.lootPaused,
    };
  }, [dao]);

  return (
    <GovernanceContainer>
      <GovernanceCardHeader>
        <H3>Governance Settings</H3>
        <StyledButtonLink
          href={`/new-proposal?formLego=UPDATE_GOV_SETTINGS&defaultValues=${JSON.stringify(
            defaultValues
          )}`}
        >
          <Button color='secondary'>Update Governance</Button>
        </StyledButtonLink>
      </GovernanceCardHeader>
      <div className='description'>
        <ParSm>
          <StyledLink
            href='https://moloch.daohaus.fun/configuration/governance-configuration'
            target='_blank'
            rel='noreferrer'
          >
            Review the documenation
          </StyledLink>{' '}
          for additional details on governance settings. Updates to settings
          will go through a proposal.
        </ParSm>
      </div>
      <DataGrid>
        <DataIndicator
          size='sm'
          label='Voting Period'
          data={formatPeriods(dao.votingPeriod)}
          info={INFO_COPY.VOTING_PERIOD}
        />
        <DataIndicator
          size='sm'
          label='Grace Period'
          data={formatPeriods(dao.gracePeriod)}
          info={INFO_COPY.GRACE_PERIOD}
        />
        <DataIndicator
          size='sm'
          label='New Offering'
          data={`${fromWei(dao.proposalOffering)} ${networkData?.symbol}`}
          info={INFO_COPY.NEW_OFFERING}
        />
      </DataGrid>
      <DataGrid>
        <DataIndicator
          size='sm'
          label='Quorum %'
          data={formatValueTo({ value: dao.quorumPercent, format: 'percent' })}
          info={INFO_COPY.QUORUM}
        />
        <DataIndicator
          size='sm'
          label='Min Retention %'
          data={formatValueTo({
            value: dao.minRetentionPercent,
            format: 'percent',
          })}
          info={INFO_COPY.MIN_RETENTION}
        />
        <DataIndicator
          size='sm'
          label='Sponsor Threshold'
          data={`${fromWei(dao.sponsorThreshold)} Voting Tokens`}
          info={INFO_COPY.SPONSOR_THRESHOLD}
        />
      </DataGrid>
    </GovernanceContainer>
  );
};
