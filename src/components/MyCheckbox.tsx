type MyCheckboxProps = {
  label: string;
  id: string;
  name: string;
};

export function MyCheckbox({ label, name, id }: MyCheckboxProps) {
  return (
    <div className="flex flex-row gap-2 sm:w-[200px] pt-[16px] items-center">
      <input id={id} name={name} type="checkbox" />

      <label className="text-[12px]" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
