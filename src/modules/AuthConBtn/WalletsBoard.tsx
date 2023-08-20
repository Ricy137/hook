import Button from "@components/Button";
import { useConnect } from "wagmi";

const WalletsBoard: React.FC = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <div className="flex flex-col gap-y-24px">
      {connectors.map((connector) => {
        return (
          <Button
            key={connector.id}
            onClick={() => connect({ connector })}
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
