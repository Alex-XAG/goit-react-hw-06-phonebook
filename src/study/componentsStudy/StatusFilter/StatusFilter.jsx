// Импортируем хук
import { useSelector, useDispatch } from 'react-redux';
// Импортируем объект значений фильтра
import { setStatusFilter } from 'study/redux/filtersSlice';
import { statusFilters } from 'study/redux/constants';

export const StatusFilter = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(state => state.statusFilter);

  // Вызываем генератор экшена и передаём значение фильтра
  // Отправляем результат - экшен изменения фильтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div>
      <button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </button>
      <button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </button>
    </div>
  );
};
