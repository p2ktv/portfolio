"use client";

type ExperienceItemProps = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  logoSrc: string;
  info: string[];
  highlightColor?: string;
};

export default function ExperienceItem({
  role,
  company,
  companyUrl,
  period,
  logoSrc,
  info,
  highlightColor = "text-purple-500",
}: ExperienceItemProps) {
  return (
    <div className="relative flex mb-10">
      <div className="relative flex flex-col flex-1 pl-4">
        <span
          className={`w-1.5 h-1.5 rounded-full ${highlightColor} bg-current absolute left-0 top-3`}
        ></span>
        <span className="absolute left-0.5 top-7.5 bottom-0 w-[2px] bg-neutral-600/40"></span>
        <div className="ml-2 flex flex-col space-y-0.5">
          <span className={`font-semibold text-lg ${highlightColor}`}>
            {role}
          </span>
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-base text-white hover:underline cursor-pointer"
            >
              {company}
            </a>
          ) : (
            <span className="font-bold text-base text-white">{company}</span>
          )}
          <span className="text-neutral-400 text-base">{period}</span>
        </div>
        <ul className="ml-4 mt-2 space-y-1">
          {info.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-2.5 text-neutral-400 text-base"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0 mt-2.5"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {companyUrl ? (
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-0 top-0 flex-shrink-0 cursor-pointer"
        >
          <img
            src={logoSrc}
            alt={company}
            className="w-12 h-12 object-contain"
          />
        </a>
      ) : (
        <div className="absolute right-0 top-0 flex-shrink-0">
          <img
            src={logoSrc}
            alt={company}
            className="w-12 h-12 object-contain"
          />
        </div>
      )}
    </div>
  );
}
