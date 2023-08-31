import { useCallback } from "react";
import { useModal } from "@components/Modal";
import { useForm } from "react-hook-form";
import Input from "@components/Input";
import Button from "@components/Button";
import {
  useUpdateName,
  useUpdateMetadata,
  useAddMembers,
  useRemoveMembers,
} from "@service/registry";

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

export const MetaEditModal: React.FC = () => {
  const { hideModal } = useModal();
  const { updateMetadata, isLoading, isSuccess } = useUpdateMetadata();
  const { register, handleSubmit } = useForm<{ metadata: string }>();
  const onSubmit = useCallback(async (data: { metadata: string }) => {
    let res = await updateMetadata(data.metadata);
    hideModal();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-24px"
    >
      <Input type="text" {...register("metadata")} />
      <Button disabled={isLoading}>Submit</Button>
    </form>
  );
};

export const AddMembersModal: React.FC = () => {
  const { hideModal } = useModal();
  const { addMembers, isLoading, isSuccess } = useAddMembers();
  const { register, handleSubmit } = useForm<{ metadata: string }>();
  const onSubmit = useCallback(async (data: { metadata: string }) => {
    let res = await addMembers(data.metadata);
    hideModal();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-24px"
    >
      <Input type="text" {...register("metadata")} />
      <Button disabled={isLoading}>Submit</Button>
    </form>
  );
};

export const RemoveMembersModal: React.FC = () => {
  const { hideModal } = useModal();
  const { removeMembers, isLoading, isSuccess } = useRemoveMembers();
  const { register, handleSubmit } = useForm<{ members: string }>();
  const onSubmit = useCallback(async (data: { members: string }) => {
    let res = await removeMembers(data.members);
    hideModal();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-24px"
    >
      <Input type="text" {...register("members")} />
      <Button disabled={isLoading}>Submit</Button>
    </form>
  );
};
