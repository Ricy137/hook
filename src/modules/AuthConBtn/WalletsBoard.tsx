import { useCallback } from "react";
import Button from "@components/Button";
import { useConnect } from "wagmi";
import { useModal } from "@components/Modal";

const WalletsBoard: React.FC = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { hideModal } = useModal();
  //TODO: this is too specific, make it abstract
  const handleWalletConnect = useCallback(async () => {
    try {
      await connect({ connector: connectors[1] });
      hideModal();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-24px">
      {connectors.map((connector) => {
        return (
          <Button
            key={connector.id}
            onClick={
              connector.id === "walletConnect"
                ? handleWalletConnect
                : () => connect({ connector })
            }
            disabled={isLoading && pendingConnector?.id === connector.id}
          >
            {connector.name}
          </Button>
        );
      })}
    </div>
  );
};

export default WalletsBoard;
