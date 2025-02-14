
export type Symptom = {
  id: string;
  label: string;
  category: "behavioral" | "physical" | "digestive" | "respiratory";
};

export const symptoms: Symptom[] = [
  { id: "lethargy", label: "Lethargy", category: "behavioral" },
  { id: "appetite-loss", label: "Loss of Appetite", category: "behavioral" },
  { id: "fever", label: "Fever", category: "physical" },
  { id: "vomiting", label: "Vomiting", category: "digestive" },
  { id: "diarrhea", label: "Diarrhea", category: "digestive" },
  { id: "coughing", label: "Coughing", category: "respiratory" },
  { id: "sneezing", label: "Sneezing", category: "respiratory" },
  { id: "wounds", label: "Visible Wounds", category: "physical" },
  { id: "limping", label: "Limping", category: "physical" },
  { id: "breathing-difficulty", label: "Difficulty Breathing", category: "respiratory" },
];

export type Disease = {
  id: string;
  name: string;
  symptoms: string[];
  firstAid: string[];
  emergency: boolean;
};

export const diseases: Disease[] = [
  {
    id: "heat-stroke",
    name: "Heat Stroke",
    symptoms: ["lethargy", "vomiting", "breathing-difficulty"],
    firstAid: [
      "Move to cool area immediately",
      "Apply cool (not cold) water",
      "Provide small amounts of water",
      "Contact vet immediately",
    ],
    emergency: true,
  },
  {
    id: "minor-injury",
    name: "Minor Injury",
    symptoms: ["limping", "wounds"],
    firstAid: [
      "Clean wound with antiseptic",
      "Apply pressure if bleeding",
      "Keep animal calm and restricted",
      "Monitor for 24 hours",
    ],
    emergency: false,
  },
  {
    id: "respiratory-infection",
    name: "Respiratory Infection",
    symptoms: ["coughing", "sneezing", "fever"],
    firstAid: [
      "Keep in warm, dry environment",
      "Ensure good ventilation",
      "Monitor breathing rate",
      "Contact vet for treatment",
    ],
    emergency: false,
  },
];

export const getPossibleDiseases = (selectedSymptoms: string[]): Disease[] => {
  return diseases.filter((disease) =>
    selectedSymptoms.some((symptom) => disease.symptoms.includes(symptom))
  ).sort((a, b) => {
    const aMatch = disease.symptoms.filter((s) => selectedSymptoms.includes(s)).length;
    const bMatch = disease.symptoms.filter((s) => selectedSymptoms.includes(s)).length;
    return bMatch - aMatch;
  });
};
