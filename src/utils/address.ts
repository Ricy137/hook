export const shortenAddress = ({
  address,
  preLen = 6,
  sufLen = 4,
}: {
  address: string;
  preLen?: number;
  sufLen?: number;
}) => {
  return `${address.slice(0, preLen)}...${address.slice(-sufLen)}`;
};
