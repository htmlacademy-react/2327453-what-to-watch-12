export enum APIRoute {
  Promo = '/promo',
  Films = '/films'
}

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*'
}

export enum Settings {
  MaxFilmsAtList = 8,
}
