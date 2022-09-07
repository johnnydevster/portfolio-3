export default function AnimationElements() {
  return (
    <>
      <div
        className={`absolute z-[-10] h-full bg-gradient-to-r from-slate-dark to-slate-dark-lighter inset-0 rounded-lg`}
      />
      <div
        className={`absolute z-[-20] h-full top-[4px] left-[4px] right-[4px] bg-gradient-to-r from-yellow-600 to-red-400 rounded-lg group-hover:translate-y-[2px] transition`}
      />
    </>
  );
}
