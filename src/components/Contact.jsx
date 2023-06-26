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

  const handleChange = (e) => {}
  const handleSubmit = (e) => {}


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>
          Laissez-moi un message
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8"></form>
      </motion.div>
      <label className='mt-12 flex flex-col gap-8'>
        <span className='text-white font-medium mb-4'>Your Name</span>
        <input type="text" name="name" value={form.name} onChange={handleChange}/>
      </label>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
