import { Button, Calendar, Select, SelectItem } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { hoursSlotsInFrench } from "../../constants";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useTranslation } from "react-i18next";

export default function StepOneForm({ form, setForm }) {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.date.day || !form.slot) {
      addToast({
        title: t("contactForm.completeInput.title"),
        description: t("contactForm.completeInput.description"),
        color: "danger",
        variant: "flat",
      });
      return;
    }

    setForm({ ...form, formStep: 2 });
  };

  const handleSlotChange = (keys) => {
    setForm({ ...form, slot: keys.currentKey });
  };

  return (
    <motion.form
      key="step-1-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 text-left items-center"
    >
      <Calendar
        aria-label={t("contactForm.stepOne.calendarLabel")}
        locale="fr-FR"
        value={form.date}
        onChange={(date) => setForm({ ...form, date: date })}
        minValue={today(getLocalTimeZone())}
      />

      <Select
        className="max-w-xs"
        label={t("contactForm.stepOne.selectLabel")}
        isDisabled={!form.date?.day}
        placeholder={t("contactForm.stepOne.selectPlaceholder")}
        selectedKeys={form.slot ? [form.slot] : []}
        onSelectionChange={handleSlotChange}
        endContent={<i className="fa-solid fa-clock"></i>}
      >
        {hoursSlotsInFrench.map((slot) => (
          <SelectItem key={slot.key}>{slot.label}</SelectItem>
        ))}
      </Select>

      <AnimatePresence mode="wait">
        {!form.date && !form.slot && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
          >
            <i className="fa-solid fa-info-circle text-base-content"></i>
            <p className="text-sm text-base-content">
              {t("contactForm.stepOne.infoMessage")}
            </p>
          </motion.div>
        )}

        {form.date && !form.slot && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
          >
            <i className="fa-solid fa-check-circle text-base-content"></i>
            <p className="text-sm text-base-content">
              {t("contactForm.stepOne.dateSelected", {
                day: form.date.day,
                month: form.date.month,
                year: form.date.year,
              })}
            </p>
          </motion.div>
        )}

        {form.slot && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
          >
            <i className="fa-solid fa-check-circle text-green-500"></i>
            <p className="text-sm text-base-content">
              {t("contactForm.stepOne.fullSelection", {
                day: form.date.day,
                month: form.date.month,
                year: form.date.year,
                slot: hoursSlotsInFrench.find((slot) => slot.key === form.slot)
                  .label,
              })}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        color="primary"
        radius="lg"
        isDisabled={!form.date || !form.slot}
        endContent={<i className="fa-solid fa-arrow-right"></i>}
      >
        {t("contactForm.stepOne.nextButton")}
      </Button>
    </motion.form>
  );
}
