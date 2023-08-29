import { useContractWrite, useAccount } from "wagmi";
import { ProfileDate } from "@pages/Profile/CreateProfile";
import { CustomizedItemData } from "@modules/CustomizedItemModal";
import { web3StorageClient, upload } from "@utils/web3Storage";
import RegistryAbi from "@utils/abis/Registry.json";

export const useCreateProfile = () => {
  const { data, isLoading, isSuccess, write, error } = useContractWrite({
    address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
    abi: RegistryAbi,
    functionName: "createProfile",
    chainId: 44787,
  });

  const uploadIPFS = async (
    data: ProfileDate,
    customizedItems: CustomizedItemData[]
  ) => {
    try {
      const metadata = {
        ...data,
        customizedItems: [...customizedItems],
      };
      const cid = await upload(metadata);
      return cid;
    } catch (err) {
      console.log(err);
      throw new Error("Error creating profile");
    }
  };

  const createProfile = async (
    data: ProfileDate,
    customizedItems: CustomizedItemData[]
  ) => {
    try {
      if (!write) throw new Error("Error creating profile");
      const cid = await uploadIPFS(data, customizedItems);
      let res = await write({
        args: [
          new Date().getTime(),
          data.name,
          {
            protocol: 1,
            pointer: `${cid}/metadata.json`,
          },
          data.owner,
          [...data.members],
        ],
      });
      return res;
    } catch (err) {
      console.log(err);
      throw new Error("Error creating profile");
    }
  };

  return { createProfile, isLoading, isSuccess, data, error };
};
