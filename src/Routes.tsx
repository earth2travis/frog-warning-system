import { DHLayout, useDHConnect } from "@daohaus/connect";
import { Routes as Router, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Members } from "./pages/Members";
import { Proposals } from "./pages/Proposals";
import { Treasury } from "./pages/Treasury";
import { Operations } from "./pages/Operations";
import { Trading } from "./pages/Trading";
import { Settings } from "./pages/Settings";
import { MolochV3DaoProvider } from "@daohaus/moloch-v3-context";
import Member from "./pages/Member";
import { ConvertShares } from "./pages/ConvertShares";
import { HeaderAvatar } from "./components/HeaderAvatar";
import {
  DAO_ADDRESS,
  DAO_CHAIN,
  DAO_NAME,
  SAFE_ADDRESS,
} from "./utils/constants";
import ProposalDetails from "./pages/ProposalDetails";
import NewProposal from "./pages/NewProposal";
import RageQuit from "./pages/RageQuit";
import { TXBuilder } from "@daohaus/tx-builder";

export const Routes = () => {
  const { pathname } = useLocation();
  const { address, provider } = useDHConnect();

  return (
    <DHLayout
      pathname={pathname}
      navLinks={[
        { label: "Home", href: "/" },
        { label: "Proposals", href: "/proposals" },
        { label: "Members", href: "/members" },
        { label: "Treasury", href: "/treasury" },
        { label: "Operations", href: "/operations" },
        { label: "Trading", href: "/trading" },
        { label: "Settings", href: "/settings" },
      ]}
      leftNav={<HeaderAvatar name={DAO_NAME} address={DAO_ADDRESS} />}
    >
      <MolochV3DaoProvider
        address={address}
        daoid={DAO_ADDRESS}
        daochain={DAO_CHAIN}
        graphApiKeys={{}}
      >
        <TXBuilder
          provider={provider}
          chainId={DAO_CHAIN}
          daoId={DAO_ADDRESS}
          safeId={SAFE_ADDRESS}
          appState={{}}
        >
          <Router>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/members/:memberAddress" element={<Member />} />
            <Route path="/proposals" element={<Proposals />} />
            <Route path="proposals/:proposalId" element={<ProposalDetails />} />
            <Route path="new-proposal" element={<NewProposal />} />
            <Route path="/treasury" element={<Treasury />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/convert" element={<ConvertShares />} />
            <Route path="members/ragequit" element={<RageQuit />} />
          </Router>
        </TXBuilder>
      </MolochV3DaoProvider>
    </DHLayout>
  );
};
