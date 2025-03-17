import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const Footer: React.FC = () => {
  return (
    <footer className="mx-auto mt-auto w-full max-w-2xl flex flex-col justify-center align-center py-12">
      <Separator className="w-full mb-4" />
      <small className="text-center">© Copyright 2025 Burak Eker. All rights reserved.</small>
    </footer>
  );
};
