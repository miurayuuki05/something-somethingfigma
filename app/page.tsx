import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href="/forgot-password">forgot password page</a>
      <a href="/forgot-password/password-baru">forgot password password baru page</a>
      <a href="/login">login page</a>
      <a href="/register">register page</a>
      <a href="/otp">register otp page</a>
      <a href="/otp/input-otp">register input otp page</a>
      <a href="/login/password-input">login password baru page</a>
    </main>
  );
}
