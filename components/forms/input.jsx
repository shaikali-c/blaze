import { ArrowRight } from "lucide-react";
import { useId, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormInput({
  step_,
  setStep,
  formFields,
  setFormData,
  formData,
}) {
  const inputRef = useRef(null);
  const id = useId();

  const handleNextClick = () => {
    const value = inputRef.current.value || "";
    const currentField = formFields[step_].name;

    // Always update the form data first
    setFormData((prev) => ({ ...prev, [currentField]: value }));

    // Only increment step if not on last field
    if (step_ < formFields.length - 1) {
      setStep(step_ + 1);
      inputRef.current.value = "";
    } else {
      // On last field - you might want to submit here
      console.log("Form completed:", formData);
    }
  };

  const label = formFields[step_].label;
  const placeholder = formFields[step_].placeholder;

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex rounded-md shadow-xs">
        <Input
          id={id}
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          placeholder={placeholder}
          type="email"
          ref={inputRef}
        />
        <button
          onClick={handleNextClick}
          className="border-input bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-e-md border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
