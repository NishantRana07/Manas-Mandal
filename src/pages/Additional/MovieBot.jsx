import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const MovieBot = () => {
  const [step, setStep] = useState(0); // Track the current question step
  const [answers, setAnswers] = useState({
    genre: "",
    mood: "",
    language: "",
  });
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm MovieBot. Let's find the perfect movie for you!" },
  ]);
  const [userInput, setUserInput] = useState(""); // State for user input

  const questions = [
    {
      question: "What genre of movies do you prefer?",
      options: ["Action", "Comedy", "Drama", "Horror", "Romance"],
      key: "genre",
    },
    {
      question: "What is your current mood?",
      options: ["Happy", "Sad", "Excited", "Relaxed", "Adventurous"],
      key: "mood",
    },
    {
      question: "What language do you prefer?",
      options: ["English", "Hindi", "Spanish", "French", "Other"],
      key: "language",
    },
  ];

  const handleAnswer = (option) => {
    const currentQuestion = questions[step];
    setAnswers({ ...answers, [currentQuestion.key]: option });

    // Add user's answer to messages
    setMessages((prev) => [...prev, { type: "user", text: option }]);

    if (step < questions.length - 1) {
      // Move to the next question and add it to messages
      setStep(step + 1);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: questions[step + 1].question },
      ]);
    } else {
      // End of questions
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Thank you! Your preferences have been collected." },
      ]);
      console.log("Collected Data:", answers);
    }
  };

  const handleSend = () => {
    if (userInput.trim()) {
      setMessages((prev) => [...prev, { type: "user", text: userInput }]);
      setUserInput(""); // Clear input after sending
    }
  };

  return (
    <div className="mt-16 p-8 max-w-lg h-screen mx-auto bg-gray-100 shadow-lg rounded-lg flex flex-col">
      <h1 className="text-2xl font-bold text-center mb-6">MovieBot</h1>
      <ScrollArea className="flex flex-col gap-4 flex-grow overflow-y-auto p-4 bg-white rounded-lg shadow-inner">
        {/* Chat Messages */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            <Card
              className={`${
                message.type === "bot"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } p-4 rounded-lg max-w-xs mb-2`}
            >
              <CardContent>{message.text}</CardContent>
            </Card>
          </div>
        ))}
        {/* User Options */}
        {step < questions.length && (
          <div className="flex flex-wrap gap-4 mt-4">
            {questions[step].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(option)}
                variant="outline"
                className="hover:bg-gray-300 transition"
              >
                {option}
              </Button>
            ))}
          </div>
        )}
        {/* Input Box and Send Button */}
        {step === questions.length && (
          <div className="flex mt-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-grow border rounded-lg p-2"
              placeholder="Type your message..."
            />
            <Button onClick={handleSend} className="ml-2">Send</Button>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default MovieBot;