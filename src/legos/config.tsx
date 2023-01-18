import { CoreFieldLookup } from "@daohaus/form-builder";
import { ProposalExpiry } from "../components/customFields/ProposalExpiry";
import { TributeInput } from "../components/customFields/TributeInput";
import { FieldLegoBase, FormLegoBase } from "@daohaus/utils";
import { SelectApplicant } from "../components/customFields/SelectApplicant";
import { RequestNativeToken } from "../components/customFields/RequestNativeToken";
import { RequestERC20 } from "../components/customFields/RequestERC20";
import { ShamanDeluxe } from "../components/customFields/ShamanDeluxe";
import { TagsInput } from "../components/customFields/TagsInput";
import { FakeMarkdown } from "../components/FakeMarkdown";
import { ProposalOffering } from "../components/customFields/ProposalOffering";
import { DelegateInput } from "../components/customFields/DelegateInput";
import { RagequitToken } from "../components/customFields/RagequitToken";
import { RagequitTokenList } from "../components/customFields/RagequitTokenList";
import { WalletConnectLink } from "../components/customFields/WalletConnectLink";
import { MetadataLink } from "../components/customFields/MetadataLink";
import { SafeSelect } from "../components/customFields/SafeSelect";
import { MultisendActions } from "../components/customFields/MultisendActions";
import { ConvertToken } from "../components/customFields/ConvertToken";
import { DisperseERC20 } from "../components/customFields/DisperseERC20";

export const CustomFields = {
  ...CoreFieldLookup,
  proposalExpiry: ProposalExpiry,
  selectApplicant: SelectApplicant,
  tributeInput: TributeInput,
  requestNativeToken: RequestNativeToken,
  requestERC20: RequestERC20,
  disperseERC20: DisperseERC20,
  shamanPermissionDeluxe: ShamanDeluxe,
  tagsInput: TagsInput,
  fakeMarkdown: FakeMarkdown,
  proposalOffering: ProposalOffering,
  delegateInput: DelegateInput,
  ragequitToken: RagequitToken,
  ragequitTokenList: RagequitTokenList,
  walletConnectLink: WalletConnectLink,
  metadataLink: MetadataLink,
  safeSelect: SafeSelect,
  multisendActions: MultisendActions,
  convertToken: ConvertToken,
};

export type CustomFieldLego = FieldLegoBase<typeof CustomFields>;
export type CustomFormLego = FormLegoBase<typeof CustomFields>;
