import { ReactNode } from "react";
import { useAccount } from "wagmi";
import { useModal } from "@components/Modal";
import Button from "@components/Button";
import WalletsBoard from "./WalletsBoard";

const AuthConBtn: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { showModal } = useModal({
    title: "Connect to a Wallet",
    content: <WalletsBoard />,
  });
  const { address } = useAccount();
  if (address) return <>{children}</>;
  return <Button onClick={showModal}>Connect a Wallet</Button>;
};

export default AuthConBtn;
