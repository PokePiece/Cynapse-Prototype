'use client'

interface InputGroupProps {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputGroup({ label, type = 'text', value, onChange }: InputGroupProps) {
  return (
    <div className="flex items-center justify-between space-x-3">
      <label className="text-gray-300 text-sm whitespace-nowrap">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="flex-grow bg-gray-700 border border-gray-600 text-gray-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        style={type === 'color' ? { height: '32px', width: '64px', padding: 0 } : {}} // Specific style for color input
      />
    </div>
  );
}