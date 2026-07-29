import { GoogleGenerativeAI } from "@google/generative-ai";
import Doctor from "../models/Doctor.js";

let genAI;
const getGenAI = () => {
  if (!genAI) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }
  return genAI;
};

export const askAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "GEMINI_API_KEY is not set on the server",
      });
    }

    const generateWithRetry = async (message) => {
      const models = ["gemini-2.5-flash", "gemini-2.5-flash-lite"];
      let lastError;

      for (const modelName of models) {
        for (let attempt = 1; attempt <= 2; attempt++) {
          try {
            const model = getGenAI().getGenerativeModel({
              model: modelName,
            });

            const prompt = `
You are an AI Healthcare Assistant.

Rules:
1. Never provide final diagnosis.
2. Suggest possible causes.
3. Recommend a doctor speciality.
4. Give simple health advice.
5. Mention speciality clearly.

User Symptoms:
${message}
`;

            const result = await model.generateContent(prompt);
            return await result.response;
          } catch (err) {
            lastError = err;
            const is503 =
              err?.status === 503 ||
              err?.message?.includes("503") ||
              err?.message?.includes("overloaded") ||
              err?.message?.includes("high demand");

            if (is503) {
              await new Promise((r) => setTimeout(r, 1500 * attempt));
              continue;
            }
            throw err;
          }
        }
      }
      throw lastError;
    };

    const response = await generateWithRetry(message);

    const text =
      response.text();

    let speciality = "";

    const lowerText =
      text.toLowerCase();

    if (
      lowerText.includes(
        "dermatologist"
      )
    ) {
      speciality =
        "Dermatologist";
    }

    else if (
      lowerText.includes(
        "cardiologist"
      )
    ) {
      speciality =
        "Cardiologist";
    }

    else if (
      lowerText.includes(
        "neurologist"
      )
    ) {
      speciality =
        "Neurologist";
    }

    else if (
      lowerText.includes(
        "dentist"
      )
    ) {
      speciality =
        "Dentist";
    }

    else if (
      lowerText.includes(
        "orthopedic"
      )
    ) {
      speciality =
        "Orthopedic";
    }

    else if (
      lowerText.includes(
        "gynecologist"
      )
    ) {
      speciality =
        "Gynecologist";
    }

    const doctors =
      speciality
        ? await Doctor.find({
            speciality,
          }).limit(6)
        : [];

    res.status(200).json({
      success: true,
      reply: text,
      speciality,
      doctors,
    });

  } catch (error) {

    console.log(error);

    const isOverloaded =
      error?.message?.includes("503") ||
      error?.message?.includes("overloaded") ||
      error?.message?.includes("high demand");

    res.status(isOverloaded ? 503 : 500).json({
      success: false,
      message: isOverloaded
        ? "AI service is busy right now. Please try again in a moment."
        : error.message,
    });

  }
};