import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col md:flex-row gap-4 items-center"
    >
      <input
        type="email"
        required
        className="px-4 py-2 border rounded"
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={submitted}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded font-bold"
        disabled={submitted}
      >
        Subscribe
      </button>
      {submitted && <span className="text-green-600 ml-4">Subscribed! (Simulation)</span>}
    </form>
  );
          }
