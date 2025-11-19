import { useState } from 'react';
import MCQQuestion from '../components/MCQQuestion';
import { mcqs } from '../data/mcqs';

export default function MCQPage() {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const topics = ['all', ...new Set(mcqs.map(q => q.topic))];

  let filteredQuestions = mcqs;

  // Filter by topic
  if (selectedTopic !== 'all') {
    filteredQuestions = filteredQuestions.filter(q => q.topic === selectedTopic);
  }

  // Filter by difficulty
  if (selectedDifficulty !== 'all') {
    filteredQuestions = filteredQuestions.filter(q => q.difficulty.toLowerCase() === selectedDifficulty);
  }

  return (
    <div className="page">
      <div className="filters">
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="select"
        >
          {topics.map(topic => (
            <option key={topic} value={topic}>
              {topic === 'all' ? 'Tous les sujets' : topic}
            </option>
          ))}
        </select>

        <div className="difficulty-filters">
          <button
            onClick={() => setSelectedDifficulty('all')}
            className={`difficulty-filter-btn ${selectedDifficulty === 'all' ? 'active' : ''}`}
          >
            Tous
          </button>
          <button
            onClick={() => setSelectedDifficulty('base')}
            className={`difficulty-filter-btn base ${selectedDifficulty === 'base' ? 'active' : ''}`}
          >
            Base
          </button>
          <button
            onClick={() => setSelectedDifficulty('junior')}
            className={`difficulty-filter-btn junior ${selectedDifficulty === 'junior' ? 'active' : ''}`}
          >
            Junior
          </button>
          <button
            onClick={() => setSelectedDifficulty('intermédiaire')}
            className={`difficulty-filter-btn intermédiaire ${selectedDifficulty === 'intermédiaire' ? 'active' : ''}`}
          >
            Inter
          </button>
        </div>
      </div>

      <MCQQuestion questions={filteredQuestions} topic="all" />
    </div>
  );
}
