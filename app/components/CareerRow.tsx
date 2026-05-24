import { CareerItem } from '../data';
import RiseSwap from './RiseSwap';

type Props = { item: CareerItem };

function Brand({ item }: { item: CareerItem }) {
  return (
    <span className="career-brand">
      <span className="career-logo">
        <img src={item.logo} alt={item.company} />
      </span>
      <span className="career-name">{item.company}</span>
    </span>
  );
}

export default function CareerRow({ item }: Props) {
  return (
    <a
      className="career-row rise-trigger"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${item.role} • ${item.period}`}
    >
      <span className="career-row__cell career-row__brand-cell">
        <RiseSwap top={<Brand item={item} />} bottom={<Brand item={item} />} />
      </span>

      <span className="career-row__cell career-row__mid">
        <RiseSwap top={item.description} bottom={item.role} />
      </span>

      <span className="career-row__cell career-row__end">
        <RiseSwap top={item.duration} bottom={item.period} />
      </span>
    </a>
  );
}
