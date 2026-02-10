"use client";

import { createNewTravelPlan } from "@/actions";
import { ArrowRight, Bot, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TextAreaAndSubmit = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGeneratePlan = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      const newTravelPlan = await createNewTravelPlan(prompt);
      if (newTravelPlan) {
        router.push(`/plan/${newTravelPlan.slug}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 flex items-start p-3 transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500">
      <div className="p-4 pt-5">
        <Bot className="w-7 h-7 text-emerald-600" />
      </div>
      <textarea
        className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-lg text-slate-900 placeholder:text-slate-400 py-4 px-3 resize-none h-[140px] leading-relaxed "
        placeholder="e.g. A romantic 4-day trip to Paris in Spring, focusing on art museums and hidden cafes..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleGeneratePlan();
          }
        }}
      ></textarea>
      <div className="p-2 pt-3">
        <button
          onClick={handleGeneratePlan}
          className="bg-slate-900 text-white p-3.5 rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-md group-focus-within:bg-emerald-600 hover:shadow-lg"
        >
          {loading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <ArrowRight className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TextAreaAndSubmit;
