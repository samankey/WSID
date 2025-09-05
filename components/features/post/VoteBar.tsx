"use client";

export const VoteBar = ({
  label,
  percent,
  animate,
  highlight,
}: {
  label: string;
  percent: number;
  animate: boolean;
  highlight?: boolean;
}) => {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="line-clamp-1">{label}</span>
        <span className="tabular-nums opacity-80">{percent}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full ${highlight ? "bg-emerald-500" : "bg-white/60"}`}
          style={{
            width: animate ? `${percent}%` : 0,
            transition: "width 800ms cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
};
