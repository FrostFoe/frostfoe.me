import { GreetingForm } from '@/components/greeting-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold font-headline tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Hello World
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Welcome to your new Next.js application, HelloNext.
          </p>
        </div>
        <GreetingForm />
      </div>
    </main>
  );
}
