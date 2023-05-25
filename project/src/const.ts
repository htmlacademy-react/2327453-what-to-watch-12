export enum APIRoute {
  Promo = '/promo'
}

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*'
}
