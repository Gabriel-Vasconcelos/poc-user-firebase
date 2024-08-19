import SignUpForm from "@/components/SignUpForm";

export default function Home() {

  return (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Cadastre-se
        </h2>
        <SignUpForm />
      </div>
    </div>
  );
}
