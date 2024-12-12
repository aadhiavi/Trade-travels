import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overlay from './Overlay';
import './AboutUs.css';

const Form = () => {
    const [form, setForm] = useState({ name: '', phone: '', email: '', place: '', message: '' });
    const [entries, setEntries] = useState([]);
    const [editId, setEditId] = useState(null);
    const [overlay, setOverlay] = useState({ visible: false, message: '' });
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      fetchEntries();
    }, []);
  
    const fetchEntries = async () => {
      try {
        const response = await axios.get('https://travelback-thuw.onrender.com/api/get-entries');
        setEntries(response.data.data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        if (editId) {
          await axios.put(`https://travelback-thuw.onrender.com/api/update-entry/${editId}`, form);
          showOverlay('Entry updated successfully');
          setEditId(null);
        } else {
          await axios.post('https://travelback-thuw.onrender.com/api/add-entry', form);
          showOverlay('Response submitted successfully');
        }
        setForm({ name: '', phone: '', email: '', place: '', message: '' });
        fetchEntries();
      } catch (error) {
        console.error('Error submitting entry:', error);
        showOverlay('Error submitting entry');
      } finally {
        setLoading(false);
      }
    };
  
    const showOverlay = (message) => {
      setOverlay({ visible: true, message });
      setTimeout(() => setOverlay({ ...overlay, visible: false }), 5000);
    };
  
    const handleCloseOverlay = () => {
      setOverlay({ ...overlay, visible: false });
    };
  
    const formatDate = (dateString) => {
      const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
  

    return (
        <div className='aboutus'>
            <div className='aboutus-form'>
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input placeholder='Name' type="text" name="name" value={form.name} onChange={handleInputChange} required />
                    </label>
                    <label>
                        <input placeholder='Phone' type="text" name="phone" value={form.phone} onChange={handleInputChange} required />
                    </label>
                    <label>
                        <input placeholder='Email' type="email" name="email" value={form.email} onChange={handleInputChange} required />
                    </label>
                    <label>
                        <input placeholder='Place' type="text" name="place" value={form.place} onChange={handleInputChange} required />
                    </label>
                    <label>
                        <textarea placeholder='Message' name="message" value={form.message} onChange={handleInputChange} required />
                    </label>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : editId ? 'Update Entry' : 'Submit'}
                    </button>
                </form>

            </div>

            {overlay.visible && (
                <Overlay message={overlay.message} onClose={handleCloseOverlay} />
            )}
        </div>
    );
};

export default Form;
