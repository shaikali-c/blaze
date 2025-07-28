"use client";

import FormInput from "@/components/forms/input";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import { ArrowUpRight, CircleArrowOutUpRight } from "lucide-react";
import Link from "next/link";

import { useState } from "react";

const steps = [1, 2, 3, 4];

const formFields = [
  {
    label: "Enter your email address",
    placeholder: "Email",
    name: "email",
    err: "Inavlid email address, try again!",
    type: "email",
  },
  {
    label: "Set a new password",
    placeholder: "Secret",
    name: "password",
    err: "Password must be atleast 8 characters.",
    type: "password",
  },
  {
    label: "Type your password again",
    placeholder: "Secret again",
    name: "confirmPassword",
    err: "Passwords do not match, try again!",
    type: "password",
  },

  {
    label: "Choose your username",
    placeholder: "I am unqiue",
    name: "username",
    err: "Username already taken, choose another!",
    type: "text",
  },
];

export default function Account() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [step_, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    game: "",
  });
  console.log(formData);

  return (
    <div className="w-full  p-6 md:p-10">
      <header className="mb-5">
        <h2 className="mb-2 text-lg">Create an account</h2>
        <p className="text-neutral-400">
          Provide accurate information. Mismatched or fake entries may lead to
          disqualification.
        </p>
      </header>
      <div className="mx-auto max-w-xl space-y-8 text-center mb-5">
        <Stepper value={step_ + 1}>
          {steps.map((step) => (
            <StepperItem
              key={step}
              step={step}
              className="not-last:flex-1"
              onClick={() => setStep(step - 1 <= step_ ? step - 1 : step_)}
            >
              <StepperTrigger>
                <StepperIndicator />
              </StepperTrigger>
              {step < steps.length && <StepperSeparator />}
            </StepperItem>
          ))}
        </Stepper>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          formFields={formFields}
          step_={step_}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      </form>
    </div>
  );
}
