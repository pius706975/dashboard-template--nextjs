'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { FacebookIcon } from '@/components/icons/facebook';
import { GoogleIcon } from '@/components/icons/google';
import Link from 'next/link';
import { ErrorToast } from '@/components/Toast';
import validateSignIn from './validator';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        validateSignIn(email, password, setToastMessage);

        const dummyUser = {
            email: 'admin@admin.com',
            password: 'adminpassword',
        };
    
        if (email === dummyUser.email && password === dummyUser.password) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = '/';
        } else {
            setToastMessage('Invalid email or password');
        }
    };

    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => {
                setToastMessage(null);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [toastMessage]);

    return (
        <div className="flex min-h-screen">
            {toastMessage && <ErrorToast message={toastMessage} />}

            {/* Left Side - Form */}
            <div className="w-full lg:w-3/4 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center mr-2">
                        Welcome Back
                    </h1>

                    <p className="text-center dark:text-gray-300 text-gray-500">
                        {`Use "admin@admin.com" and "adminpassword" to sign in`}
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <Input
                            type="text"
                            placeholder="Email"
                            value={email}
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                        />

                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            label="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button onClick={() => {}}>Sign In</Button>
                    </form>

                    <div className="text-center mt-4 dark:text-gray-300 text-gray-500">
                        OR
                    </div>

                    <div className="mt-4 space-y-2">
                        <Button
                            className="border-2 border-bg-purple-600 hover:border-purple-700"
                            onClick={() => {}}>
                            <div className="flex justify-center">
                                <GoogleIcon />{' '}
                                <span className="ml-2">
                                    Sign in with Google
                                </span>
                            </div>
                        </Button>

                        <Button
                            className="border-2 hover:border-purple-700"
                            onClick={() => {}}>
                            <div className="flex justify-center">
                                <FacebookIcon />{' '}
                                <span className="ml-2">
                                    Sign in with Facebook
                                </span>
                            </div>
                        </Button>
                    </div>

                    <p className="text-center mt-4 text-sm dark:text-gray-300 text-gray-600">
                        {`Don't have an account?`}{' '}
                        <Link
                            href="/sign-up"
                            className="text-blue-500 dark:hover:text-blue-100 hover:text-black">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-1/2 hidden lg:block relative">
                <Image
                    src="/img/auth/bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}
