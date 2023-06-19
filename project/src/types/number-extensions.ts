export function getRatingDescription(rating: number): string {
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
