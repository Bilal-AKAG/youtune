'use client';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from '@/lib/auth-client';
import { cn } from '@/lib/utils';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="m@example.com"
                required
                type="email"
                value={email}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>

              <Input
                autoComplete="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
                value={password}
              />
            </div>

            <Button
              className="w-full"
              disabled={loading}
              onClick={async () => {
                await signIn.email(
                  {
                    email,
                    password,
                  },
                  {
                    onRequest: () => {
                      setLoading(true);
                    },
                    onResponse: () => {
                      setLoading(false);
                    },
                  }
                );
              }}
              type="submit"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                <p> Login </p>
              )}
            </Button>

            <div
              className={cn(
                'flex w-full items-center gap-2',
                'flex-col justify-between'
              )}
            >
              <Button
                className={cn('w-full gap-2')}
                disabled={loading}
                onClick={async () => {
                  await signIn.social(
                    {
                      provider: 'google',
                      callbackURL: '/dashboard',
                    },
                    {
                      onRequest: () => {
                        setLoading(true);
                      },
                      onResponse: () => {
                        setLoading(false);
                      },
                    }
                  );
                }}
                variant="outline"
              >
                <svg
                  height="1em"
                  role="image"
                  viewBox="0 0 256 262"
                  width="0.98em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  />
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  />
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  />
                </svg>
                Sign in with Google
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-center border-t py-4">
            <p className="text-center text-neutral-500 text-xs">
              built with{' '}
              <Link
                className="underline"
                href="https://better-auth.com"
                target="_blank"
              >
                <span className="cursor-pointer dark:text-white/70">
                  better-auth.
                </span>
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
