export interface IMonth {
  name: string;
  value: string;
  order: number;
  days: number;
}

const Months: IMonth[] = [
  {
    name: 'Janeiro',
    value: 'Janeiro',
    order: 1,
    days: 31,
  },
  {
    name: 'Fevereiro',
    value: 'Fevereiro',
    order: 2,
    days: 28,
  },
  {
    name: 'Março',
    value: 'Março',
    order: 3,
    days: 31,
  },
  {
    name: 'Abril',
    value: 'Abril',
    order: 4,
    days: 30,
  },
  {
    name: 'Maio',
    value: 'Maio',
    order: 5,
    days: 31,
  },
  {
    name: 'Junho',
    value: 'Junho',
    order: 6,
    days: 30,
  },
  {
    name: 'Julho',
    value: 'Julho',
    order: 7,
    days: 31,
  },
  {
    name: 'Agosto',
    value: 'Agosto',
    order: 8,
    days: 30,
  },
  {
    name: 'Setembro',
    value: 'Setembro',
    order: 9,
    days: 31,
  },
  {
    name: 'Outubro',
    value: 'Outubro',
    order: 10,
    days: 30,
  },
  {
    name: 'Novembro',
    value: 'Novembro',
    order: 11,
    days: 31,
  },
  {
    name: 'Dezembro',
    value: 'Dezembro',
    order: 12,
    days: 30,
  },
];

export default Months;
