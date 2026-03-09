'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2.5 rounded-xl bg-black/5 dark:bg-[#F8FAFC]/5 hover:bg-black/10 dark:hover:bg-[#F8FAFC]/10 text-black dark:text-[#F8FAFC] transition-all"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-all animate-in spin-in-90 duration-300" />
      ) : (
        <Moon className="w-5 h-5 transition-all animate-in spin-in-90 duration-300" />
      )}
    </button>
  );
}