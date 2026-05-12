interface Props {
  primary: string;
  secondary?: string;
}
export function SectionLabel({ primary, secondary }: Props) {
  return (
    <div className="inline-flex items-center rounded-full border-2 border-primary px-5 py-2 text-sm font-bold tracking-wide md:text-base">
      <span className="text-primary">{primary}</span>
      {secondary ? <span className="ml-2 text-foreground">{secondary}</span> : null}
    </div>
  );
}
