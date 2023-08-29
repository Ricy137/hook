import { Web3Storage } from "web3.storage";

export const web3StorageClient = new Web3Storage({
  token: import.meta.env.VITE_WEB3STORAGE_TOKEN,
});

export const getCid = (pointer: string) => {
  const cids = pointer.split("/");
  return cids[0];
};

export const upload = async (metadata: object) => {
  try {
    const blob = new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    });
    const files = [
      new File(["contents-of-file-1"], "plain-utf8.txt"),
      new File([blob], "metadata.json"),
    ];
    const cid = await web3StorageClient.put(files);
    return cid;
  } catch (err) {
    throw err;
  }
};
