"use client";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import type { NextPage } from "next";
import React from "react";
import { HideableInput, Input } from "ui/input";
import { LampContainer } from "ui/lamp";
import { api } from "~/trpc/react";

const LoginPage: NextPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const searchParams = useSearchParams();
  const authRequestId = searchParams.get("authRequest") || "";

  const { mutate: login, error } = api.post.login.useMutation({
    onSuccess: (data) => {
      console.log("Login successful:", data);
      console.log("data.callbackUrl", data.callbackUrl);
      if (!data.callbackUrl) {
        console.error("No callback URL provided in login response");
        return;
      }
      // Handle successful login, e.g., redirect or show a success message
      window.location.href = data.callbackUrl;
    }
  });

  React.useEffect(() => {
    if (error) {
      console.error("Login error:", error);
    }
  }, [error]);

  React.useEffect(() => {
    setIsOpen(!!username)
  }, [username]);

  const onUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-screen w-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <LampContainer childrenClassName="-translate-y-[22rem]">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="backdrop-blur-2xl min-w-[520px] p-8 rounded-lg shadow-lg z-10 ring-1 ring-slate-500/10"
          //   className="mt-8 bg-gradient-to-br from-slate-300 to-slate-200 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <h2 className="text-xl text-white mb-4">Login</h2>
          <pre className="text-white text-sm my-2">{JSON.stringify({password, username, authRequestId }, null, 2)}</pre>
          <div className="space-y-4">
            <Input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={onUsernameChange}
              autoComplete="username"
              className="bg-slate-900 bg-opacity-40 caret-blue-400"
            />
            <HideableInput
              isOpen={isOpen}
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={onPasswordChange}
              autoComplete="current-password"
              className="bg-slate-900 bg-opacity-40 caret-blue-500"
            />
            <div>
              <button
                type="button"
                onClick={() => {login({ username, password, authRequestId })}}
                className="w-full bg-blue-600 bg-opacity-50 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </button>
              <p className="mt-2 text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-600 hover:underline">
                  Register
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </LampContainer>
    </div>
  );
};

LoginPage.displayName = "LoginPage";

export default LoginPage;
