function fixGeminiJsonResponse(rawResponse) {
  try {
    let fixed = rawResponse;

    // 1️⃣ যদি পুরো response string হয় → clean + parse
    if (typeof fixed === "string") {
      fixed = fixed
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      fixed = JSON.parse(fixed);
    }

    // 2️⃣ যদি travel_plan string হয় → parse
    if (
      typeof fixed === "object" &&
      fixed !== null &&
      typeof fixed.travel_plan === "string"
    ) {
      fixed.travel_plan = JSON.parse(
        fixed.travel_plan
          .replace(/```json/gi, "")
          .replace(/```/g, "")
          .trim(),
      );
    }

    // 3️⃣ যদি double wrapped হয় → unwrap
    if (fixed && fixed.travel_plan && fixed.travel_plan.travel_plan) {
      fixed.travel_plan = fixed.travel_plan.travel_plan;
    }

    // 4️⃣ Final check
    if (
      typeof fixed !== "object" ||
      fixed === null ||
      !fixed.travel_plan ||
      typeof fixed.travel_plan !== "object"
    ) {
      return {
        success: false,
        error: "Invalid Gemini response structure",
        raw: fixed,
      };
    }

    return {
      success: true,
      data: fixed,
    };
  } catch (err) {
    return {
      success: false,
      error: "Failed to fix Gemini JSON response",
      raw: err.message || err,
    };
  }
}

export { fixGeminiJsonResponse as cleanTravelData };
