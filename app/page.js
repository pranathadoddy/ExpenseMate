import ExpenseCategoryItem from '@/components/ExpenseCategoryItem';
import { currencyFormatter } from '@/lib/utils';

const DUMMY_DATA = [
  {
    id: 1,
    title: 'Entertainment',
    color: '#000',
    total: 500,
  },
  {
    id: 2,
    title: 'Gass',
    color: '#009',
    total: 200,
  },
  {
    id: 3,
    title: 'Fuel',
    color: '#000',
    total: 1200,
  },
  {
    id: 4,
    title: 'Movies',
    color: '#000',
    total: 800,
  },
  {
    id: 5,
    title: 'Holiday',
    color: '#000',
    total: 2000,
  },
];

export default function Home() {
  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <section className="py-3">
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">{currencyFormatter(100000)}</h2>
      </section>
      <section className="flex items-center gap-2 py-3">
        <button className="btn btn-primary">+ Expenses</button>
        <button className="btn btn-primary-outline">+ Incomes</button>
      </section>
      <section className="py-6">
        <h3 className="text-2xl">My Expenses</h3>
        <div className="flex flex-col gap-4 mt-6">
          {DUMMY_DATA.map((expense) => (
            <ExpenseCategoryItem
              key={expense.id}
              title={expense.title}
              total={expense.total}
              color={expense.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
