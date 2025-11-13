import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold text-stone-800 mb-6">Share toys. Skip the clutter.</h1>
          <p className="text-xl text-stone-600 mb-8">
            Connect with families in your neighborhood to swap developmentally appropriate toys as
            your children grow.
          </p>

          <div className="flex gap-4 justify-center">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-orange-400 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-500 transition-colors shadow-sm text-lg">
                  Get Started
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/browse"
                className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-sm text-lg"
              >
                Browse Toys
              </Link>
            </SignedIn>
            <Link
              href="/browse"
              className="bg-white text-stone-700 px-8 py-3 rounded-full font-medium hover:bg-stone-50 transition-colors border-2 border-stone-300 text-lg"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-stone-800 text-center mb-12">How ShelfLife Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-emerald-700">1</span>
            </div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">List Your Toys</h3>
            <p className="text-stone-600">
              Share toys your children have outgrown or lost interest in
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Find & Connect</h3>
            <p className="text-stone-600">
              Browse toys in your area and connect with local families
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-amber-700">3</span>
            </div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Swap & Share</h3>
            <p className="text-stone-600">Meet at local events or arrange individual swaps</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Ready to get started?</h2>
          <p className="text-lg text-stone-600 mb-8">
            Join your local community of parents sharing toys sustainably
          </p>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-orange-400 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-500 transition-colors shadow-sm text-lg">
                Sign Up Free
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link
              href="/browse"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-sm text-lg"
            >
              Start Browsing
            </Link>
          </SignedIn>
        </div>
      </div>
    </main>
  );
}
