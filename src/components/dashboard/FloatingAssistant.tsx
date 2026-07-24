import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Send,
  User,
  X,
  LoaderCircle,
} from "lucide-react";

import { useGemini } from "../../hooks/useGemini";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);

  const [prompt, setPrompt] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "👋 Hello! I'm Ocean AI.\n\nAsk me anything about marine pollution, plastic waste, ocean conservation, or environmental monitoring.",
    },
  ]);

  const { send, loading } = useGemini();

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function handleSend() {
    if (!prompt.trim()) return;

    const question = prompt;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
      },
    ]);

    setPrompt("");

    const answer = await send(question);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: answer,
      },
    ]);
  }

  return (
    <>
      {/* Floating Button */}

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-cyan-500 text-black shadow-xl"
      >
        {open ? (
          <X className="mx-auto" />
        ) : (
          <Bot className="mx-auto" />
        )}
      </motion.button>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 40,
            }}
            className="fixed bottom-28 right-8 z-50 glass w-[390px] max-w-[95vw] rounded-3xl overflow-hidden"
          >

            {/* Header */}

            <div className="bg-cyan-500/10 border-b border-white/10 p-5 flex justify-between items-center">

              <div>

                <h2 className="font-bold text-lg">
                  Ocean AI
                </h2>

                <p className="text-green-400 text-sm">
                  ● Gemini Connected
                </p>

              </div>

              <Bot className="text-cyan-400" />

            </div>

            {/* Chat */}

            <div className="h-[420px] overflow-y-auto p-5 space-y-5">

              {messages.map((message, index) => (

                <div
                  key={index}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
                      message.role === "user"
                        ? "bg-cyan-500 text-black"
                        : "bg-slate-800 text-white"
                    }`}
                  >

                    <div className="flex items-center gap-2 mb-2">

                      {message.role === "assistant" ? (
                        <Bot size={16} />
                      ) : (
                        <User size={16} />
                      )}

                      <span className="text-xs opacity-70">

                        {message.role === "assistant"
                          ? "Ocean AI"
                          : "You"}

                      </span>

                    </div>

                    {message.text}

                  </div>

                </div>

              ))}

              {loading && (

                <div className="flex gap-2 items-center text-cyan-400">

                  <LoaderCircle
                    className="animate-spin"
                    size={18}
                  />

                  Ocean AI is thinking...

                </div>

              )}

              <div ref={bottomRef} />

            </div>

            {/* Input */}

            <div className="border-t border-white/10 p-4 flex gap-3">

              <input
                value={prompt}
                onChange={(e) =>
                  setPrompt(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Ask Ocean AI..."
                className="flex-1 rounded-xl bg-slate-800 px-4 py-3 outline-none"
              />

              <button
                disabled={loading}
                onClick={handleSend}
                className="rounded-xl bg-cyan-500 px-4 text-black hover:bg-cyan-400 disabled:opacity-50"
              >

                <Send size={18} />

              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}