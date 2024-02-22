import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = createClient();





 const {
    data: { user },
  } = await supabase.auth.getUser();

async function getMyBlogs() {

  const { data, error } = await supabase
  .from("safeBlogs")
  .select(`id, title, content, user_id`);

return data
}

const myBlogs = await getMyBlogs();

//  const filteredBlogs = myBlogs?.filter((bloggs) => bloggs.user_id === user?.id)
   // console.log(typeof(blogs))
  return user ? (
    <>
<span className="text-3xl font-extrabold">Hello {user.email}</span>

{myBlogs?.map(blog => (
<div key={blog.id} className="m-2 p-2 border border-slate-900 rounded">
<h1 className="m-2 text-2xl">{blog.title}</h1>
<p>{blog.content}</p>
<p>written by {blog.user_id}</p>
</div>
))
}
    </>
  ) : (

<h1>Sign up, in or log in </h1>
  )
}

{/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}
