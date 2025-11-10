'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Counter
      </h2>
      <div className="text-6xl font-bold text-zinc-900 dark:text-zinc-50">
        {count}
      </div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="flex h-12 w-32 items-center justify-center rounded-lg bg-red-500 px-6 text-white font-medium transition-colors hover:bg-red-600 active:bg-red-700"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="flex h-12 w-32 items-center justify-center rounded-lg bg-green-500 px-6 text-white font-medium transition-colors hover:bg-green-600 active:bg-green-700"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
