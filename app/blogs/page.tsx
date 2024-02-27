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

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua.

Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum`




const myBlogs = await getMyBlogs();

//  const filteredBlogs = myBlogs?.filter((bloggs) => bloggs.user_id === user?.id)
   // console.log(typeof(blogs))
  return user ? (
    <>
<span className="text-3xl font-extrabold">Hello {user.email}</span>

{myBlogs?.map(blog => (
<div key={blog.id} className="m-2 p-2 border border-slate-900 rounded">
<h1 className="m-2 text-2xl">{blog.title}</h1>




   {text.split('\n\n').map((paragraph: any) =>
            <p key={blog.id} className="">
                {paragraph.split('\n').reduce((total: any, line: any) => [total, <br />, line])}
            </p>
        )}



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
