'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Sparkles, Users, BarChart2, Home } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Study Groups', href: '/groups', icon: Users },
  { name: 'LrnBot', href: '/quizzes', icon: Sparkles },
  { name: 'Analytics', href: '/analytics', icon: BarChart2 },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-primary">LrnNest</span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      isActive
                        ? 'border-primary text-primary border-b-2'
                        : 'text-muted-foreground hover:text-foreground hover:border-border'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">AT</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}