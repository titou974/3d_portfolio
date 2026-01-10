import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Malt from "./Malt";
import Divider from "./Divider";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden center space-y-10 md:space-y-16">
      <div className="space-y-px text-center">
        <p className={styles.sectionSubText}>{t("contact.subtitle")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact.title")}</h3>
      </div>

      <div className="space-y-8">
        <Malt />
        <Divider />

        <Suspense
          fallback={
            <div className="h-64 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl" />
          }
        >
          <ContactForm />
        </Suspense>
      </div>

      <Suspense fallback={<div className="h-32" />}>
        <SocialLinks />
      </Suspense>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
