import {Film} from '../../types/film';
import {AppRoute} from '../../const';
import {generatePath, Link} from 'react-router-dom';
import Player from '../player/player';
import {useState} from 'react';

type SmallFilmCardProps = {
  film: Film;
  onMouseEnter(): void;
  onMouseLeave(): void;
}

export default function SmallFilmCard({film, onMouseEnter, onMouseLeave}: SmallFilmCardProps): JSX.Element {
  const [play, setPlay] = useState(false);

  function handleMouseEvent() {
    setPlay(!play);
  }

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      <Link className="small-film-card__link" to={generatePath(AppRoute.Film, {id : film.id.toString()})}>
        <div onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent} className="small-film-card__image">
          <Player previewVideoLink={film.previewVideoLink} previewImage={film.previewImage} play={play} />
        </div>
        <h3 className="small-film-card__title">{film.name}</h3>
      </Link>
    </article>
  );
}
