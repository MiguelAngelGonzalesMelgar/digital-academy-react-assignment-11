import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { addresSchema } from "../../schemas/index";
import type { AddressForm } from "../../types/formTypes";

interface AddressStepProps {
  onNext: (data: AddressForm) => void;
  onBack: () => void;
  initialData?: AddressForm;
}

const AddressStep = ({ onNext, onBack, initialData }: AddressStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressForm>({
    resolver: yupResolver(addresSchema),
    defaultValues: initialData,
  });

  const onSubmit = (data: AddressForm) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Address Information</h2>
      <InputField
        label="Country"
        name="country"
        register={register}
        error={errors.country}
        type="text"
      />
      <InputField
        label="City"
        name="city"
        register={register}
        error={errors.city}
        type="text"
      />
      <InputField
        label="Zip Code"
        name="zipCode"
        register={register}
        error={errors.zipCode}
        type="text"
      />
      <Button type="button" onClick={onBack} variant="secondary">
        Back
      </Button>
      <Button type="submit">Next</Button>
    </form>
  );
};

export default AddressStep;