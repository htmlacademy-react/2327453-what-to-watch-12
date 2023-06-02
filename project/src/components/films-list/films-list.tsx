import SmallFilmCard from '../small-film-card/small-film-card';
import {store} from '../../store';
import {loadFilms} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {Settings} from '../../const';
import {useState} from 'react';

store.dispatch(loadFilms());

export default function FilmsList(): JSX.Element {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const films = useAppSelector((state) => state.films);
  return (
    <div className="catalog__films-list">
      {
        films
          ?
          films.slice(0, Settings.MaxFilmsAtList).map<JSX.Element>((f) =>
            (<SmallFilmCard
              film={f}
              key={f.id}
              onMouseEnter={() => setHoveredCardId(f.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            />)
          )
          :
          <>No any films</>
      }
    </div>
  );
}
