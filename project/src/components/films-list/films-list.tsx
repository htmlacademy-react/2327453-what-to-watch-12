import SmallFilmCard from '../small-film-card/small-film-card';
import {useState} from 'react';
import { Films } from '../../types/film';

type FilmsListProps = {
  films: Films
}

export default function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [, setHoveredCardId] = useState<number | null>(null);
  return (
    <div className="catalog__films-list">
      {
        films
          ?
          films.map<JSX.Element>((f) =>
            (<SmallFilmCard film={f} key={f.id} onMouseEnter={() => setHoveredCardId(f.id)} onMouseLeave={() => setHoveredCardId(null)}/>
            ))
          :
          <>No any films</>
      }
    </div>
  );
}
