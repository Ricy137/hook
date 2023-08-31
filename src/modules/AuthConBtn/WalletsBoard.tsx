import { useCallback, useEffect } from "react";
import Button from "@components/Button";
import { useConnect, Connector, useAccount } from "wagmi";
import { useModal } from "@components/Modal";
import { useShowToast } from "@components/Toast";

const WalletsBoard: React.FC = () => {
  const showToast = useShowToast();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect({ chainId: 44787 });
  const { hideModal } = useModal();
  //TODO: this is too specific, make it abstract
  const handleWalletConnect = useCallback(async (connector: Connector) => {
    try {
      await connect({ connector: connector });
      if (connector.id === "walletConnect") {
        hideModal();
      }
    } catch (error) {
      showToast({ type: "failed", content: "failed to connect" });
    }
  }, []);

  useEffect(() => {
    if (!isLoading && pendingConnector) {
      hideModal();
    }
  }, [isLoading, pendingConnector]);

  return (
    <div className="flex flex-col gap-y-24px">
      {connectors.map((connector) => {
        return (
          <Button
            key={connector.id}
            onClick={() => handleWalletConnect(connector)}
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
