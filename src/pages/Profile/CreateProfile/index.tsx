import { useCallback, MouseEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isAddress } from "ethers";
import Input from "@components/Input";
import TextArea from "@components/TextArea";
import Button from "@components/Button";
import { useModal } from "@components/Modal";
import { useShowToast } from "@components/Toast";
import { useCreateProfile } from "@service/registry";
import MembersFromItem from "@modules/AddressFormItem";
import CustomizedItemModal, {
  CustomizedItemData,
  CuteomizedFormItems,
} from "@modules/CustomizedItemModal";

//Form to create the profile
export interface ProfileDate {
  name: string;
  owner: string;
  description: string;
  github?: string;
  socialMedia: string;
  members: string[];
  // customizedItems: CustomizedItemData[];
}
const CreateProfile: React.FC = () => {
  const [customizedItems, setCustomizedItems] = useState<CustomizedItemData[]>(
    []
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ProfileDate>();
  const showToast = useShowToast();
  const navigate = useNavigate();
  const { createProfile, isLoading, error, data, isSuccess } =
    useCreateProfile();

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
        await createProfile(data, customizedItems);
      } catch (error) {
        console.log(error);
      }
    },
    [customizedItems]
  );

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => navigate("/profile"), 2000);
      showToast({
        type: "success",
        content: "Profile created successfully, will redirect automatically",
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!!error) {
      showToast({ type: "failed", content: "Failed to create profile" });
    }
  }, [error]);

  return (
    <form
      className="my-40px p-24px sm:p-40px flex flex-col gap-y-24px w-85% max-w-760px rounded-30px border-1px border-solid border-#cacbcb"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Input
        title="Profile Name"
        type="text"
        error={!!errors.name}
        {...register("name", { required: true })}
        placeholder="Please enter your the name of your profile"
        required
      />
      <Input
        title="Profile Owner Address"
        type="text"
        error={!!errors.name}
        {...register("owner", {
          required: true,
          validate: (value) => isAddress(value),
        })}
        placeholder="0xAEc621EC8D9dE4B524f4864791171045d6BBBe27"
        required
      />
      <TextArea
        title="Profile Description"
        error={!!errors.description}
        {...register("description", { required: true })}
        placeholder="Please enter your the description of your profile"
        required
      />
      <Input
        title="Link to your Github Profile"
        type="text"
        error={!!errors.github}
        {...register("github")}
        placeholder="https://github.com/Ricy137/hook"
      />
      <Input
        title="Link to your social media"
        type="text"
        error={!!errors.github}
        {...register("socialMedia", { required: true })}
        placeholder="https://lenster.xyz/u/cuckooir"
        required
      />
      <MembersFromItem control={control} />
      <CuteomizedFormItems
        customizedItems={customizedItems}
        setCustomizedItems={setCustomizedItems}
      />
      <div className="flex flex-row items-center gap-x-24px">
        <Button disabled={isLoading || isSuccess}>Submit</Button>
        {/* <Button>Submit</Button> */}
        <Button variant="outlined" onClick={showCustomizedItemModal}>
          Add customized form item
        </Button>
      </div>
    </form>
  );
};

export default CreateProfile;
