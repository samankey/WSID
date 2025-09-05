// components/features/post/DecisionBadge.tsx
import { Badge } from "@/components/ui/badge";

export const DecisionBadge = ({ decided }: { decided: boolean }) => {
  return decided ? (
    <Badge className="bg-emerald-600 hover:bg-emerald-600/90">결정됨</Badge>
  ) : (
    <Badge variant="outline" className="text-amber-300 border-amber-300/40">
      미정
    </Badge>
  );
};
