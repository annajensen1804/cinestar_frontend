import { serverPath } from "../settings";

// Lille hjælper, så vi ikke gentager fetch + fejltjek + udpakning overalt.
const getData = async (path, errorText = "Fejl ved hentning") => {
  const res = await fetch(`${serverPath}${path}`);
  if (!res.ok) throw new Response(errorText, { status: res.status });
  const json = await res.json();
  return json.data;
};

// Henter alle blogindlæg
export const blogsLoader = async () => {
    return getData("/blogs");
}

// Blog-detaljer: henter den ENE blogindlæg
export const blogDetailsLoader = async ({ params }) => {
  return getData(`/blog/${params.blogId}`, "Blogindlæg ikke fundet");
};

// Henter blogindlæg, beskeder og udtalelser til Backoffice
export const backofficeLoader = async () => {
  const [blogs, messages, reviews] = await Promise.all(
    [
      getData("/blogs"),
      getData("/messages"),
      getData("/reviews"),
    ],
  );

    return { blogs, messages, reviews };
};
