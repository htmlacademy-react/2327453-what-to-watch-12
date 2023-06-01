import SmallFilmCard from '../small-film-card/small-film-card';
import {store} from '../../store';
import {loadFilms} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {Films} from '../../types/film';

function addSmallFilmCard(films: Films, count: number): JSX.Element[]
{
  const result: JSX.Element[] = [];
  for(let i = 0; i < count; i++)
  {
    const film = films[i];
    if (!film)
    {
      continue;
    }
    result.push(<SmallFilmCard film={film} key={film.id}/>);

  }
  return result;
}

store.dispatch(loadFilms());

export default function FilmsList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <div className="catalog__films-list">
      {addSmallFilmCard(films, 20)}
    </div>
  );
}
