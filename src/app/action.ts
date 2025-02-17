"use server";

export type FormState = {
  msg: string;
  success: boolean;
} | null;

const apiUrl =
  "https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask";
const x = "4aa0a630-eb70-11ef-8625-0242ac120005";

export async function formSubmit(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const rules = JSON.stringify({
    budget_from: Number(formData.get("budget_from")),
    budget_to: Number(formData.get("budget_to")),
    deadline_days: Number(formData.get("deadline_days")),
    qty_freelancers: Number(formData.get("qty_freelancers")),
  });

  const sendData = {
    title: encodeURIComponent(formData.get("title") as string),
    description: encodeURIComponent(formData.get("description") as string),
    tags: encodeURIComponent(formData.get("tags") as string),
    budget_from: formData.get("budget_from"),
    budget_to: formData.get("budget_to"),
    deadline_days: formData.get("deadline_days"),
    number_of_reminders: formData.get("number_of_reminders"),
    all_auto_responses: false,
    rules: encodeURIComponent(rules),
  };

  console.log(sendData);

  try {
    const res = await fetch(
      `${apiUrl}?token=${x}&title=${sendData.title}&description=${sendData.description}&tags=${sendData.tags}&budget_from=${sendData.budget_from}&budget_to=${sendData.budget_to}&deadline=${sendData.deadline_days}&reminds=${sendData.number_of_reminders}&all_auto_responses=${sendData.all_auto_responses}&rules=${sendData.rules}`
    );
    if (!res.ok || res.status !== 200)
      return {
        msg: "Произошла ошибка, задача не добавлена",
        success: false,
      };
    const data = await res.json();
    return {
      msg: `Создана задача под номером ${data.task.rules.task_id}!`,
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      msg: "Произошла ошибка, задача не добавлена",
      success: false,
    };
  }
}
