const offsetSection = {
  about: 120,
  experience: 75,
  skills: 75,
  education: 75,
  contact: 75,
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollToSection = (section) => {
  const sectionElem = document.getElementById(section);
  if (sectionElem) {
    window.scrollTo({
      top: sectionElem.offsetTop - offsetSection[section],
      behavior: "smooth",
    });
  }
};
