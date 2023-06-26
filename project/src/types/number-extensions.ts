export function getRatingDescription(rating: number | undefined): string {
  switch (rating) {
    case 0:
    case 1:
    case 2:
      return 'Bad';
    case 3:
    case 4:
      return 'Very good';
    case 5:
    case 6:
      return 'Very good';
    case 7:
    case 8:
      return 'Very good';
    case 9:
    case 10:
      return 'Awesome';
    default:
      return 'Incredible!';
  }
}

export function getHoursAndMinutes(runTime: number | undefined): string {
  if (!runTime) {
    return '0';
  }
  const hours = Math.trunc(runTime / 60);
  const minutes = Math.trunc(runTime - hours * 60);

  return `${hours}h ${minutes}m`;
}
