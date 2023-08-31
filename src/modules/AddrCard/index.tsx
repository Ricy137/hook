import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Button from "@components/Button";
import ToolTip from "@components/Tooltip";
import useInTransaction from "@hooks/useIntransaction";
import { getProfileByOwner } from "@service/lens";

const AddrCard: React.FC<{ address: string }> = ({ address }) => {
  const [handle, setHandle] = useState<string | null>(null);
  const getProfile = useCallback(async () => {
    const tempHandle = await getProfileByOwner(address);
    setHandle(tempHandle);
  }, [setHandle]);
  const { loading, error, handleExecAction } = useInTransaction(getProfile);
  useEffect(() => {
    handleExecAction();
  }, []);

  return (
    <div className="p-24px sm:p-40px flex flex-col items-center gap-y-24px box-border w-full rounded-24px shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)]">
      <div className="flex flex-col w-full text-16px leading-26px break-all">
        <span className="mb-8px">address: </span>
        {address}
      </div>
      {handle ? (
        <LensProfile handle={handle} />
      ) : (
        <LensProfileSkeleton loading={loading} error={error} />
      )}
      <Link to={`/explorer/profile/${address}`} className="no-underline">
        <Button fullWidth variant="outlined">
          View profiles related
        </Button>
      </Link>
    </div>
  );
};

const LensProfile: React.FC<{ handle: string }> = ({ handle }) => (
  <div className="flex flex-col w-full">
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <div className="mr-8px">
          {handle ? "has lens handle:" : "don't have lens handle"}
        </div>
        <div>{handle}</div>
      </div>
      {handle && (
        <ToolTip text="find handle on lenster">
          <a
            className="no-underline"
            href={`https://testnet.lenster.xyz/u/${handle}`}
            target="_blank"
          >
            <span className="text-24px i-iconamoon:link-bold" />
          </a>
        </ToolTip>
      )}
    </div>
  </div>
);

const LensProfileSkeleton: React.FC<{
  loading: boolean;
  error: string | null;
}> = ({ loading, error }) => {
  return <div>{loading ? "loading..." : "No lens profile detected"}</div>;
};

export default AddrCard;
