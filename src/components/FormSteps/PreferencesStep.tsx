import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioButton from "../common/RadioButton";
import CheckBox from "../common/CheckBox";
import SelectField from "../common/SelectField";
import Button from "../common/Button";
import { preferencesSchema } from "../../schemas/index";
import type { PreferencesForm } from "../../types/formTypes";

interface PreferencesStepProps {
  onNext: (data: PreferencesForm) => void;
  onBack: () => void;
  initialData?: PreferencesForm;
}

const PreferencesStep = ({ onNext, onBack, initialData }: PreferencesStepProps) => {
  const defaultValues: PreferencesForm = {
    contactMethod: initialData?.contactMethod || "email",
    subscribeNewsletter:initialData?.subscribeNewsletter ?? false,
    favoriteCategory: initialData?.favoriteCategory || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PreferencesForm>({
    resolver: yupResolver<PreferencesForm, any, any>(preferencesSchema),
    defaultValues,
    mode: "onBlur"
  });

  const onSubmit = handleSubmit((data) => {
    onNext(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <h2>Preferences</h2>
      <div>
        <label>Preferred Contact Method:</label>
        <RadioButton
          label="Email"
          name="contactMethod"
          value="email"
          register={register}
        />
        <RadioButton
          label="Phone"
          name="contactMethod"
          value="phone"
          register={register}
        />
        <RadioButton
          label="Whatspp"
          name="contactMethod"
          value="whatsapp"
          register={register}
        />
        {errors.contactMethod && (
          <p className="input-field-error-message">
            {errors.contactMethod.message}
          </p>
        )}
      </div>

      <CheckBox
        label="Subscribe to Newsletter?"
        name="subscribeNewsletter"
        register={register}
      />

      <SelectField
        label="Favorite Category"
        name="favoriteCategory"
        register={register}
        error={errors.favoriteCategory}
        options={[
          { value: "", label: "Select a category" },
          { value: "technology", label: "Technology" },
          { value: "health", label: "Health" },
          { value: "art", label: "Art" },
          { value: "travel", label: "Travel" },
        ]}
      />
      
      <Button type="button" onClick={onBack} variant="secondary">
        Back
      </Button>
      <Button type="submit">Next</Button>
    </form>
  );
};

export default PreferencesStep;