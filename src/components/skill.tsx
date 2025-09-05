type SkillProps = {
  icon: React.ReactNode;
  name: string;
};

export default function Skill({ icon, name }: SkillProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors">
      <div className="w-5 h-5">{icon}</div>
      <span className="text-sm text-neutral-200">{name}</span>
    </div>
  );
}
