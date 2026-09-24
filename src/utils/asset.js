// Resolves files placed in /public (e.g. '/nidhin.jpg') against the deploy base path,
// so they work at both localhost:5190/ and nidhinbabu44.github.io/portfolio/.
export default function asset(path) {
  if (!path || !path.startsWith('/')) return path;
  return import.meta.env.BASE_URL + path.slice(1);
}
