export enum APIRoute {
  Promo = '/promo',
  Films = '/films',
  Comments = '/comments',
  Similar = '/films/{0}/similar'
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
  MaxFilmsAtMoreLikeThis = 4,
}
