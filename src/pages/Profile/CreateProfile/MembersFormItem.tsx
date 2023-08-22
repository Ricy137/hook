import {
  useCallback,
  MouseEvent,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import { Control, useController } from "react-hook-form";
import Input from "@components/Input";
import Button from "@components/Button";
import { ProfileDate } from "./index";

const MembersFromItem: React.FC<{
  control: Control<ProfileDate, any>;
}> = ({ control }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name: "members",
    rules: { required: true },
  });
  const [memberFeilds, setMemberFeilds] = useState<string[]>([""]);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      e.preventDefault();
      setMemberFeilds((prev) =>
        prev.map((item, i) => (i === index ? e.target.value : item))
      );
    },
    [setMemberFeilds]
  );

  const handleAppendMember = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setMemberFeilds((prev) => [...prev, ""]);
  }, []);

  const handleRemoveMember = useCallback((e: MouseEvent, index: number) => {
    e.preventDefault();
    setMemberFeilds((prev) => prev.filter((item, i) => i !== index));
  }, []);

  useEffect(() => {
    const memberFeildsCopy = [...memberFeilds];
    field.onChange([...memberFeildsCopy]);
  }, [memberFeilds]);

  return (
    <div className="flex flex-col justify-end gap-24px">
      {memberFeilds?.map((field, index) =>
        index === 0 ? (
          <Input
            key="members-initial"
            title="Enter the EVM address of the members of your profile"
            type="text"
            error={!!errors.members}
            placeholder="0xAEc621EC8D9dE4B524f4864791171045d6BBBe27"
            required
            onChange={(e) => handleInputChange(e, 0)}
          />
        ) : (
          <div key={field} className="flex flex-row items-center gap-x-8px">
            <Input
              wrapperClassName="grow"
              title="Enter the EVM address of the members of your profile"
              type="text"
              error={!!errors.members}
              placeholder="0xAEc621EC8D9dE4B524f4864791171045d6BBBe27"
              onChange={(e) => handleInputChange(e, index)}
              value={field}
            />
            <span
              className="i-dashicons:remove translate-y-9.25px text-20px cursor-pointer"
              onClick={(e) => handleRemoveMember(e, index)}
            />
          </div>
        )
      )}
      <div className="w-full flex justify-end">
        <Button variant="text" onClick={handleAppendMember}>
          + add member
        </Button>
      </div>
    </div>
  );
};

export default MembersFromItem;
