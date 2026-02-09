import Link from "next/link";

export default function HomePage() {
    return (
        <main className="flex min-h-screen items-center justify-center px-6">
            <div className="text-center max-w-xl animate-fade-up">
                <h1 className="font-mono text-4xl font-semibold tracking-tight">
                    Cloudtail
                    <span className="ml-1 animate-blink"> ▍</span>
                </h1>

                <p className="mt-4 text-lg text-gray-500">
                    A CLI tool to display or tail logs from Google Cloud Logging.
                </p>

                <div className="mt-8">
                    <Link
                        href="/docs"
                        className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
                    >
                        View Documentation →
                    </Link>
                </div>
            </div>
        </main>
    )
}