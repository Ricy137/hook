import { ErrorBoundary } from "react-error-boundary";
import { useAtomValue } from "jotai";
import { ProfilesListById } from "@modules/ProfileList";
import { explorerSearchAtom } from "@service/explorer";
import SearchBar from "./SearchBar";
import FullProfiles, { FullProfilesErrorBoundary } from "./FullProfiles";

const Explorer: React.FC = () => {
  const explorerSearch = useAtomValue(explorerSearchAtom);

  return (
    <div className="py-40px w-85% flex flex-col items-center">
      <SearchBar />
      <div className="w-full h-0.5px bg-#EBEDF0" />
      {!!explorerSearch ? (
        <ProfilesListById address={explorerSearch} />
      ) : (
        <ErrorBoundary fallback={<FullProfilesErrorBoundary />}>
          <FullProfiles />
        </ErrorBoundary>
      )}
    </div>
  );
};

export default Explorer;
