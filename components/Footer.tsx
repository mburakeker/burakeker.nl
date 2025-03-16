import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const Footer: React.FC = () => {
  return (
    <footer className="mx-auto mt-auto w-full max-w-2xl flex flex-col justify-center align-center">
      <Separator className="w-full mb-4" />
      <nav className="w-full mb-4">
        <ul className="flex gap-2 align-center justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>•</span>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <small className="text-center mb-4">© Copyright 2025 Burak Eker. All rights reserved.</small>
    </footer>
  );
};
