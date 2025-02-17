type MyTextInputProps = {
  label: string;
  id: string;
  name: string;
  pattern?: string;
};

export function MyTextInput({ id, name, label, pattern }: MyTextInputProps) {
  return (
    <div className="flex flex-col gap-1 sm:w-[200px]">
      <label className="text-[12px]" htmlFor={id}>
        {label}
      </label>
      <input
        required
        pattern={pattern ? pattern : undefined}
        type="text"
        id={id}
        name={name}
        className="border-teal-400 rounded-sm  focus:outline-teal-400"
        style={{ borderWidth: "1px" }}
      />
    </div>
  );
}
