import React, { useState } from 'react';
import axios from 'axios';
import Log from './Log';

const Home = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [logData, setLogData] = useState({
    level: '',
    message: '',
    resourceId: '',
    timestamp: '',
    traceId: '',
    spanId: '',
    commit: '',
    metadata: {
      parentResourceId: '',
    },
  });

  const searchLogs = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/search?query=${query}`);
      setResults(response.data.hits);
    } catch (error) {
      console.error('Error searching logs:', error);
    }
  };

  const ingestLog = async () => {
    try {
        await axios.post('http://localhost:3000/ingest', { log: logData }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      // Optionally, you can trigger a search after ingesting a log
      searchLogs();
    } catch (error) {
      console.error('Error ingesting log:', error);
    }
  };

  return (
    <div>
      <h1>Log Query Interface</h1>
      {/* Log Ingestion Form */}
      <div>
        <h2>Ingest Log</h2>
        <form>
          <label>
            Log Data (JSON):
            <textarea
              value={JSON.stringify(logData, null, 2)}
              onChange={(e) => {
                try {
                  setLogData(JSON.parse(e.target.value));
                } catch (error) {
                  console.error('Invalid JSON format:', error);
                }
              }}
            />
          </label>
          <button type="button" onClick={ingestLog}>
            Ingest Log
          </button>
        </form>
      </div>

      {/* Search Interface */}
      <div>
        <h2>Search Logs</h2>
        <input
          type="text"
          placeholder="Enter search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchLogs}>Search</button>
        <div>
          {results.map((log, index) => (
            <Log key={index} log={log} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Home;
