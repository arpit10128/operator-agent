export type ModelPricing = {
  inputUsdPerMillionTokens: number;
  outputUsdPerMillionTokens: number;
};

export type SupportedProvider = "openrouter";

type SupportedChatModelDefinition = {
  id: string;
  provider: SupportedProvider;
  pricing: ModelPricing;
};

export const SUPPORTED_CHAT_MODELS = [
  // 1. Meta: Llama 3.3 70B Instruct (Excellent overall coding and reasoning logic)
  {
    id: "meta-llama/llama-3.3-70b-instruct:free",
    provider: "openrouter",
    pricing: {
      inputUsdPerMillionTokens: 0.05, // Dummy Price
      outputUsdPerMillionTokens: 0.1, // Dummy Price
    },
  },

  // 2. DeepSeek: DeepSeek-R1 (Exceptional chain-of-thought code logic and debugging)
  {
    id: "deepseek/deepseek-r1:free",
    provider: "openrouter",
    pricing: {
      inputUsdPerMillionTokens: 0.14, // Dummy Price
      outputUsdPerMillionTokens: 0.28, // Dummy Price
    },
  },

  // 3. Qwen: Qwen 2.5 Coding 32B Instruct (Highly specialized for programming tasks)
  {
    id: "qwen/qwen-2.5-coder-32b-instruct:free",
    provider: "openrouter",
    pricing: {
      inputUsdPerMillionTokens: 0.07, // Dummy Price
      outputUsdPerMillionTokens: 0.14, // Dummy Price
    },
  },

  // 4. Google: Gemini 2.5 Flash (Super fast execution for light edits and quick terminal commands)
  {
    id: "google/gemini-2.5-flash:free",
    provider: "openrouter",
    pricing: {
      inputUsdPerMillionTokens: 0.075, // Dummy Price
      outputUsdPerMillionTokens: 0.3, // Dummy Price
    },
  },

  // 5. OpenRouter: Free Models Router (Automatically routes to the best available free model)
  {
    id: "openrouter/free",
    provider: "openrouter",
    pricing: {
      inputUsdPerMillionTokens: 0.01, // Nominal base dummy rate
      outputUsdPerMillionTokens: 0.02, // Nominal base dummy rate
    },
  },
] as const satisfies readonly SupportedChatModelDefinition[];

export type SupportedChatModel =
  (typeof SUPPORTED_CHAT_MODELS)[number];

export type SupportedChatModelId = SupportedChatModel["id"];

export function findSupportedChatModel(modelId: string) {
  return SUPPORTED_CHAT_MODELS.find(
    (model) => model.id === modelId,
  );
}

export const DEFAULT_CHAT_MODEL_ID: SupportedChatModelId =
  "openrouter/free";
