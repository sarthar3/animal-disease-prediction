
import { useState } from "react";
import { Symptom, symptoms } from "@/data/symptoms";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface SymptomSelectorProps {
  onSymptomSelect: (symptomIds: string[]) => void;
}

export const SymptomSelector = ({ onSymptomSelect }: SymptomSelectorProps) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const toggleSymptom = (symptom: Symptom) => {
    const newSelection = selectedSymptoms.includes(symptom.id)
      ? selectedSymptoms.filter((id) => id !== symptom.id)
      : [...selectedSymptoms, symptom.id];
    
    setSelectedSymptoms(newSelection);
    onSymptomSelect(newSelection);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Select Observed Symptoms</h3>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {Object.values(symptoms).map((symptom) => (
            <div
              key={symptom.id}
              onClick={() => toggleSymptom(symptom)}
              className={cn(
                "p-4 rounded-lg cursor-pointer transition-all duration-200",
                "border hover:border-sage-300",
                selectedSymptoms.includes(symptom.id)
                  ? "bg-sage-100 border-sage-300"
                  : "bg-white border-gray-200"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{symptom.label}</span>
                <Badge
                  variant="secondary"
                  className="bg-sage-50 text-sage-700 hover:bg-sage-100"
                >
                  {symptom.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
