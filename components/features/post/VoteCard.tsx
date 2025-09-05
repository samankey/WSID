// components/features/post/VoteCard.tsx
"use client";

import { useMemo, useState } from "react";
import { VoteBar } from "@/components/features/post/VoteBar";

type Props = {
  postId: string;
  optionA: string;
  optionB: string;
  counts: { A: number; B: number };
  hasVoted: boolean;
  defaultRevealed?: boolean;
  myChoice: "A" | "B" | null;
};

export const VoteCard = ({
  optionA,
  optionB,
  counts,
  hasVoted,
  defaultRevealed = false,
  myChoice,
}: Props) => {
  const total = Math.max(1, counts.A + counts.B);
  const [revealed, setRevealed] = useState(defaultRevealed);
  const [choice, setChoice] = useState<"A" | "B" | null>(myChoice);

  const percentA = useMemo(
    () => Math.round((counts.A / total) * 100),
    [counts, total],
  );
  const percentB = 100 - percentA;

  function onVote(c: "A" | "B") {
    if (revealed) return;
    setChoice(c);
    // TODO: 서버에 투표 호출 → 성공 시 결과 리프레시
    setTimeout(() => setRevealed(true), 150); // 응답 대기 대신 UI 데모용
  }

  return (
    <div className="rounded-2xl border border-white/10 p-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          onClick={() => onVote("A")}
          disabled={revealed}
          className={`rounded-xl border p-4 text-left transition
            ${choice === "A" ? "border-emerald-500/60 bg-emerald-500/10" : "border-white/10 hover:bg-white/5"}
            ${revealed ? "opacity-60 cursor-default" : ""}`}
        >
          <div className="text-sm opacity-70">옵션 A</div>
          <div className="text-lg font-medium">{optionA}</div>
        </button>

        <button
          onClick={() => onVote("B")}
          disabled={revealed}
          className={`rounded-xl border p-4 text-left transition
            ${choice === "B" ? "border-emerald-500/60 bg-emerald-500/10" : "border-white/10 hover:bg-white/5"}
            ${revealed ? "opacity-60 cursor-default" : ""}`}
        >
          <div className="text-sm opacity-70">옵션 B</div>
          <div className="text-lg font-medium">{optionB}</div>
        </button>
      </div>

      {/* 결과 영역 */}
      <div className="mt-4 rounded-xl border border-white/10 p-4">
        <div className="mb-2 text-sm opacity-70">
          {revealed ? "결과" : "버튼을 선택하면 결과가 공개됩니다"}
        </div>

        <div
          className={`grid gap-3 sm:grid-cols-2 transition-opacity ${revealed ? "opacity-100" : "opacity-0"}`}
        >
          <VoteBar
            label={optionA}
            percent={percentA}
            animate={revealed}
            highlight={choice === "A"}
          />
          <VoteBar
            label={optionB}
            percent={percentB}
            animate={revealed}
            highlight={choice === "B"}
          />
        </div>

        {revealed && (
          <div className="mt-2 text-right text-xs opacity-70">
            총 {counts.A + counts.B}표
          </div>
        )}
      </div>
    </div>
  );
};
