import { Web3Storage } from "web3.storage";

export const web3StorageClient = new Web3Storage({
  token: import.meta.env.VITE_WEB3STORAGE_TOKEN,
});
