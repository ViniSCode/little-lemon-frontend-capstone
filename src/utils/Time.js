export function generateRandomTimes(selectedDate) {
  const randomTimes = [];
  let seed = selectedDate.getDate() % (2 ** 35 - 31);

  const getRandom = () =>
    (seed = (seed * 185852) % (2 ** 35 - 31)) / (2 ** 35 - 31);

  for (let hour = 17; hour <= 23; hour++) {
    if (getRandom() < 0.5) randomTimes.push(`${hour}:00`);
    if (getRandom() < 0.5) randomTimes.push(`${hour}:30`);
  }

  return randomTimes;
}

export function submitAPI(formData) {
  if (
    !formData.date.trim() ||
    !formData.time.trim() ||
    !formData.numberOfGuests ||
    !formData.occasion.trim()
  ) {
    window.alert("Please fill in all fields.");
    console.log(formData);
    return false;
  }

  console.log(formData);
  return true;
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES")
    return { ...state, times: generateRandomTimes(action.date) };
  return state;
}

export function initializeTimes() {
  return { times: generateRandomTimes(new Date()) };
}
