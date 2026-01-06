import { Button, Calendar, Select, SelectItem } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { hoursSlotsInFrench } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function StepOneForm({ form, setForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.date.day || !form.slot) {
      console.log("Please select a date and time slot.", form.date, form.slot);
      alert("Veuillez sélectionner une date et un créneau");
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
        aria-label="Date (Controlled)"
        locale="fr-FR"
        value={form.date}
        onChange={(date) => setForm({ ...form, date: date })}
        minValue={today(getLocalTimeZone())}
      />

      <Select
        className="max-w-xs"
        label="Sélectionnez un créneau"
        isDisabled={!form.date?.day}
        placeholder="Choisir un horaire"
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
              Veuillez sélectionner un jour et un créneau horaire
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
              Notre rendez vous est planifié le {form.date.day}/
              {form.date.month}/{form.date.year} à ...
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
              Notre rendez vous est planifié le {form.date.day}/
              {form.date.month}/{form.date.year} sur le créneau de&nbsp;
              {hoursSlotsInFrench.find((slot) => slot.key === form.slot).label}
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
        Suivant
      </Button>
    </motion.form>
  );
}
