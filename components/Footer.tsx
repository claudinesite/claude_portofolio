export default function Footer() {
    return (
        <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div>
                    <span className="text-lg font-bold text-neutral-900 dark:text-white">CA.</span>
                    <p className="text-sm text-neutral-500 mt-2">
                        © {new Date().getFullYear()} Claude Aboki. Tous droits réservés.
                    </p>
                </div>

                <div className="flex gap-8">
                    <a href="https://www.linkedin.com/in/akuete-claude-aboki/" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">GitHub</a>
                    <a href="mailto:claudeaboki@gmail.com" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">Email</a>
                </div>

            </div>*
        </footer>
    );
}