import { useCallback, MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { isAddress } from "ethers";
import Input from "@components/Input";
import TextArea from "@components/TextArea";
import Button from "@components/Button";
import { useModal } from "@components/Modal";
import AddressFormItem from "@modules/AddressFormItem";
import CustomizedItemModal, {
  CustomizedItemData,
  CuteomizedFormItems,
} from "@modules/CustomizedItemModal";
import ProfileSelect from "./ProfileSelect";
import StrategyFormItem from "./StrategyFormItem";

//Form to create the pool
export interface PoolData {
  name: string;
  profileId: string;
  description: string;
  eligibility: string;
  applyLink: string;
  managers: string[];
  strategy: string;
  customizedStrategy: boolean;
  // customizedItems: CustomizedItemData[];
}
const CreatePool: React.FC = () => {
  const [customizedItems, setCustomizedItems] = useState<CustomizedItemData[]>(
    []
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<PoolData>();

  const handleAddCustomizedItem = useCallback((data: CustomizedItemData) => {
    setCustomizedItems([...customizedItems, data]);
  }, []);

  const { showModal } = useModal({
    content: <CustomizedItemModal handleOk={handleAddCustomizedItem} />,
    title: "Add Customized Form Item",
  });

  const showCustomizedItemModal = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      showModal();
    },
    [customizedItems]
  );

  const handleSubmitForm = useCallback(
    async (data: any) => {
      try {
        console.log("data", data);
      } catch (error) {
        console.log(error);
      }
    },
    [customizedItems]
  );

  return (
    <form
      className="my-40px p-24px sm:p-40px flex flex-col gap-y-24px w-85% max-w-760px rounded-30px border-1px border-solid border-#cacbcb"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Input
        title="Pool Name"
        type="text"
        error={!!errors.name}
        {...register("name", { required: true })}
        placeholder="Please enter your the name of your pool"
        required
      />
      <ProfileSelect setValue={setValue} />
      <StrategyFormItem setValue={setValue} control={control} />
      <TextArea
        title="Pool Description"
        error={!!errors.description}
        {...register("description", { required: true })}
        placeholder="Please enter your the description of your pool"
        required
      />
      <TextArea
        title="Eligibility"
        error={!!errors.description}
        {...register("eligibility", { required: true })}
        placeholder="Please describe the eligibility of the pool"
        required
      />
      <Input
        title="Apply"
        type="text"
        error={!!errors.description}
        {...register("applyLink", { required: true })}
        placeholder="Please provide the link to apply the pool"
        required
      />
      <AddressFormItem text="manager" control={control} />
      <CuteomizedFormItems
        customizedItems={customizedItems}
        setCustomizedItems={setCustomizedItems}
      />
      <div className="flex flex-row items-center gap-x-24px">
        <Button>Submit</Button>
        <Button variant="outlined" onClick={showCustomizedItemModal}>
          Add customized form item
        </Button>
      </div>
    </form>
  );
};

export default CreatePool;
