import { Textarea, Input, Button, addToast } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { hoursSlotsInFrench } from "../../constants";
import emailjs from "@emailjs/browser";

export default function StepTwoForm({ form, setForm }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      console.log(
        "Please fill in all required fields.",
        form.name,
        form.email,
        form.message
      );
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
            title: "Prise de rendez-vous envoyé",
            description:
              "Je reviens vers vous pour vous confirmer notre rendez vous au plus vite",
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
            title: "Une erreur a eu lieu lors de l'envoi de l'email",
            description:
              "Une erreur a eu lieu, contactez-moi directement via titouanhirsch@gmail.com",
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
          placeholder="Adrien Delaverne"
          label="Entrer votre nom"
          variant="bordered"
          validate={(value) => {
            if (!value) {
              return "Vous devez rentrer un nom";
            }
            if (value.length < 3) {
              return "Votre nom doit faire au moins 3 caractères";
            }
          }}
          value={form.name || ""}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="max-w-xs"
        />
        <Input
          type="email"
          placeholder="wediveapp@gmail.com"
          label="Entrer votre email"
          errorMessage="Veuillez rentrer une adresse mail valide"
          variant="bordered"
          value={form.email || ""}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="max-w-xs"
        />
        <Textarea
          className="max-w-xs"
          variant="bordered"
          label="Message"
          validate={() => {
            if (!form.message) {
              return "Veuillez rentrer un message";
            }
            if (form.message.length < 20) {
              return "Votre message doit faire au moins 20 caractères";
            }
          }}
          description="Entrer une description précise de votre besoin/demande pour que je puisse anticiper les questions lors de notre rendez-vous."
          placeholder="Entrez votre message ici..."
          value={
            form.message ||
            `Bonjour Titouan ! Je voudrais caler un rendez vous avec toi le ${
              form.date.day
            }/${form.date.month}/${form.date.year} sur le créneau de ${
              hoursSlotsInFrench.find((slot) => slot.key === form.slot).label
            } pour parler de...`
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
          Réserver le rendez-vous
        </Button>
      </motion.form>
    </>
  );
}
