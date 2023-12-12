interface LabelProps {
  text: string;
  className?: string;
  htmlFor: string;
}

export function Label({ text, htmlFor, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-gray-700 text-sm font-bold mb-2 ${className}`}
    >
      {text}
    </label>
  );
}
