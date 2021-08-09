export async function getParks(searchTerm) {
  const data = await fetch(`/parks?q=${searchTerm}`);
  return data.json();
}
export async function getParkByCode(parkCode) {
  const data = await fetch(`/parks?parkCode=${parkCode}`);
  return data.json();
}

export async function getAlerts(parkCode) {
  const data = await fetch(`/alerts?q=${parkCode}`);
  return data.json();
}

export async function getThingsToDo(searchTerm) {
  const data = await fetch(`/thingstodo?q=${searchTerm}`);
  return data.json();
}

export async function getThingsToDoByCode(id) {
  const data = await fetch(`/thingstodo?id=${id}`);
  return data.json();
}

export async function getCampgrounds(searchTerm) {
  const data = await fetch(`/campgrounds?q=${searchTerm}`);
  return data.json();
}

export async function getCampgroundsById(id) {
  const data = await fetch(`/campgrounds?id=${id}`);
  return data.json();
}
