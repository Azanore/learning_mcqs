import { useState } from 'react';
import MCQQuestion from '../components/MCQQuestion';
import { mcqs } from '../data/mcqs';

export default function MCQPage() {
  const [selectedTopic, setSelectedTopic] = useState('all');

  const topics = ['all', ...new Set(mcqs.map(q => q.topic))];

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
      </div>

      <MCQQuestion questions={mcqs} topic={selectedTopic} />
    </div>
  );
}
