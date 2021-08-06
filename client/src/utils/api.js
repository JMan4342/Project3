export async function getParks(searchTerm) {
  const data = await fetch(`/parks?q=${searchTerm}`);
  return data.json();
}

export async function getAlerts(parkCode) {
  const data = await fetch(`/alerts?q=${parkCode}`);

  return data.json();
}
