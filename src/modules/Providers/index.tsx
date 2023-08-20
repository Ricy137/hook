import { PropsWithChildren } from "react";
import "@celo/react-celo/lib/styles.css";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { celoAlfajores } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { publicClient, chains } = configureChains(
  [celoAlfajores],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: false,
  publicClient,
  connectors: [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "9143f3f7d463e1b951f28e8d460ba579",
      },
    }),
  ],
});
// import Dope from "/dope.svg";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <WagmiConfig config={config}>
      <>{children}</>
    </WagmiConfig>
  );
};

export default Providers;
