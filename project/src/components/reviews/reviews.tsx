import {useEffect} from 'react';
import {loadReviews} from '../../store/api-actions';
import {store} from '../../store';
import {useAppSelector} from '../../hooks';
import {formatDate} from '../../types/date-extensions';

type overviewProps = {
  filmId: number | undefined;
}

export default function Reviews({filmId}: overviewProps): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

  useEffect(() => {
    if(filmId) {
      store.dispatch(loadReviews(filmId));
    }
  }, [filmId]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={formatDate(review.date, 'YYYY-MM-DD')}>{formatDate(review.date, 'MMMM DD, YYYY')}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
