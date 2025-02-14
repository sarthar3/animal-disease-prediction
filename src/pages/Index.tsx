
import { useState } from "react";
import { SymptomSelector } from "@/components/SymptomSelector";
import { DiseaseResult } from "@/components/DiseaseResult";
import { getPossibleDiseases, Disease } from "@/data/symptoms";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Heart } from "lucide-react";

const Index = () => {
  const [selectedDiseases, setSelectedDiseases] = useState<Disease[]>([]);

  const handleSymptomSelect = (symptomIds: string[]) => {
    if (symptomIds.length === 0) {
      setSelectedDiseases([]);
      return;
    }
    
    const diseases = getPossibleDiseases(symptomIds);
    setSelectedDiseases(diseases);
  };

  const calculateMatchPercentage = (disease: Disease, selectedSymptoms: string[]) => {
    const matchingSymptoms = disease.symptoms.filter((s) => selectedSymptoms.includes(s));
    return (matchingSymptoms.length / disease.symptoms.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Animal Health Assistant
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the symptoms you observe to receive potential diagnosis and first aid recommendations.
          </p>
        </div>

        <div className="space-y-8">
          <SymptomSelector onSymptomSelect={handleSymptomSelect} />

          {selectedDiseases.length > 0 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Possible Conditions
              </h2>
              {selectedDiseases.map((disease) => (
                <DiseaseResult
                  key={disease.id}
                  disease={disease}
                  matchPercentage={calculateMatchPercentage(disease, selectedDiseases.map(d => d.id))}
                />
              ))}
            </div>
          )}

          <Alert className="max-w-2xl mx-auto bg-sage-50 border-sage-200">
            <AlertTriangle className="h-4 w-4 text-sage-500" />
            <AlertDescription className="text-sage-700">
              This tool provides general guidance only. Always consult a veterinarian for proper diagnosis and treatment.
            </AlertDescription>
          </Alert>

          <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Emergency Contact</h3>
            <p className="text-gray-600">
              If you suspect an emergency, contact your nearest veterinary clinic immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
