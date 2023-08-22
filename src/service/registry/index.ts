import { ProfileDate } from "@pages/Profile/CreateProfile";
import { CustomizedItemData } from "@pages/Profile/CreateProfile/CustomizedItemModal";
import { web3StorageClient } from "@utils/web3Storage";

export const createProfile = async (
  data: ProfileDate,
  customizedItems: CustomizedItemData[]
) => {
  try {
    const metadata = {
      ...data,
      customizedItems: [...customizedItems],
    };
    const blob = new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    });
    const files = [
      new File(["contents-of-file-1"], "plain-utf8.txt"),
      new File([blob], "metadata.json"),
    ];
    const cid = await web3StorageClient.put(files);
    console.log("stored files with cid:", cid);
    return cid;
  } catch (err) {
    console.log(err);
    throw new Error("Error creating profile");
  }
};
