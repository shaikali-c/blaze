import LoginForm from "@/components/forms/loginForm";

export default function Login() {
  return (
    <section className="w-screen p-5 md:p-10 flex flex-col">
      <header className="mb-5">
        <h2 className="text-lg">Welcome back</h2>
      </header>
      <LoginForm />
    </section>
  );
}
