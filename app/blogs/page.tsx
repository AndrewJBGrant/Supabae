import { createClient } from "@/utils/supabase/server";

export default async function Page() {


async function getMyBlogs() {

  const supabase = createClient();
  const { data, error } = await supabase
  .from("blogs")
  .select(`id, title, content`);

return data
}

const myBlogs = await getMyBlogs();


   // console.log(typeof(blogs))
  return (
    <>

{myBlogs?.map(blog => (

<div key={blog.id} className="m-2 p-2 border border-slate-900 rounded">
<h1 className="m-2 text-2xl">{blog.title}</h1>
<p>{blog.content}</p>
</div>
))
}

      {/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}
    </>
  );
}
