import { useState } from "react";

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
  const [step, setStep] = useState(STEPS.GREETING);
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [phone, setPhone] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! May I have a moment to chat with you?" },
  ]);

  const addMsg = (text, from = "bot") => {
    setMessages((prev) => [...prev, { from, text }]);
  };

  const handleYes = () => {
    addMsg("Yes", "user");
    setTimeout(() => {
      addMsg("Great! What's your name?");
      setStep(STEPS.NAME);
    }, 400);
  };

  const handleNo = () => {
    addMsg("No", "user");
    setTimeout(() => {
      addMsg("No worries! Feel free to reach out anytime. 😊");
      setStep(STEPS.DONE);
    }, 400);
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
        window.open(`https://wa.me/919963486280?text=${msg}`, "_blank");
      }, 1200);
    }, 400);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0b1257] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#1a2580] transition-colors"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#0b1257] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              AH
            </div>
            <div>
              <div className="text-white font-semibold text-sm">AH Career</div>
              <div className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                Online
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/60 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    msg.from === "user"
                      ? "bg-[#0b1257] text-white rounded-br-sm"
                      : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-3 bg-white">
            {step === STEPS.GREETING && (
              <div className="flex gap-2 justify-center">
                <button
                  onClick={handleYes}
                  className="flex-1 bg-[#0b1257] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#1a2580] transition-colors"
                >
                  Yes
                </button>
                <button
                  onClick={handleNo}
                  className="flex-1 border border-gray-300 text-gray-600 text-sm font-semibold py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  No
                </button>
              </div>
            )}

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
                  →
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
                  →
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

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919963486280"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 left-6 z-50 w-12 h-12 bg-green-500 rounded-full shadow-xl flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
