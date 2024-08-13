import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

const TypewriterSkills = () => {

    const {t} = useTranslation()

  return (
    <div
      className="poppins text-[#FFFFFF] text-[20px] font-[300] duration-[0.5s] dark:text-[#1f1f1f]"
    >
      <Typewriter
        options={{
          strings: [t("s1.t3"), t("s1.t6"), t("s1.t7")],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterSkills;