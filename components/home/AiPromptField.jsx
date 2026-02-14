import React, { Suspense } from "react";
import GlowEffect from "./GlowEffect";
import TextAreaAndSubmit from "./TextAreaAndSubmit";
import QuickSuggestion from "./QuickSuggestion";

const AiPromptField = () => {
  return (
    <div className="w-full max-w-3xl mb-24 relative group z-20">
      <GlowEffect />
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <TextAreaAndSubmit />
      </Suspense>
      <QuickSuggestion />
    </div>
  );
};

export default AiPromptField;
