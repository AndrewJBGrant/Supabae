import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("todos").select("");

  // console.log(notes)

  return (
    <>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </>
  );
}

