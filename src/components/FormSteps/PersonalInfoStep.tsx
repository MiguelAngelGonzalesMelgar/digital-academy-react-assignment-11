import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from "../common/InputField";
import Button from '../common/Button';
import { personalInfoSchema } from "../../schemas/index";
import type { PersonalInfoForm } from "../../types/formTypes";

interface PersonalInfoStepProps {
  onNext: (data: PersonalInfoForm) => void;
  initialData?: PersonalInfoForm;
}

const PersonalInfoStep = ({ onNext, initialData }: PersonalInfoStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoForm>({
    resolver: yupResolver(personalInfoSchema),
    defaultValues: initialData,
  });

  const onSubmit = (data: PersonalInfoForm) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Personal Information</h2>
      <InputField
        label="Name"
        name="name"
        register={register}
        error={errors.name}
        type="text"
      />
      <InputField
        label="Age"
        name="age"
        register={register}
        error={errors.age}
        type="number"
      />
      <InputField
        label="Email"
        name="email"
        register={register}
        error={errors.email}
        type="email"
      />
      <Button type="submit">Next</Button>
    </form>
  );
};

export default PersonalInfoStep;