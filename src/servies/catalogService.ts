const catalogUrl = `http://localhost:8000/catalog`;

export async function getAll() {
  return fetch(`${catalogUrl}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application.json",
    },
  }).then((data) => data.json());
}
