import React, { useCallback, useState, useEffect } from "react";
import { UseFormSetValue, Control, useController } from "react-hook-form";
import Input from "@components/Input";
import Select, { Option } from "@components/Select";
import Label from "@components/Label";
import { ClonableStrategies } from "@service/pool";
import { PoolData } from "@service/pool";

//TODO: for form, it has setValue and controller two approaches. Make it only one approach (modify Select)
const StrategyFormItem: React.FC<{
  setValue: UseFormSetValue<PoolData>;
  control: Control<PoolData, any>;
}> = ({ setValue, control }) => {
  const [customized, setCustomized] = useState(false);
  const {
    field: { value, ...restField },
    formState: { errors },
  } = useController({
    control,
    name: "strategy",
    rules: {
      required: true,
    },
  });

  const setOption = useCallback((option: Option) => {
    setValue("strategy", option.value as string);
  }, []);

  const handleCheckbox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCustomized(e.target.checked);
      setValue("customizedStrategy", e.target.checked);
    },
    []
  );

  useEffect(() => {
    setValue("customizedStrategy", customized);
  }, [customized]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <Label title="Strategy" name="strategy" required />
        <div className="flex flex-row items-center gap-x-8px">
          <label htmlFor="customizedStrategy" className="text-[#62677B]">
            use customized strategy
          </label>
          <input
            type="checkbox"
            name="customizedStrategy"
            className="w-4 h-4 cursor-pointer"
            onChange={handleCheckbox}
            checked={customized}
          />
        </div>
      </div>
      {!customized && (
        <Select
          options={ClonableStrategies}
          setOption={setOption}
          placeholder="Choose a clonable strategy"
          wrapperClass="w-full"
          className="w-full"
        />
      )}
      {customized && (
        <Input
          type="text"
          placeholder="Please enter your customized strategy"
          required
          {...restField}
        />
      )}
    </div>
  );
};

export default StrategyFormItem;
