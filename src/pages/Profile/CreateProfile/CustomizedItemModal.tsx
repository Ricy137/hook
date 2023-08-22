import { Dispatch, useCallback, MouseEvent } from "react";
import { useForm } from "react-hook-form";
import Input from "@components/Input";
import Button from "@components/Button";
import { useModal } from "@components/Modal";

export interface CustomizedItemData {
  label: string;
  value: string;
}

interface CustomizedItemModalProps {
  handleOk: (data: CustomizedItemData) => void;
}
const CustomizedItemModal: React.FC<CustomizedItemModalProps> = ({
  handleOk,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomizedItemData>();
  const { hideModal } = useModal();

  const onSubmit = (data: CustomizedItemData) => {
    handleOk(data);
    hideModal();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-24px"
    >
      <Input
        type="text"
        {...register("label", { required: true })}
        required
        error={!!errors.label}
        title="Label of the customized item"
      />
      <Input
        type="text"
        {...register("value", { required: true })}
        required
        error={!!errors.value}
        title="Value of the customized item"
      />
      <Button type="submit">Add Customized Item</Button>
    </form>
  );
};

export default CustomizedItemModal;

interface CuteomizedFormItemProps {
  customizedItems: CustomizedItemData[];
  setCustomizedItems: Dispatch<React.SetStateAction<CustomizedItemData[]>>;
}

export const CuteomizedFormItems: React.FC<CuteomizedFormItemProps> = ({
  customizedItems,
  setCustomizedItems,
}) => {
  const handleRemoveMember = useCallback(
    (e: MouseEvent, index: number) => {
      e.preventDefault();
      setCustomizedItems((prev) => prev.filter((item, i) => i !== index));
    },
    [setCustomizedItems]
  );

  return (
    <>
      {customizedItems.map((item, index) => (
        <div
          key={`${item.label}-${item.value}`}
          className="flex flex-row items-center gap-x-8px"
        >
          <Input
            wrapperClassName="grow"
            className="!bg-transparent"
            title={item.label}
            value={item.value}
            disabled
            type="text"
          />
          <span
            className="i-dashicons:remove translate-y-9.25px text-20px cursor-pointer"
            onClick={(e) => handleRemoveMember(e, index)}
          />
        </div>
      ))}
    </>
  );
};
