import React, { useState, useEffect } from 'react';
import { GoPlay } from 'react-icons/go';
import { IoPauseCircleOutline } from 'react-icons/io5';
import { MdReplay } from 'react-icons/md';
import { IoIosMusicalNotes } from 'react-icons/io';
import './SearchBar.css';

const TextToSpeechButton = () => {
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [utterance, setUtterance] = useState(null);

    const fixedVoiceName = "Google US English";

    const fetchVoice = () => {
        const availableVoices = speechSynthesis.getVoices();
        const voice = availableVoices.find(voice => voice.name === fixedVoiceName) || availableVoices[0];
        setSelectedVoice(voice);
    };

    useEffect(() => {
        fetchVoice();
        speechSynthesis.onvoiceschanged = fetchVoice;
        return () => {
            speechSynthesis.onvoiceschanged = null;
        };
    }, []);

    const handleSpeak = () => {
        const content = document.getElementById('readable-content')?.innerText.trim();
        if (content) {
            const newUtterance = new SpeechSynthesisUtterance(content);
            newUtterance.lang = 'en-US';
            newUtterance.voice = selectedVoice;
            setUtterance(newUtterance);
            setIsSpeaking(true);
            speechSynthesis.speak(newUtterance);
            newUtterance.onend = () => setIsSpeaking(false);
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
        if (utterance) {
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

    return (
        <div className='speech-container'>
            <button onClick={handleSpeak}><IoIosMusicalNotes /></button>
            {isSpeaking ? (
                <button onClick={handlePause}>
                    <IoPauseCircleOutline />
                </button>
            ) : (
                <button onClick={handleResume}>
                    <GoPlay />
                </button>
            )}
            <button onClick={handleRestart}>
                <MdReplay />
            </button>
        </div>
    );
};

export default TextToSpeechButton;
