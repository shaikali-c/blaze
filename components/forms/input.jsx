import { ArrowRight } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

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
  const [error, setError] = useState({ active: false, err: "" });
  const id = useId();

  useEffect(() => {
    let name = (inputRef.current.value = formData[formFields[step_].name]);
    console.log(name);
  });

  const handleNextClick = () => {
    let value = inputRef.current.value;
    const currentField = formFields[step_].name;

    if (!value) {
      return setError({
        active: true,
        err: formFields[step_].err,
      });
    }

    setError({ active: false, err: "" });

    setFormData((prev) => ({ ...prev, [currentField]: value }));

    if (step_ < formFields.length - 1) {
      setStep(step_ + 1);
      inputRef.current.value = "";
    } else {
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
          type={formFields[step_].type}
          ref={inputRef}
        />

        <button
          onClick={handleNextClick}
          className="border-input bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-e-md border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
        >
          <ArrowRight size={20} />
        </button>
      </div>
      {error.active && (
        <p
          className="peer-aria-invalid:text-destructive mt-2 text-xs text-red-400"
          role="alert"
          aria-live="polite"
        >
          {error.err}
        </p>
      )}
    </div>
  );
}
