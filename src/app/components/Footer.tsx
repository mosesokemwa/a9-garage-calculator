const today = new Date();

export default function Footer() {
    return (
        <footer className="bg-white shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex items-center justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with &hearts; in <a href="https://mosesokemwa.github.io/public" className="hover:underline">Nairobi™</a> ©{today.getFullYear()}
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://mosesokemwa.github.io/public" className="hover:underline me-4 md:me-6" target="_target">Blog</a>
                    </li>
                    <li>
                        <a href="https://github.com/mosesokemwa" className="hover:underline me-4 md:me-6" target="_blank">Github</a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/mosesokemwa/" className="hover:underline me-4 md:me-6" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <a href="mailto:okemwamoses@gmail.com" className="hover:underline" target="_blank">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}