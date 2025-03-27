
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [questions, setQuestions] = useState([]);
    const [userResponses, setUserResponses] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [response, setResponse] = useState('');

    useEffect(() => {
        // Fetch questions from the JSON file
        const fetchQuestions = async () => {
            const result = await axios.get('/path/to/questions.json');
            setQuestions(result.data.questions);
        };
        fetchQuestions();
    }, []);

    const handleResponseChange = (event) => {
        setResponse(event.target.value);
    };

    const handleNextQuestion = async () => {
        if (currentQuestionIndex < questions.length - 1) {
            setUserResponses([...userResponses, response]);
            setResponse('');
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            await sendToGeminAPI([...userResponses, response]);
        }
    };

    const sendToGeminAPI = async (responses) => {
        const prompt = responses.join(' ');
        // Call the Gemin API with the prompt
        const geminResponse = await axios.post('https://api.gemin.com/endpoint', { prompt });
        console.log(geminResponse.data);
    };

    return (
        <div>
            {questions.length > 0 && currentQuestionIndex < questions.length ? (
                <div>
                    <h2>{questions[currentQuestionIndex]}</h2>
                    <input type="text" value={response} onChange={handleResponseChange} />
                    <button onClick={handleNextQuestion}>Next</button>
                </div>
            ) : (
                <h2>Thank you for your responses!</h2>
            )}
        </div>
    );
};

export default Chatbot;
