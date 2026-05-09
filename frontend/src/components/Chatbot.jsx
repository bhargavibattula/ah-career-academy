import { useState, useEffect, useRef } from "react";
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon 
} from "@heroicons/react/24/outline";

const STEPS = {
  GREETING: "greeting",
  NAME: "name",
  INTEREST: "interest",
  PHONE: "phone",
  DONE: "done",
};

const courses = [
  "FullStack Python", "Data Science", "Cyber Security",
  "Full Stack Java", "DevOps & Cloud", "AI Testing",
  "Gen AI Development", "Quantum Computing",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [step, setStep] = useState(STEPS.GREETING);
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [phone, setPhone] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! May I have a moment to chat with you?" },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, open]);

  // Auto-show greeting bubble after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) setShowGreeting(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [open]);

  const addMsg = (text, from = "bot") => {
    setMessages((prev) => [...prev, { from, text }]);
  };

  const handleYes = () => {
    setOpen(true);
    setShowGreeting(false);
    addMsg("Yes", "user");
    setTimeout(() => {
      addMsg("Great! What's your name?");
      setStep(STEPS.NAME);
    }, 400);
  };

  const handleNo = () => {
    setShowGreeting(false);
  };

  const handleName = () => {
    if (!name.trim()) return;
    addMsg(name, "user");
    setTimeout(() => {
      addMsg(`Nice to meet you, ${name}! Which course are you interested in?`);
      setStep(STEPS.INTEREST);
    }, 400);
  };

  const handleInterest = (course) => {
    setInterest(course);
    addMsg(course, "user");
    setTimeout(() => {
      addMsg(`Great choice! Please share your WhatsApp number so our ${course} expert can reach you.`);
      setStep(STEPS.PHONE);
    }, 400);
  };

  const handlePhone = () => {
    if (!phone.trim() || phone.length < 10) return;
    addMsg(phone, "user");
    setTimeout(() => {
      addMsg(`Thanks ${name}! Redirecting you to WhatsApp now... 🚀`);
      setStep(STEPS.DONE);
      setTimeout(() => {
        const msg = encodeURIComponent(
          `Hi! I'm ${name}, interested in ${interest}. Please share course details.`
        );
        window.open(`https://wa.me/919989241515?text=${msg}`, "_blank");
      }, 1200);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Greeting Bubble Trigger */}
      {showGreeting && !open && (
        <div className="flex flex-col items-end animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white rounded-2xl shadow-2xl p-6 mb-4 w-72 border border-gray-100 relative">
            <p className="text-gray-800 text-lg font-medium leading-tight">
              Hello! May I have a moment to chat with you?
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
          </div>
          
          <div className="flex gap-3 mb-4">
            <button 
              onClick={handleYes}
              className="bg-white text-gray-700 font-bold px-6 py-2.5 rounded-full shadow-lg hover:bg-gray-50 flex items-center gap-2 transition-all active:scale-95"
            >
              <span className="w-2.5 h-2.5 bg-gray-200 rounded-full"></span>
              Yes
            </button>
            <button 
              onClick={handleNo}
              className="bg-white text-gray-700 font-bold px-6 py-2.5 rounded-full shadow-lg hover:bg-gray-50 flex items-center gap-2 transition-all active:scale-95"
            >
              <span className="w-2.5 h-2.5 bg-gray-200 rounded-full"></span>
              No
            </button>
          </div>

          <div className="relative group cursor-pointer" onClick={() => { setOpen(true); setShowGreeting(false); }}>
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl bg-purple-100">
              <img 
                src="https://img.freepik.com/free-photo/young-beautiful-woman-customer-service-operator-with-headset-working-office_1303-19542.jpg" 
                alt="Support Agent" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
        </div>
      )}

      {/* Main Trigger Button (when bubble is hidden) */}
      {!open && !showGreeting && (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 bg-[#a78bfa] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#8b5cf6] transition-all transform hover:scale-105 active:scale-95"
        >
          <ChatBubbleLeftRightIcon className="w-8 h-8" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="w-80 sm:w-96 h-[500px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          {/* Header */}
          <div className="bg-[#0b1257] px-5 py-4 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-lg shadow-orange-500/20">
              AH
            </div>
            <div className="flex-1">
              <div className="text-white font-bold text-sm">AH Career Support</div>
              <div className="text-green-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse"></span>
                Active Now
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.from === "user"
                      ? "bg-[#0b1257] text-white rounded-br-none"
                      : "bg-white border border-gray-100 text-gray-700 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-4 bg-white shrink-0">
            {step === STEPS.NAME && (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleName()}
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
                />
                <button
                  onClick={handleName}
                  className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  <PaperAirplaneIcon className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === STEPS.INTEREST && (
              <div className="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto">
                {courses.map((c) => (
                  <button
                    key={c}
                    onClick={() => handleInterest(c)}
                    className="text-left text-xs bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 hover:bg-orange-50 hover:border-orange-300 transition-colors"
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}

            {step === STEPS.PHONE && (
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="WhatsApp number..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handlePhone()}
                  maxLength={10}
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400"
                />
                <button
                  onClick={handlePhone}
                  className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
                >
                  <PaperAirplaneIcon className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === STEPS.DONE && (
              <p className="text-center text-gray-500 text-xs py-1">
                Thanks for connecting! We'll reach out shortly.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
