import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
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
  const [alert, setAlert] = useState('')

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
        setLoading(false)
        setAlert('success')
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        setAlert('warning')
        console.log(error);
        alert("Oups... L'envoi n'a pas fonctionné.")
      })
  }


  return (
    <div className='overflow-hidden center'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="bg-black-100 p-8 rounded-2xl anim-disabled md:w-8/12 mx-auto">
        <p className={styles.sectionSubText}>
          Application, site, ou autre 
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
          <div className={`${alert === 'success' ? '' : 'hidden'} text-white flex items-center bg-[#38a169] py-3 px-2 rounded-md`}>
            <i className="fa-solid fa-circle-check fa-lg"></i>
            <p className='ms-3'>Message envoyé ! Je reviens vers vous au plus vite.</p>
          </div>
          <div className={`${alert === 'warning' ? '' : 'hidden'} text-white flex items-center bg-[#dd6b20] py-3 px-2 rounded-md`}>
            <i className="fa-solid fa-circle-exclamation fa-lg"></i>
            <p className='ms-3'>Oups... L'envoi n'a pas fonctionné.</p>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
