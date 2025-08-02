export async function fetchUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Server returned an error: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch options: " + (error as Error).message);
  }
}
