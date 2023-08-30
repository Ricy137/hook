import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { isAddress } from "viem";
import { useSetAtom } from "jotai";
import Input from "@components/Input";
import Button from "@components/Button";
import { explorerSearchAtom } from "@service/explorer";

const SearchBar: React.FC = () => {
  const setExplorerSearch = useSetAtom(explorerSearchAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ address: string }>();

  const handleSearch = useCallback((data: { address: string }) => {
    setExplorerSearch(data.address);
  }, []);

  return (
    <form
      className="flex flex-row items-center gap-x-16px w-full h-68px"
      onSubmit={handleSubmit(handleSearch)}
    >
      <Input
        type="text"
        error={!!errors.address}
        {...register("address", {
          required: true,
          validate: (value) => isAddress(value),
        })}
        placeholder="Search by address"
        className="rounded-8px"
      />
      <Button variant="outlined">Search</Button>
    </form>
  );
};

export default SearchBar;
