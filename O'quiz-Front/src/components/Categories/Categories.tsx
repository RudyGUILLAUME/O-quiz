import { Link } from 'react-router-dom';
import './Categories.scss';
import { getCategories } from '../../store/reducers/categories';
import { useAppSelector } from '../../hooks/redux';

function Categories() {
  const data = useAppSelector((state) => state.categories.list);

  return (
    <div className="container">
      {data.map((categories) => {
        return (
          <div className="category__container" key={categories.id}>
            <h2 className="category__title">{categories.name}</h2>
            <div className="quiz__container">
              <ul className="quiz__list">
                {categories.quizzes.map((quiz) => (
                  <li className="quiz__name" key={quiz.name}>
                    <Link to={`/quiz/${quiz.slug}`}>{quiz.name}</Link>
                  </li>
                ))}
              </ul>
              <Link to={`/categorie/${categories.slug}`} className="all__quiz">
                Voir tout
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
