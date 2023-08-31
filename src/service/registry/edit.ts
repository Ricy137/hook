import { useContractWrite } from "wagmi";
import { useShowToast } from "@components/Toast";
import RegistryAbi from "@utils/abis/Registry.json";

export const useUpdateName = () => {
  const currentUrl = window.location.href;
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
      if (!writeAsync) throw new Error("Error creating profile");
      let res = await writeAsync({
        args: [currentUrl.split("/")[5], newName],
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
