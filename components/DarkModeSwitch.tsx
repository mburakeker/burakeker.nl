"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const DarkModeSwitch: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggleDarkMode = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      onClick={handleToggleDarkMode}
      variant="outline"
      size="icon"
      aria-label="Toggle Dark Mode"
    >
      <span className="sr-only">Toggle theme</span>
      {resolvedTheme === "light" ? (
        <Moon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Sun className="h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </Button>
  );
};
