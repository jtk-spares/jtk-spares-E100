import { Button } from "../src/components/ui/FlowHoverButton";
import { cn } from '../src/lib/utils';

interface ShineButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const ShineButton = ({ children, className }: ShineButtonProps) => {
  return (
    <Button 
      className={cn(
        "relative overflow-hidden",
        "before:absolute before:inset-0 before:rounded-[inherit]",
        "before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.7)_50%,transparent_75%)]",
        // ... rest of shine classes
        className
      )} icon={undefined} onClick={undefined} disabled={undefined} size={undefined} variant={undefined} asChild={undefined}>
      {children}
    </Button>
  );
};