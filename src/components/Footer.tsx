import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 neo-brutalism-shadow">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 font-poppins">SGC</h3>
            <p>Empowering students through guidance and support.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-blue-500">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-blue-500">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4 font-poppins">Connect With Us</h4>
            <div className="flex space-x-4">

              <a href="https://www.instagram.com/studentsguidancecell" className="hover:text-pink-800">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/studentguidancecell-cahcet/" className="hover:text-blue-500">
                <Linkedin />
              </a>
              <a href="https://github.com/sgc-cahcet" className="hover:text-gray-700">
                <Github />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Students Guidance Cell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

