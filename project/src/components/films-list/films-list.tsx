import SmallFilmCard from '../small-film-card/small-film-card';
import {store} from '../../store';
import {loadFilms} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {Settings} from '../../const';

type FilmsListProps = {
  onMouseEnter(filmId: number): void;
  onMouseLeave(): void;
}

store.dispatch(loadFilms());

export default function FilmsList({onMouseEnter, onMouseLeave}: FilmsListProps): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <div className="catalog__films-list">
      {
        films
          ?
          films.slice(0, Settings.MaxFilmsAtList).map<JSX.Element>((f) =>
            <SmallFilmCard film={f} key={f.id} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
          )
          :
          <>No any films</>
      }
    </div>
  );
}
