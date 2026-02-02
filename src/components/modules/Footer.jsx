import { FaTelegram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    id: 1,
    icon: <MdEmail />,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=alirezaahadpoor@yahoo.com",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/AlirezaShal",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/alireza-ahadpour-shal/",
  },
];

function Footer() {
  return (
    <footer className="w-full xl:mt-16 mt-8 xl:py-8 py-5 bg-gradient-to-t from-stone-200 flex flex-col items-center">
      <div className="flex gap-5 xl:mb-4 mb-2">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-purple-700 bg-white rounded-full p-3 shadow-sm hover:shadow-md transition-all"
          >
            <i className="text-xl">{link.icon}</i>
          </a>
        ))}
      </div>
      <div className="w-1/2 h-px bg-gray-300 xl:my-4 my-2" />
      <a href="#" className="mx-auto mb-10 mt-4 text-zinc-700">
        Developed by{" "}
        <strong className="text-purple-700 font-bold">
          Alireza Ahadpour Shal
        </strong>{" "}
        | {new Date().getFullYear()}
      </a>
    </footer>
  );
}

export default Footer;
