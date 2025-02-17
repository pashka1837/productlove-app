type MyRadioProps = {
  label: string;
  id: string;
  name: string;
};

export function MyRadio({ label, name, id }: MyRadioProps) {
  return (
    <div className="flex flex-row gap-2">
      <label className="text-[12px]" htmlFor={id}>
        {label}
      </label>
      <input id={id} name={name} type="radio" />
    </div>
  );
}
