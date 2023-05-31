import {Film} from '../../types/film';
import {AppRoute} from '../../const';
import {generatePath, Link} from 'react-router-dom';

type SmallFilmCardProps = {
  film: Film;
}

export default function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  const {film} = props;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, {id : film.id.toString()})}>{film.name}</Link>
      </h3>
    </article>
  );
}
