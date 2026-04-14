import { useState } from 'react';

export default function useContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('https://formspree.io/f/mbdqljaj', {  // ← din URL här
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  }

  return { formData, handleChange, handleSubmit, status };
}