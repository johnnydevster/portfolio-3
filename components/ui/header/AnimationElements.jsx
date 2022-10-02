export default function AnimationElements() {
  return (
    <>
      <div
        className={`absolute z-[20] h-full bg-gradient-to-r from-slate-dark to-slate-dark-lighter inset-0 rounded-lg`}
      />
      <div
        className={`absolute z-[10] h-full top-[4px] left-[4px] right-[4px] bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg group-hover:translate-y-[2px] transition`}
      />
    </>
  );
}
