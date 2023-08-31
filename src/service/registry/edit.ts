import { useContractWrite } from "wagmi";
import { useShowToast } from "@components/Toast";
import RegistryAbi from "@utils/abis/Registry.json";

const getProfileId = () => {
  const currentUrl = window.location.href;
  return currentUrl.split("/")[5];
};
export const useUpdateName = () => {
  const showToast = useShowToast();

  const { data, isLoading, isSuccess, writeAsync, error, status } =
    useContractWrite({
      address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
      abi: RegistryAbi,
      functionName: "updateProfileName",
      chainId: 44787,
    });

  const updateProfileName = async (newName: string) => {
    try {
      if (!writeAsync) throw new Error("Error update name");
      const profileId = getProfileId();
      let res = await writeAsync({
        args: [profileId, newName],
      });
      showToast({ content: "Name updated successfully", type: "success" });
    } catch (err) {
      showToast({
        content: err instanceof Error ? err.message : "Failed to update name",
        type: "failed",
      });
    }
  };

  return { updateProfileName, isLoading, isSuccess, data, error, status };
};

export const useUpdateMetadata = () => {
  const showToast = useShowToast();

  const { data, isLoading, isSuccess, writeAsync, error, status } =
    useContractWrite({
      address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
      abi: RegistryAbi,
      functionName: "updateProfileMetadata",
      chainId: 44787,
    });

  const updateMetadata = async (newCID: string) => {
    try {
      if (!writeAsync) throw new Error("Error update meta");
      const profileId = getProfileId();
      let res = await writeAsync({
        args: [profileId, { protocol: 1, pointer: newCID }],
      });
      showToast({ content: "metadata updated successfully", type: "success" });
    } catch (err) {
      showToast({
        content:
          err instanceof Error ? err.message : "Failed to update metadata",
        type: "failed",
      });
    }
  };

  return { updateMetadata, isLoading, isSuccess, data, error, status };
};

export const useAddMembers = () => {
  const showToast = useShowToast();

  const { data, isLoading, isSuccess, writeAsync, error, status } =
    useContractWrite({
      address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
      abi: RegistryAbi,
      functionName: "addMembers",
      chainId: 44787,
    });

  const addMembers = async (members: string) => {
    try {
      if (!writeAsync) throw new Error("Error creating profile");
      const profileId = getProfileId();
      let res = await writeAsync({
        args: [profileId, members],
      });
      showToast({ content: "members added successfully", type: "success" });
    } catch (err) {
      showToast({
        content: err instanceof Error ? err.message : "Failed to add members",
        type: "failed",
      });
    }
  };

  return { addMembers, isLoading, isSuccess, data, error, status };
};

export const useRemoveMembers = () => {
  const showToast = useShowToast();

  const { data, isLoading, isSuccess, writeAsync, error, status } =
    useContractWrite({
      address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
      abi: RegistryAbi,
      functionName: "removeMembers",
      chainId: 44787,
    });

  const removeMembers = async (members: string) => {
    try {
      if (!writeAsync) throw new Error("Error creating profile");
      const profileId = getProfileId();
      let res = await writeAsync({
        args: [profileId, members],
      });
      showToast({ content: "members added successfully", type: "success" });
    } catch (err) {
      showToast({
        content: err instanceof Error ? err.message : "Failed to add members",
        type: "failed",
      });
    }
  };

  return { removeMembers, isLoading, isSuccess, data, error, status };
};
