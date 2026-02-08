import { ArrowRight, Bot } from "lucide-react";

const TextAreaAndSubmit = () => {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 flex items-start p-3 transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500">
      <div className="p-4 pt-5">
        <Bot className="w-7 h-7 text-emerald-600" />
      </div>
      <textarea
        className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-lg text-slate-900 placeholder:text-slate-400 py-4 px-3 resize-none h-[140px] leading-relaxed "
        placeholder="e.g. A romantic 4-day trip to Paris in Spring, focusing on art museums and hidden cafes..."
      ></textarea>
      <div className="p-2 pt-3">
        <a href="./plan.html">
          <button className="bg-slate-900 text-white p-3.5 rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-md group-focus-within:bg-emerald-600 hover:shadow-lg">
            <ArrowRight className="w-6 h-6" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default TextAreaAndSubmit;
