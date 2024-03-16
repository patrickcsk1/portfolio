// @flow strict
"use client";
import { menues } from "@/utils/data/menues";
import { personalData } from "@/utils/data/personal-data";
import { scrollToTop } from "@/utils/scrolls";

const offsetSection = {
  about: 120,
  experience: 75,
  skills: 75,
  education: 75,
  contact: 75,
};

function Navbar() {
  const scrollToSection = (section) => {
    const sectionElem = document.getElementById(section);
    if (sectionElem) {
      window.scrollTo({
        top: sectionElem.offsetTop - offsetSection[section],
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-[#0d1224] sticky top-0 flex items-center justify-between py-5 z-50">
      <button
        onClick={scrollToTop}
        className="flex flex-shrink-0 items-center text-[#16f2b3] text-3xl font-bold"
      >
        {personalData.name.toUpperCase()}
      </button>

      <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100">
        {menues.map((menu) => (
          <NavbarItem
            key={menu.section}
            section={menu.section}
            title={menu.title}
            onClick={scrollToSection}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

const NavbarItem = ({ section, title, onClick }) => {
  return (
    <li>
      <button
        aria-label={`navbar-btn-${section}`}
        className="block px-4 py-2 no-underline outline-none hover:no-underline"
        onClick={() => onClick(section)}
      >
        <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
          {title}
        </div>
      </button>
    </li>
  );
};
