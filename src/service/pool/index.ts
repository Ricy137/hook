import { prepareWriteContract, writeContract } from "wagmi/actions";
import { upload } from "@utils/web3Storage";
import AlloAbi from "@utils/abis/Allo.json";
import { CustomizedItemData } from "@modules/CustomizedItemModal";

export interface PoolData {
  name: string;
  profileId: string;
  description: string;
  eligibility: string;
  applyLink: string;
  managers: string[];
  strategy: string;
  tokenAddress?: string;
  _initStrategyData?: string;
  customizedStrategy: boolean;
  customizedItems?: CustomizedItemData[];
  amount: number;
}

export const ClonableStrategies = [
  {
    label: "Direct Grants Simple V1",
    value: "0xf243619f931c81617EE00bAAA5c5d97aCcC5af10",
  },
  {
    label: "Donation Voting Merkle Distribution V1",
    value: "0xC88612a4541A28c221F3d03b6Cf326dCFC557C4E",
  },
];

export const createPool = async (data: PoolData) => {
  try {
    const cid = await upload(data);
    const {
      profileId,
      strategy,
      _initStrategyData,
      tokenAddress,
      amount,
      managers,
      customizedStrategy,
    } = data;
    const metadata = {
      protocol: 1,
      pointer: `${cid}/metadata.json`,
    };
    const config = await prepareWriteContract({
      address: "0x79536CC062EE8FAFA7A19a5fa07783BD7F792206",
      abi: AlloAbi,
      functionName: customizedStrategy
        ? "createPoolWithCustomStrategy"
        : "createPool",
      // functionName: "createPoolWithCustomStrategy",
      args: [
        profileId,
        strategy,
        _initStrategyData,
        tokenAddress,
        amount,
        metadata,
        [...managers] ?? [],
      ],
      chainId: 44787,
    });
    const { hash } = await writeContract(config);
    return hash;
  } catch (err) {
    console.log(err);
    throw new Error("Error creating pool");
  }
};
