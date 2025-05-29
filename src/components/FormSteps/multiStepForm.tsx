import { useState } from "react";
import PersonalInfoStep from "./PersonalInfoStep";
import PreferencesStep from "./PreferencesStep";
import AddressStep from "./AddressStep";
import type { PersonalInfoForm, PreferencesForm, AddressForm } from "../../types/formTypes";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    preferences: {},
    address: {}
  });

  const handlePersonalInfoSubmit = (data: PersonalInfoForm) => {
    setFormData(prev => ({ ...prev, personalInfo: data }));
    setStep(2);
  };

  const handlePreferencesSubmit = (data: PreferencesForm) => {
    setFormData(prev => ({ ...prev, preferences: data }));
    setStep(3);
  };

  const handleAddressSubmit = (data: AddressForm) => {
    setFormData(prev => ({ ...prev, address: data }));
    // Final submission
    console.log('Complete form data:', { ...formData, address: data });
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  return (
    <div>
      {step === 1 && (
        <PersonalInfoStep 
          onNext={handlePersonalInfoSubmit} 
          initialData={formData.personalInfo as PersonalInfoForm}
        />
      )}
      {step === 2 && (
        <AddressStep 
        onNext={handleAddressSubmit}
        onBack={handleBack}
        initialData={formData.address as AddressForm}
      />
        
      )}
      {step === 3 && (
        <PreferencesStep 
        onNext={handlePreferencesSubmit}
        onBack={handleBack}
        initialData={formData.preferences as PreferencesForm}
      />
      )}
    </div>
  );
};

export default MultiStepForm;