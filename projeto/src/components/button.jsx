export default function Button({ children, onClick, variant = 'primary' }) {
  const base = "px-6 py-2 rounded-md font-semibold transition-colors";
  const styles = variant === 'primary'
    ? "bg-green-900 text-white hover:bg-green-800"
    : "bg-white text-gray-400 border hover:text-green-900";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
