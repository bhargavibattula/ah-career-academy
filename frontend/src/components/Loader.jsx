export default function Loader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#F8FAFC]">
      <div className="relative flex items-center justify-center">
        {/* Animated outer circle */}
        <div className="w-16 h-16 rounded-full border-4 border-blue-100 border-t-[#2563EB] animate-spin" />
        {/* Ping pulse inside */}
        <div className="absolute w-8 h-8 rounded-full bg-blue-500/10 animate-ping" />
      </div>
      <p className="mt-5 text-sm font-bold text-slate-500 tracking-wide animate-pulse">Loading AH Career Academy...</p>
    </div>
  );
}
