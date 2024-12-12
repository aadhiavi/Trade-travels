import React, { useState, useEffect } from 'react';
import { GoPlay } from 'react-icons/go';
import { IoPauseCircleOutline } from 'react-icons/io5';
import { MdReplay } from 'react-icons/md';
import './SearchBar.css';
import { IoIosMusicalNotes } from 'react-icons/io';

const TextToSpeechButton = () => {
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [utterance, setUtterance] = useState(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const fetchVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        setVoices(availableVoices);

        if (!selectedVoice && availableVoices.length > 0) {
            setSelectedVoice(availableVoices[0]);
        }
    };

    const handleSpeak = () => {
        const specificContent = document.getElementById('readable-content');

        if (specificContent && specificContent.innerText.trim()) {
            const newUtterance = new SpeechSynthesisUtterance(specificContent.innerText);
            newUtterance.lang = 'en-US';
            newUtterance.voice = selectedVoice;
            newUtterance.rate = 1;
            newUtterance.pitch = 1;
            newUtterance.volume = 1;

            setUtterance(newUtterance);
            setIsSpeaking(true);

            speechSynthesis.speak(newUtterance);

            newUtterance.onend = () => {
                setIsSpeaking(false);
            };
        } else {
            alert('No readable content found.');
        }
    };

    const handlePause = () => {
        if (isSpeaking) {
            speechSynthesis.pause();
            setIsSpeaking(false);
        }
    };

    const handleResume = () => {
        if (!isSpeaking && utterance) {
            speechSynthesis.resume();
            setIsSpeaking(true);
        }
    };

    const handleRestart = () => {
        if (utterance) {
            speechSynthesis.cancel();
            handleSpeak();
        }
    };

    useEffect(() => {
        fetchVoices();
        speechSynthesis.onvoiceschanged = fetchVoices;
    }, []);

    return (
        <div className='speech-container'>
            <button onClick={handleSpeak}><IoIosMusicalNotes /></button>
            {isSpeaking ? <button onClick={handlePause} disabled={!isSpeaking}>
                <IoPauseCircleOutline />
            </button>
                :
                <button onClick={handleResume} disabled={isSpeaking}>
                    <GoPlay />
                </button>}
            <button onClick={handleRestart}>
                <MdReplay />
            </button>
        </div>
    );
};

export default TextToSpeechButton;