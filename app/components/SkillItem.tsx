import { Skill } from '../data';

type Props = { item: Skill; index: number };

function Icon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <span className="skill-icon skill-icon--diamonds">
          <span className="d d1" />
          <span className="d d2" />
        </span>
      );
    case 1:
      return (
        <span className="skill-icon skill-icon--squares">
          <span className="sq sq1" />
          <span className="sq sq2" />
          <span className="sq sq3" />
          <span className="sq sq4" />
        </span>
      );
    case 2:
      return (
        <span className="skill-icon skill-icon--screen">
          <span className="scr scr--mark" />
          <span className="scr scr--bar" />
        </span>
      );
    case 3:
      return (
        <span className="skill-icon skill-icon--bars">
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </span>
      );
    case 4:
      return (
        <span className="skill-icon skill-icon--eye">
          <span className="eye" />
        </span>
      );
    case 5:
    default:
      return (
        <span className="skill-icon skill-icon--stack">
          <span className="stack-block stack-block--l" />
          <span className="stack-block stack-block--m" />
          <span className="stack-block stack-block--s" />
        </span>
      );
  }
}

export default function SkillItem({ item, index }: Props) {
  return (
    <div className={`skill skill--${index + 1}`}>
      <div className="skill-icon-wrap">
        <Icon index={index} />
      </div>
      <div className="skill-head">
        <span className="skill-num">{item.num}. </span>
        <span className="skill-title">{item.title}</span>
      </div>
      <p className="skill-desc">{item.description}</p>
    </div>
  );
}
