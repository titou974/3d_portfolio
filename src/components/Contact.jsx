import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { GalaxyCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_uggrfxv',
      'template_6hxjsjc',
      {
        from_name: form.name,
        to_name: 'Titouan',
        from_email: form.email,
        to_email: 'titouanhirsch@gmail.com',
        message: form.message,
      },
      'f6XWpoT9iN-IdbY17',
      )
      .then(() => {
        setLoading(false, alert('Merci, je reviens vers vous au plus vite.'))
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert("Oups... L'envoi n'a pas fonctionné.")
      })
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden gap-10'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>
          Laissez-moi un message
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Nom</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Quel est votre nom?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Quel est votre email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="Quel est votre message?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? "Envoi..." : 'Envoyer'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] hidden">
        <GalaxyCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
