import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const iconMap = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

const Statistics = ({ title, stats }) => {
  return (
    <>
      <h2>Statistics</h2>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }, index) => (
          <li key={id} className={style.item}>
            <StatisticsItem title={title} total={total} icon={iconMap[index]} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
