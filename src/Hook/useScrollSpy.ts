import { useEffect, useState } from "react";

const useScrollSpy = (sectionIds: string[], offset = 300) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId.replace("#", ""));
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            window.scrollY >= sectionTop - offset &&
            window.scrollY < sectionTop + sectionHeight - offset
          ) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        window.history.replaceState(null, "", currentSection);
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, activeSection, offset]);

  return activeSection;
};

export default useScrollSpy;
