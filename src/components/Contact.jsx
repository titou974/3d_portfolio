import { lazy, Suspense } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Malt from "./Malt";
import Divider from "./Divider";

// Lazy load heavy components
const ContactForm = lazy(() => import("./ContactForm"));
const SocialLinks = lazy(() => import("./SocialLinks"));

const Contact = () => {
  return (
    <div className="overflow-hidden center space-y-10 md:space-y-16">
      <div className="space-y-px text-center">
        <p className={styles.sectionSubText}>
          Besoin d'une application, d'un site ou conseils...
        </p>
        <h3 className={styles.sectionHeadText}>Recrutez-moi.</h3>
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

export default SectionWrapper(Contact, "");
