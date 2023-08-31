import { useCallback } from "react";
import { useModal } from "@components/Modal";
import { useForm } from "react-hook-form";
import Input from "@components/Input";
import Button from "@components/Button";
import { useUpdateName } from "@service/registry";

export const NameEditModal: React.FC = () => {
  const { hideModal } = useModal();
  const { updateProfileName, isLoading, isSuccess } = useUpdateName();
  const { register, handleSubmit } = useForm<{ newName: string }>();
  const onSubmit = useCallback(async (data: { newName: string }) => {
    let res = await updateProfileName(data.newName);
    hideModal();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-24px"
    >
      <Input type="text" {...register("newName")} />
      <Button disabled={isLoading}>Submit</Button>
    </form>
  );
};
