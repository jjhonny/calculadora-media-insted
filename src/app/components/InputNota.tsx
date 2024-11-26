import { Input } from "@/components/ui/input";

interface EntradaNotaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function EntradaNota({
  label,
  name,
  value,
  onChange,
}: EntradaNotaProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <Input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Digite a nota"
        maxLength={3}
      />
    </div>
  );
}
