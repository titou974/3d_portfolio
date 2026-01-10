import { Textarea, Input, Button, addToast } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { hoursSlotsInFrench } from "../../constants";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function StepTwoForm({ form, setForm }) {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      addToast({
        title: t("contactForm.completeInput.title"),
        description: t("contactForm.completeInput.description"),
        color: "danger",
        variant: "flat",
      });
      return;
    }
    setIsLoading(true);

    emailjs
      .send(
        "service_uggrfxv",
        "template_b8pfbq3",
        {
          name: form.name,
          to_name: "Titouan",
          email: form.email,
          to_email: "titouanhirsch@gmail.com",
          message: form.message,
        },
        "f6XWpoT9iN-IdbY17"
      )
      .then(
        () => {
          setIsLoading(false);
          addToast({
            title: t("contactForm.stepTwo.successTitle"),
            description: t("contactForm.stepTwo.successDescription"),
            color: "success",
            variant: "flat",
          });
          setForm({
            ...form,
            formStep: 3,
          });
        },
        (error) => {
          setIsLoading(false);
          addToast({
            title: t("contactForm.stepTwo.errorTitle"),
            description: t("contactForm.stepTwo.errorDescription"),
            color: "danger",
            variant: "flat",
          });
          console.log(error);
        }
      );
  };

  return (
    <>
      <motion.form
        key="step-2-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 text-left items-center"
      >
        <Input
          type="text"
          placeholder={t("contactForm.stepTwo.namePlaceholder")}
          label={t("contactForm.stepTwo.nameLabel")}
          variant="bordered"
          validate={(value) => {
            if (!value) {
              return t("contactForm.stepTwo.nameRequired");
            }
            if (value.length < 3) {
              return t("contactForm.stepTwo.nameMinLength");
            }
          }}
          value={form.name || ""}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="max-w-xs"
        />
        <Input
          type="email"
          placeholder={t("contactForm.stepTwo.emailPlaceholder")}
          label={t("contactForm.stepTwo.emailLabel")}
          errorMessage={t("contactForm.stepTwo.emailError")}
          variant="bordered"
          value={form.email || ""}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="max-w-xs"
        />
        <Textarea
          className="max-w-xs"
          variant="bordered"
          label={t("contactForm.stepTwo.messageLabel")}
          validate={() => {
            if (!form.message) {
              return t("contactForm.stepTwo.messageRequired");
            }
            if (form.message.length < 20) {
              return t("contactForm.stepTwo.messageMinLength");
            }
          }}
          description={t("contactForm.stepTwo.messageDescription")}
          placeholder={t("contactForm.stepTwo.messagePlaceholder", {
            day: form.date.day,
            month: form.date.month,
            year: form.date.year,
            slot: hoursSlotsInFrench.find((slot) => slot.key === form.slot)
              ?.label,
          })}
          value={
            form.message ||
            t("contactForm.stepTwo.messagePlaceholder", {
              day: form.date.day,
              month: form.date.month,
              year: form.date.year,
              slot: hoursSlotsInFrench.find((slot) => slot.key === form.slot)
                ?.label,
            })
          }
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          minRows={10}
        />
        <Button
          className="mt-4"
          color="primary"
          radius="lg"
          type="submit"
          isLoading={isLoading}
          isDisabled={!form.name || !form.email || !form.message}
          endContent={<i className="fa-solid fa-arrow-right"></i>}
        >
          {t("contactForm.stepTwo.submitButton")}
        </Button>
      </motion.form>
    </>
  );
}
