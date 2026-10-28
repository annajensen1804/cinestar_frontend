import { serverPath } from "../settings";

// Lille hjælper, så vi ikke gentager fetch + fejltjek + udpakning overalt.
const getData = async (path, errorText = "Fejl ved hentning") => {
  const res = await fetch(`${serverPath}${path}`);
  if (!res.ok) throw new Response(errorText, { status: res.status });
  const json = await res.json();
  return json.data;
};

// Henter alle blogindlæg og viser kun det sidste på forsiden
export const blogsLoader = async () => {
    return getData("/blogs");
}
