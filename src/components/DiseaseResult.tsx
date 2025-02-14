
import { Disease } from "@/data/symptoms";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Heart } from "lucide-react";

interface DiseaseResultProps {
  disease: Disease;
  matchPercentage: number;
}

export const DiseaseResult = ({ disease, matchPercentage }: DiseaseResultProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto p-6 mb-4 animate-fadeIn">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{disease.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <Badge
              variant={disease.emergency ? "destructive" : "secondary"}
              className="animate-fadeIn"
            >
              {disease.emergency ? (
                <AlertTriangle className="w-3 h-3 mr-1" />
              ) : (
                <Heart className="w-3 h-3 mr-1" />
              )}
              {disease.emergency ? "Emergency" : "Non-Emergency"}
            </Badge>
            <Badge variant="outline" className="animate-fadeIn">
              {Math.round(matchPercentage)}% Match
            </Badge>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">First Aid Steps:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {disease.firstAid.map((step, index) => (
              <li key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
