"use client";

import Input from "@/components/forms/input";
import { LoaderCircle, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
export default function Account() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const validate = () => {
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (!email || !email.includes("@")) return "Invalid email.";
    if (!password) return "Password cannot be empty.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (password !== confirmPassword) return "Passwords do not match.";

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (validation) {
      return setError(validation);
    }
    setError(false);
  };

  return (
    <section className="h-screen w-screen flex items-center justify-center p-5">
      <form
        className=" bg-neutral-900 w-full max-w-120 rounded-2xl overflow-hidden"
        onSubmit={(e) => handleSubmit(e)}
      >
        <header className="p-7 pb-5 flex flex-col gap-1">
          <h2 className="text-xl text-neutral-100">Create an account</h2>
          <p className="text-neutral-500 text-xm">
            Double-check your details, payments will be sent to authorized users
            only.
          </p>
        </header>
        <main className="p-5 pt-0">
          <Input
            type={"text"}
            placeholder={"Enter your email"}
            reference={emailRef}
          />
          <Input
            type={"password"}
            placeholder={"Enter your new password"}
            reference={passwordRef}
          />
          <Input
            type={"password"}
            placeholder={"Enter your password again"}
            reference={confirmPasswordRef}
          />

          {error && (
            <p className="p-5 pl-0 pb-0 text-red-500 flex items-center gap-2">
              <TriangleAlert size={17} />
              {error}
            </p>
          )}
          <p className="pt-5 pb-5 flex gap-1.5 items-baseline-start text-neutral-300">
            Already have an account?{" "}
            <Link href={"/account/login"} className="underline text-sky-600">
              Login
            </Link>
          </p>
          <div className="flex justify-center">
            <button
              className={`py-2 px-5 bg-neutral-200 text-neutral-900 rounded-xl mb-2 w-full cursor-pointer ${
                loading ? "opacity-50" : ""
              }`}
              onClick={handleSubmit}
            >
              {!loading && "Create"}
              {loading && (
                <p className="flex items-center gap-2 justify-center">
                  <LoaderCircle size={15} className="animate-spin" /> Please
                  wait
                </p>
              )}
            </button>
          </div>
        </main>
      </form>
    </section>
  );
}
