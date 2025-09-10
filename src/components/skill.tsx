type SkillProps = {
  icon: React.ReactNode;
  name: string;
};

export default function Skill({ icon, name }: SkillProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-[3px] bg-[#1e1e21] border border-[#27272a]">
      <div className="w-5 h-5">{icon}</div>
      <span className="text-sm text-[#e4e4e7]">{name}</span>
    </div>
  );
}
