import Months from '../core/const/Month';

export default function OrderedMonths() {
  return Months.sort((a, b) =>
    a.order > b.order ? 1 : b.order > a.order ? -1 : 0,
  );
}
