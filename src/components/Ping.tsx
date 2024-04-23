'use client'

import { useState } from 'react';
import { exec } from 'child_process';

const SpeedTester: React.FC = () => {
  const [result, setResult] = useState<string>('');

  const runSpeedTest = () => {
    exec('fast', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      setResult(stdout);
      console.log(stdout , stderr)
    });
  };

  return (
    <div>
      <h1>Internet Speed Tester</h1>
      <button onClick={runSpeedTest}>Run Speed Test</button>
      <pre>{result}</pre>
    </div>
  );
};

export default SpeedTester;
