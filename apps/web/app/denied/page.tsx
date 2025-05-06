import Link from "next/link";

export default function Denied() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Access Denied</h1>
            <p className="mt-4 text-lg">You do not have permission to access this page.</p>
            <Link href="/" className="mt-6 text-blue-500 hover:underline">
                Go back to Homepage
            </Link>
        </div>
    );
}