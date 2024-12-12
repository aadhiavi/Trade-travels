import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overlay from '../AboutUs/Overlay';
import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import './Admin.css';
import ImageUploader from './ImageUploader';
import ImageGallery from './ImageGallery';

const Admin = () => {
    const [form, setForm] = useState({ name: '', phone: '', email: '', place: '', message: '' });
    const [entries, setEntries] = useState([]);
    const [editId, setEditId] = useState(null);
    const [overlay, setOverlay] = useState({ visible: false, message: '' });
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [entryPage, setEntryPage] = useState(false);
    const[imageManager,setImageManager] = useState(false);


    const handleShowEntryPage = () => {
        setEntryPage(!entryPage)
        setImageManager(false);
    }
    const handleShowImageManager = () => {
        setImageManager(!imageManager)
        setEntryPage(false);
    }

    const handleDisplay = () => {
        setForm({ name: '', phone: '', email: '', place: '', message: '' });
        setEditId(null);
        setShowForm(!showForm);
    }

    const handleUpload = () => {
        setRefresh(prev => !prev);
    };

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

    const handleEdit = (entry) => {
        setForm({ name: entry.name, phone: entry.phone, email: entry.email, place: entry.place, message: entry.message });
        setEditId(entry._id);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://travelback-thuw.onrender.com/api/delete-entry/${id}`);
            showOverlay('Entry deleted successfully');
            fetchEntries();
        } catch (error) {
            console.error('Error deleting entry:', error);
            showOverlay('Error deleting entry');
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
        <div className='admin-container' style={{ position: 'relative' }}>
            <h1>Data Management</h1>
            {showForm && (
                <div className='admin-form-main'>
                    <form className='admin-form' onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="name" value={form.name} onChange={handleInputChange} required />
                        </label>
                        <br />
                        <label>
                            Phone:
                            <input type="text" name="phone" value={form.phone} onChange={handleInputChange} required />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input type="email" name="email" value={form.email} onChange={handleInputChange} required />
                        </label>
                        <br />
                        <label>
                            Place:
                            <input type="text" name="place" value={form.place} onChange={handleInputChange} required />
                        </label>
                        <br />
                        <label>
                            Message:
                            <textarea name="message" value={form.message} onChange={handleInputChange} required />
                        </label>
                        <br />
                        <button type="submit" disabled={loading}>
                            {loading ? 'Submitting...' : editId ? 'Update Entry' : 'Submit Entry'}
                        </button>
                        <span onClick={() => setShowForm(false)} style={{ width: '100%', textAlign: 'center' }}>Close</span>
                    </form>
                </div>
            )}

            {loading && <p>Loading...</p>}

            <div className='navigation-buttons'>
                <button onClick={handleShowEntryPage}>Entries</button>
                <button onClick={handleShowImageManager}>Popup Image</button>
            </div>
            {entryPage && (
                <>
                    <h2>Entries</h2>
                    <button className='entry-btn' onClick={handleDisplay}>New Entry</button>
                    <div className="admin-table">
                        <table id='customers' border="1">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Place</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entries.map((entry, index) => (
                                    <tr key={entry._id}>
                                        <td>{index + 1}</td>
                                        <td>{entry.name}</td>
                                        <td>{entry.phone}</td>
                                        <td>{entry.email}</td>
                                        <td>{entry.place}</td>
                                        <td>{entry.message}</td>
                                        <td>{formatDate(entry.createdAt)}</td>
                                        <td className='btn'>
                                            <span className='btn-btn' onClick={() => handleEdit(entry)}><PiNotePencil /></span>
                                            <span onClick={() => handleDelete(entry._id)}><MdDelete /></span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
            {imageManager && (
                <>
                    <h2>Popup Image Manager</h2>
                    <ImageUploader onUpload={handleUpload} />
                    <ImageGallery key={refresh} />
                </>
            )}
            {overlay.visible && (
                <Overlay message={overlay.message} onClose={handleCloseOverlay} />
            )}


        </div>
    );
};

export default Admin;





