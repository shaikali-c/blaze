import { useId } from "react";
import { ArrowRight, AtSignIcon } from "lucide-react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const id = useId();
  return (
    <>
      <div className="*:not-first:mt-2">
        <Label htmlFor={id}>Enter your email address</Label>
        <div className="relative mb-5">
          <Input
            id={id}
            className="peer ps-9"
            placeholder="Email"
            type="email"
          />
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
            <AtSignIcon size={16} aria-hidden="true" />
          </div>
        </div>
      </div>
      <PasswordInput />
    </>
  );
}

function PasswordInput() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Enter your password</Label>
      <div className="flex rounded-md shadow-xs">
        <Input
          id={id}
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          placeholder="Secret"
          type="email"
        />

        <button
          className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-9 items-center justify-center rounded-e-md border text-sm transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Subscribe"
        >
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
      <p className="text-xs text-neutral-400">
        By submitting, you agree to the terms and conditions.
      </p>
    </div>
  );
}
