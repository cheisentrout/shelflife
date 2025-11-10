import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-stone-50 shadow-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-2xl font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            ShelfLife
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            <li>
              <Link
                href="/"
                className="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/browse"
                className="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Browse Shelves
              </Link>
            </li>
            <li>
              <Link
                href="/my-shelf"
                className="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
              >
                My Shelf
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-orange-400 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-500 transition-colors shadow-sm">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
