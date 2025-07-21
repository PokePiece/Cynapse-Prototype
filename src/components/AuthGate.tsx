import { useState } from 'react';

const USER_HASH = import.meta.env.VITE_APP_USER_HASH;
const PASS_HASH = import.meta.env.VITE_APP_PASS_HASH;

function sha256(str: string): Promise<string> {
  const buffer = new TextEncoder().encode(str);
  return crypto.subtle.digest('SHA-256', buffer).then((digest) =>
    Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
  );
}

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [isAuthed, setAuthed] = useState(false);
  const [inputUser, setInputUser] = useState('');
  const [inputPass, setInputPass] = useState('');

  const handleLogin = async () => {
    const userHash = await sha256(inputUser);
    const passHash = await sha256(inputPass);

    if (userHash === USER_HASH && passHash === PASS_HASH) {
      setAuthed(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (isAuthed) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-sm">
        <h2 className="text-xl mb-4">🔒 Cynapse Login</h2>
        <input
          className="mb-2 p-2 w-full rounded bg-gray-800 border border-gray-700"
          placeholder="Username"
          value={inputUser}
          onChange={(e) => setInputUser(e.target.value)}
        />
        <input
          type="password"
          className="mb-4 p-2 w-full rounded bg-gray-800 border border-gray-700"
          placeholder="Password"
          value={inputPass}
          onChange={(e) => setInputPass(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 transition rounded p-2"
        >
          Enter
        </button>
      </div>
    </div>
  );
}
