import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <main className="min-h-screen p-24">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">ShelfLife</h1>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            <p className="mt-4 text-lg text-gray-600">
                Share resources. Support growth. Build community.
            </p>
        </main>
    );
}