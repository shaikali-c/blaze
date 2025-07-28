"use client";

import FormInput from "@/components/forms/input";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";

import { useState } from "react";

const steps = [1, 2, 3, 4];

const formFields = [
  {
    label: "Enter your email address",
    placeholder: "Email",
    name: "email",
  },
  {
    label: "Set a new password",
    placeholder: "Secret",
    name: "password",
  },
  {
    label: "Type your password again",
    placeholder: "Secret again",
    name: "confirmPassword",
  },

  {
    label: "Lastly choose your username",
    placeholder: "I am unqiue",
    name: "username",
  },
];

export default function Account() {
  const [step_, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  console.log(formData);

  return (
    <div className="w-full  p-6">
      <header className="mb-5">
        <h2 className="mb-2 text-lg">Create an account</h2>
        <p className="text-neutral-400">
          Provide accurate information (such as your in-game UID and contact
          email). Mismatched or fake entries may lead to disqualification.
        </p>
      </header>
      <div className="mx-auto max-w-xl space-y-8 text-center mb-5">
        <Stepper value={step_ + 1}>
          {steps.map((step) => (
            <StepperItem
              key={step}
              step={step}
              className="not-last:flex-1"
              onClick={() => setStep(step < step_ ? step : step_)}
            >
              <StepperTrigger>
                <StepperIndicator />
              </StepperTrigger>
              {step < steps.length && <StepperSeparator />}
            </StepperItem>
          ))}
        </Stepper>
      </div>
      <FormInput
        formFields={formFields}
        step_={step_}
        setStep={setStep}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
