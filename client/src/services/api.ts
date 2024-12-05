export async function getAllStudents() {
  const response = await fetch(`${import.meta.env.VITE_API}/students`);
  const json = await response.json();
  return json;
}
