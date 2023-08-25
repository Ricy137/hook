import {
  useCallback,
  MouseEvent,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import { Control, useController } from "react-hook-form";
import { isAddress } from "ethers";
import Input from "@components/Input";
import Button from "@components/Button";

const AddressFormItem: React.FC<{
  control: Control<any, any>;
  text?: string;
}> = ({ control, text }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name: text ?? "members",
    rules: {
      required: true,
      //TODO: abstract
      validate: (values) => {
        let valified = true;
        values.forEach((value: string) => {
          if (!isAddress(value)) {
            valified = false;
          }
        });
        return valified;
      },
    },
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
            title={`Enter the EVM address of the ${
              text ?? "members"
            } of your profile`}
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
              title={`Enter the EVM address of the ${
                text ?? "members"
              } of your profile`}
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
          + add {text ?? "member"}
        </Button>
      </div>
    </div>
  );
};

export default AddressFormItem;
