import { API_URL } from "../utils/environments";

export async function fetchUsers() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Server returned an error: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch options: " + (error as Error).message);
  }
}
