interface ContentProps {
  children: React.ReactNode;
  className?: string;
}


export function Content({ children ,className}: ContentProps) {
  return <div className={`p-72 ${className}`}>{children}</div>;
}
