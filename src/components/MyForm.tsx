"use client";
import { useActionState, useEffect } from "react";
import { MyTextInput } from "./MyTextInput";
import { formSubmit } from "@/app/action";

export function MyForm() {
  const [state, action, isPending] = useActionState(formSubmit, null);

  useEffect(() => {
    if (state?.msg) alert(state.msg);
  }, [state]);

  return (
    <form
      action={action}
      className="border-2 border-teal-400 border-solid rounded-md p-5 grid justify-items-center gap-5 sm:gap-8"
    >
      <p className="text-lg font-semibold ">Новая задача</p>
      <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-flow-col  sm:grid-rows-[repeat(4,47.6px)] ">
        <MyTextInput id="titleIn" name="title" label="Название задачи" />
        <MyTextInput id="descIn" name="description" label="Описание задачи" />
        <MyTextInput id="tagsIn" name="tags" label="Тэги" />
        <MyTextInput
          id="budgFrom"
          name="budget_from"
          label="Бюджет от"
          pattern="[^0]\d{0,10}"
        />
        <MyTextInput
          id="budgTo"
          name="budget_to"
          label="Бюджет до"
          pattern="[^0]\d{0,10}"
        />
        <MyTextInput
          id="deadlineTo"
          name="deadline_days"
          label="Дней на выполнение"
          pattern="[^0]\d{0,3}"
        />
        <MyTextInput
          id="numReminders"
          name="number_of_reminders"
          label="Кол-во напоминаний"
          pattern="[^0]+\d{0,2}"
        />
      </div>
      <hr className="block border-t-1 border-teal-400 w-[100%]" />
      <div className="">
        <p className="text-sm font-semibold pb-3">Доп. условия</p>
        <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-flow-col  sm:grid-rows-[repeat(2,47.6px)]">
          <MyTextInput
            id="budgFrom_rules"
            name="budget_from_rules"
            label="Бюджет от"
            pattern="[^0]\d{0,10}"
          />
          <MyTextInput
            id="budgTo_rules"
            name="budget_to_rules"
            label="Бюджет до"
            pattern="[^0]\d{0,10}"
          />
          <MyTextInput
            id="deadlineTo_rules"
            name="deadline_days_rules"
            label="Дней на выполнение"
            pattern="[^0]+\d{0,3}"
          />
          <MyTextInput
            id="qty_freelancers"
            name="qty_freelancers"
            label="Кол-во работников"
            pattern="[^0]+\d{0,2}"
          />
        </div>
      </div>
      <button
        disabled={isPending}
        className="mt-3 rounded-md py-1 px-2 bg-teal-400 text-white
        disabled:bg-teal-200
        hover:bg-teal-600"
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
}
