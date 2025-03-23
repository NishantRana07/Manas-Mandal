import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Quiz = () => {
  const [btnName, setBtnName] = useState("Next");
  const [questionIndex, setQuestionIndex] = useState(1);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const scoringScale = {
    "0": "Did not apply to me at all",
    "1": "Applied to me to some degree, or some of the time",
    "2": "Applied to me to a considerable degree, or a good part of the time",
    "3": "Applied to me very much, or most of the time",
  };

  const dass21 = {
    "DASS21": {
      "categories": {
        "Stress": [1, 2, 3, 4, 5, 6, 7],
        "Anxiety": [8, 9, 10, 11, 12, 13, 14],
        "Depression": [15, 16, 17, 18, 19, 20, 21],
      },
      "questions": {
        "1": "I found it hard to wind down.",
        "2": "I tended to over-react to situations.",
        "3": "I felt that I was using a lot of nervous energy.",
        "4": "I found myself getting agitated.",
        "5": "I found it difficult to relax.",
        "6": "I was intolerant of anything that kept me from getting on with what I was doing.",
        "7": "I felt that I was rather touchy.",
        "8": "I was aware of dryness of my mouth.",
        "9": "I experienced breathing difficulty (e.g., excessively rapid breathing, breathlessness in the absence of physical exertion).",
        "10": "I had a feeling of shakiness (e.g., in the hands).",
        "11": "I found myself in situations that made me so anxious I was most relieved when they ended.",
        "12": "I had a feeling of faintness.",
        "13": "I felt that I was about to panic.",
        "14": "I was aware of the action of my heart in the absence of physical exertion (e.g., sense of heart rate increase or heart missing a beat).",
        "15": "I couldn't seem to experience any positive feeling at all.",
        "16": "I found it difficult to work up the initiative to do things.",
        "17": "I felt that I had nothing to look forward to.",
        "18": "I felt down-hearted and blue.",
        "19": "I was unable to become enthusiastic about anything.",
        "20": "I felt I wasn't worth much as a person.",
        "21": "I felt that life was meaningless.",
      },
      "severity_levels": {
        "Stress": { "Normal": 0, "Mild": 15, "Moderate": 19, "Severe": 26, "Extremely Severe": 34 },
        "Anxiety": { "Normal": 0, "Mild": 8, "Moderate": 10, "Severe": 15, "Extremely Severe": 20 },
        "Depression": { "Normal": 0, "Mild": 10, "Moderate": 14, "Severe": 21, "Extremely Severe": 28 },
      },
    },
  };

  const handleNext = () => {
    if (!responses[questionIndex] && responses[questionIndex] !== 0) return alert("Please select an answer!");

    if (questionIndex < 21) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null);
    } else {
      calculateResults();
    }
  };

  const handleSelection = (value) => {
    if (value !== undefined) {
      setResponses({ ...responses, [questionIndex]: parseInt(value) });
      setSelectedOption(value);
    } else {
      alert("Please select a valid answer!");
    }
  };

  const calculateResults = () => {
    let categoryScores = { Stress: 0, Anxiety: 0, Depression: 0 };

    Object.entries(dass21.DASS21.categories).forEach(([category, questions]) => {
      let totalScore = questions.reduce((sum, q) => sum + (responses[q] || 0), 0) * 2;
      categoryScores[category] = totalScore;
    });

    let finalResult = Object.entries(categoryScores).reduce((acc, [category, score]) => {
      let severity = "Normal";
      Object.entries(dass21.DASS21.severity_levels[category]).forEach(([level, threshold]) => {
        if (score >= threshold) severity = level;
      });
      acc[category] = severity;
      return acc;
    }, {});

    setResult(finalResult);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 flex-col">
      {/* <h3 className="absolute top-4 text-2xl font-bold font-mono">Manas Mandal</h3> */}
      <div className="w-max p-12 gap-4 relative rounded-3xl shadow-lg">
        <p className="absolute top-4 left-4">{questionIndex}/21</p>
        <p className="text-2xl text-center font-bold mb-4 font-mono">DASS 21 Quiz</p>
        <p className="text-m text-start mb-4 font-mono">{dass21.DASS21.questions[questionIndex]}</p>

        <Select onValueChange={handleSelection} value={selectedOption}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an answer" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(scoringScale).map(([key, value]) => (
              <SelectItem key={key} value={key}>{value}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button type="submit" className="mt-6" onClick={handleNext}>
          {questionIndex < 21 ? "Next" : "Submit"}
        </Button>
      </div>

      {result && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold mb-2">Your Results</h2>
          <p><strong>Stress:</strong> {result.Stress}</p>
          <p><strong>Anxiety:</strong> {result.Anxiety}</p>
          <p><strong>Depression:</strong> {result.Depression}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
