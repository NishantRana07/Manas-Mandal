import { React, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Dass = () => {
  const [questionIndex, setQuestionIndex] = useState(1);
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const scoringScale = {
    "0": "Did not apply to me at all",
    "1": "Applied to me to some degree, or some of the time",
    "2": "Applied to me to a considerable degree, or a good part of the time",
    "3": "Applied to me very much, or most of the time",
  };

  const dass42 = {
    "DASS42": {
      "categories": {
        "Stress": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        "Anxiety": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
        "Depression": [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
      },
      "questions": Object.fromEntries(
        [...Array(42).keys()].map((i) => [i + 1, `Question ${i + 1}`])
      ),
      "severity_levels": {
        "Stress": { "Normal": 0, "Mild": 18, "Moderate": 25, "Severe": 33, "Extremely Severe": 40 },
        "Anxiety": { "Normal": 0, "Mild": 10, "Moderate": 17, "Severe": 24, "Extremely Severe": 33 },
        "Depression": { "Normal": 0, "Mild": 14, "Moderate": 21, "Severe": 28, "Extremely Severe": 35 },
      },
    },
  };

  const handleNext = () => {
    if (!responses[questionIndex] && responses[questionIndex] !== 0) {
      return alert("Please select an answer!");
    }

    if (questionIndex < 42) {
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

    Object.entries(dass42.DASS42.categories).forEach(([category, questions]) => {
      let totalScore = questions.reduce((sum, q) => sum + (responses[q] || 0), 0) * 2;
      categoryScores[category] = totalScore;
    });

    let finalResult = Object.entries(categoryScores).reduce((acc, [category, score]) => {
      let severity = "Normal";
      Object.entries(dass42.DASS42.severity_levels[category]).forEach(([level, threshold]) => {
        if (score >= threshold) severity = level;
      });
      acc[category] = severity;
      return acc;
    }, {});

    setResult(finalResult);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 flex-col">
      <div className="w-max p-12 gap-4 relative rounded-3xl shadow-lg">
        <p className="absolute top-4 left-4">{questionIndex}/42</p>
        <p className="text-2xl text-center font-bold mb-4 font-mono">DASS 42 Quiz</p>
        <p className="text-m text-start mb-4 font-mono">{dass42.DASS42.questions[questionIndex]}</p>

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
          {questionIndex < 42 ? "Next" : "Submit"}
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

export default Dass;
