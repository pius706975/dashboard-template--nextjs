'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { FacebookIcon } from '@/components/icons/facebook';
import { GoogleIcon } from '@/components/icons/google';
import Checkbox from '@/components/input/Checkbox';
import Link from 'next/link';
import { ErrorToast } from '@/components/Toast';
import validateSignUp from './validator';
import validatePassword from '@/utils/validatePassword';

export default function SignInPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        validateSignUp(
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword,
            setToastMessage,
        );

        validatePassword(password, setToastMessage);

        console.log({
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword,
            checked,
        });
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
                        Join Our Dashboard
                    </h1>
                    <p className="text-center dark:text-gray-300 text-gray-500">
                        Sign Up For Free
                    </p>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div className="flex justify-between">
                            <Input
                                type="text"
                                placeholder="John"
                                value={firstName}
                                label="First Name"
                                onChange={e => setFirstName(e.target.value)}
                            />

                            <p style={{ visibility: 'hidden' }}>..</p>

                            <Input
                                type="text"
                                placeholder="Doe"
                                value={lastName}
                                label="Last Name"
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>

                        <Input
                            type="text"
                            placeholder="johndoe-99"
                            value={username}
                            label="Username"
                            onChange={e => setUsername(e.target.value)}
                        />

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

                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            label="Password"
                            onChange={e => setConfirmPassword(e.target.value)}
                        />

                        <div className="flex items-center gap-2">
                            <Checkbox
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <span className="text-sm">
                                I agree to all Terms, Privacy Policy and fees
                            </span>
                        </div>
                        <Button onClick={() => {}}>Sign Up</Button>
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
                                    Sign up with Google
                                </span>
                            </div>
                        </Button>

                        <Button
                            className="border-2 hover:border-purple-700"
                            onClick={() => {}}>
                            <div className="flex justify-center">
                                <FacebookIcon />{' '}
                                <span className="ml-2">
                                    Sign up with Facebook
                                </span>
                            </div>
                        </Button>
                    </div>
                    <p className="text-center mt-4 text-sm dark:text-gray-300 text-gray-600">
                        Already have an account?{' '}
                        <Link
                            href="/sign-in"
                            className="text-blue-500 dark:hover:text-blue-100 hover:text-black">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
            {/* Right Side - Image */}
            <div className="w-1/2 hidden lg:block relative">
                <Image
                    src="/img/auth/bg2.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}
