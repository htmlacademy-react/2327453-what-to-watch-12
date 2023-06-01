import SmallFilmCard from '../small-film-card/small-film-card';
import {store} from '../../store';
import {loadFilms} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';

store.dispatch(loadFilms());

export default function FilmsList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <div className="catalog__films-list">
      {
        films
          ?
          films.slice(0, 8).map<JSX.Element>((f) => <SmallFilmCard film={f} key={f.id}/>)
          :
          <>No any films</>
      }
    </div>
  );
}
