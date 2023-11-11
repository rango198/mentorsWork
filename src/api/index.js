const STORAGE_KEY = "tu-do-list";

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getData() {
  try {
    const result = localStorage.getItem(STORAGE_KEY);
    return result ? JSON.parse(result) : [];
  } catch (error) {
    console.log(error);
  }
}
