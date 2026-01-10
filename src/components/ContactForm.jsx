import { slideIn } from "../utils/motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import StepOneForm from "./Form/StepOneForm";
import { AnimatePresence } from "framer-motion";
import StepTwoForm from "./Form/StepTwoForm";
import StepThreeForm from "./Form/StepThreeForm";
import { Alert } from "@heroui/react";
import { hoursSlotsInFrench } from "../constants";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [form, setForm] = useState({
    date: null,
    slot: null,
    name: null,
    email: null,
    message: null,
    formStep: 1,
  });

  const { t } = useTranslation();

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="bg-tertiary p-8 rounded-2xl anim-disabled w-full max-w-3xl mx-auto text-center flex flex-col items-center gap-8 md:min-h-120"
    >
      <div className="space-y-2">
        <h3 className="font-bold text-[24px] text-base-title">
          {t("contactForm.title")}
        </h3>
        <p className={styles.sectionSubText}>
          {form.formStep === 1 && t("contactForm.step1")}
          {form.formStep === 2 && t("contactForm.step2")}
        </p>
        {form.formStep === 3 && (
          <span
            className={`${styles.heroSubText} xl:text-xl lg:text-xl md:text-xl`}
          >
            <Typewriter
              words={[
                t("contactForm.confirmationMessage", { name: form.name }),
              ]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
            />
          </span>
        )}
        {form.formStep === 2 && (
          <Alert
            color="primary"
            title={t("contactForm.appointmentAlert", {
              day: form.date?.day,
              month: form.date?.month,
              year: form.date?.year,
              slot: hoursSlotsInFrench.find((slot) => slot.key === form.slot)
                .label,
            })}
            className="max-w-xs text-left mx-auto"
          />
        )}
      </div>
      <AnimatePresence mode="wait">
        {form.formStep === 1 && <StepOneForm form={form} setForm={setForm} />}
        {form.formStep === 2 && <StepTwoForm form={form} setForm={setForm} />}
        {form.formStep === 3 && <StepThreeForm form={form} setForm={setForm} />}
      </AnimatePresence>
    </motion.div>
  );
}
