type LabelMsgProps = {
  label1: React.ReactNode;
  label2: React.ReactNode;
  className?: string;
};

export default function LabelMsg({ label1, label2, className }: LabelMsgProps) {
  return (
    <div
      className={`bg-white/3 px-6 py-1.5 flex items-center group w-full h-10 ${className}`}
    >
      <span className="text-white/50">{label1}</span>
      <span className="text-white/75">/</span>
      <span className="text-white">{label2}</span>
    </div>
  );
}
