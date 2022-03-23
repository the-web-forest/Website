import Months from '../core/const/Month';

export default function OrderedMonths() {
  return Months.sort((a, b) =>
    a.seqNumber > b.seqNumber ? 1 : b.seqNumber > a.seqNumber ? -1 : 0,
  );
}
