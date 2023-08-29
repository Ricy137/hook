import { useAccount } from "wagmi";
import { Link } from "react-router-dom";
import { shortenAddress } from "@utils/address";
import Button from "@components/Button";
import Dropdown from "@components/Dropdown";

const AddressBoard = () => {
  const { address } = useAccount();

  return (
    <Link to="/profile" className="no-underline">
      <Dropdown
        Content={<AddressBoardDropdown />}
        dismissProps={{ outsidePressEvent: "click" }}
      >
        <Button
          variant="outlined"
          className="hover:!bg-transparent hover:!text-#000000"
        >
          {shortenAddress({ address: address as string })}
        </Button>
      </Dropdown>
    </Link>
  );
};

const AddressBoardDropdown = () => {
  return (
    <div className="p-12px w-163px bg-#FBF6F1 border-#cacbcb border-b-1px border-x-1px border-solid rounded-b-8px box-border hover:bg-#CBF0ED">
      Owned Profiles
    </div>
  );
};

export default AddressBoard;
