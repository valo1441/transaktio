import { LoginForm } from "@/components/login-form"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Logo size="sm" animated={true} />
            <span>Transaktio</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <h2 className="text-2xl font-bold">Welcome to Transaktio</h2>
            <p className="text-muted-foreground">
              Manage your transactions efficiently and securely
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

