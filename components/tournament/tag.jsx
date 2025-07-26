export default function Tag({ text }) {
  return (
    <p className="p-4 bg-neutral-800 w-fit rounded-4xl py-1.5 text-sm hover:bg-neutral-700">
      {text}
    </p>
  );
}
