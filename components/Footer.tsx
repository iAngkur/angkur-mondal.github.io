export default function Footer() {
    return (
        <footer className="border-t-4 border-black bg-black text-white py-8">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-bold text-lg">© 2026 Angkur Mondal. All rights reserved.</p>
                <div className="flex gap-4">
                    {["GitHub", "LinkedIn"].map((social) => (
                        <a
                            key={social}
                            href="#"
                            className="border-2 border-white px-4 py-2 font-bold hover:bg-white hover:text-black transition-colors cursor-pointer"
                        >
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}