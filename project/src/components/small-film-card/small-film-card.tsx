import {Film} from '../../types/film';
import {AppRoute} from '../../const';
import {generatePath, Link} from 'react-router-dom';

type SmallFilmCardProps = {
  film: Film;
  onMouseEnter(filmId: number): void;
  onMouseLeave(): void;
}

export default function SmallFilmCard({film, onMouseEnter, onMouseLeave}: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseEnter(film.id)}
      onMouseLeave={() => onMouseLeave()}
    >
      <Link className="small-film-card__link" to={generatePath(AppRoute.Film, {id : film.id.toString()})}>
        <div className="small-film-card__image">
          <img src={film.previewImage} alt={film.name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">{film.name}</h3>
      </Link>
    </article>
  );
}
