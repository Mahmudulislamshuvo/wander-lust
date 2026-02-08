const QuickSuggestion = () => {
  return (
    <>
      {/* <!-- Quick Suggestion Tags --> */}
      <div className="flex justify-center gap-3 mt-4 text-xs font-medium text-slate-500">
        <span className="hover:text-emerald-600 cursor-pointer transition-colors">
          ✨ 3 Days in Tokyo
        </span>
        <span className="w-1 h-1 bg-slate-300 rounded-full mt-2"></span>
        <span className="hover:text-emerald-600 cursor-pointer transition-colors">
          🍷 Wine tasting in Tuscany
        </span>
        <span className="w-1 h-1 bg-slate-300 rounded-full mt-2"></span>
        <span className="hover:text-emerald-600 cursor-pointer transition-colors">
          🏔️ Hiking in Patagonia
        </span>
      </div>
    </>
  );
};

export default QuickSuggestion;
