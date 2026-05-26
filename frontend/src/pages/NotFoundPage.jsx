import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFoundPage() {
  const [expression, setExpression] = useState("o_o");

  useEffect(() => {
    const expressions = ["o_o", "^_ ^", "o_O", "-_-", "T_T", "(>_<)", "(^o^)"];
    const interval = setInterval(() => {
      const randomExpr = expressions[Math.floor(Math.random() * expressions.length)];
      setExpression(randomExpr);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center relative overflow-hidden px-4 text-white">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 text-center flex flex-col items-center max-w-lg">
        {/* Animated Robot Illustration */}
        <motion.div
          className="relative w-48 h-48 mb-6 mt-4"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          {/* Antenna */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <motion.div 
              className="w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_15px_#38bdf8]"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <div className="w-1 h-6 bg-slate-500" />
          </div>

          {/* Robot Head */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-24 bg-slate-700 rounded-[2rem] border-4 border-slate-600 flex items-center justify-center p-3 shadow-xl">
            {/* Screen */}
            <div className="w-full h-full bg-[#1e293b] rounded-2xl flex items-center justify-center relative overflow-hidden border border-slate-500">
              {/* Scanlines effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
              
              {/* Animated Eyes / Expression */}
              <motion.span 
                key={expression}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sky-400 font-mono text-xl font-bold tracking-widest drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
              >
                {expression}
              </motion.span>
            </div>
          </div>

          {/* Ears */}
          <div className="absolute top-16 left-4 w-4 h-8 bg-slate-600 rounded-l-lg border-l border-y border-slate-500" />
          <div className="absolute top-16 right-4 w-4 h-8 bg-slate-600 rounded-r-lg border-r border-y border-slate-500" />

          {/* Body */}
          <div className="absolute top-[7.5rem] left-1/2 -translate-x-1/2 w-20 h-14 bg-slate-600 rounded-b-3xl border-x-4 border-b-4 border-slate-500 flex justify-center">
            {/* Power Indicator */}
            <motion.div 
              className="w-3 h-3 bg-emerald-400 rounded-full mt-2 shadow-[0_0_8px_#34d399]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Flying Booster Flame */}
          <motion.div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-10 bg-gradient-to-t from-transparent via-amber-500 to-orange-400 rounded-b-full filter blur-[2px]"
            animate={{
              height: [20, 36, 20],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* 404 Text */}
        <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 drop-shadow-[0_4px_12px_rgba(56,189,248,0.15)]">
          404
        </h1>
        
        <h2 className="mt-3 text-2xl font-black tracking-tight">
          Oops, Page Not Found!
        </h2>
        
        <p className="mt-4 text-sm font-medium leading-relaxed text-slate-400">
          The route you are looking for might have been drifted into deep space, 
          or perhaps it never existed in this system coordinate.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 px-8 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <HomeIcon className="w-5 h-5" />
            Take Me Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800/80 px-8 py-3.5 text-sm font-black text-slate-200 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
