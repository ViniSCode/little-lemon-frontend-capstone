export function generateRandomTimes(date) {
  const result = [];
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = date.getDate() % m;

  function random() {
    s = (s * a) % m;
    return s / m;
  }

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }

  return result;
}

export function submitAPI(formData) {
  if (!true) console.log(formData);
  return true;
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: generateRandomTimes(action.date) };
    default:
      return state;
  }
}

export function initializeTimes() {
  const today = new Date();
  return { times: generateRandomTimes(today) };
}
