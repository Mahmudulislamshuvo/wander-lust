import React from "react";
import GlowEffect from "./GlowEffect";
import TextAreaAndSubmit from "./TextAreaAndSubmit";
import QuickSuggestion from "./QuickSuggestion";

const AiPromptField = () => {
  return (
    <div className="w-full max-w-3xl mb-24 relative group z-20">
      <GlowEffect />
      <TextAreaAndSubmit />
      <QuickSuggestion />
    </div>
  );
};

export default AiPromptField;
