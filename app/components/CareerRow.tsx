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
    >
      <span className="career-row__cell career-row__brand-cell">
        <div className="career-row__content">
          <RiseSwap top={<Brand item={item} />} bottom={<Brand item={item} />} />
        </div>
      </span>

      <span className="career-row__cell career-row__mid">
        <div className="career-row__content">
          <RiseSwap top={item.description} bottom={item.role} />
        </div>
      </span>

      <span className="career-row__cell career-row__end">
        <div className="career-row__content">
          <RiseSwap top={item.duration} bottom={item.period} />
        </div>
      </span>
    </a>
  );
}
