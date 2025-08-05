const CATEGORIES = [
  'All',
  'Music',
  'Sports',
  'Talks',
  'Workshops',
  'Wellness',
];

export default function CategoryNav({
  value,
  onChange,
}: {
  value: string;
  onChange: (cat: string) => void;
}) {
  return (
    <nav className='overflow-x-auto scrollbar-hide py-4'>
      <ul className='inline-flex space-x-3 px-4'>
        {CATEGORIES.map((cat) => {
          const isActive = cat === value;
          return (
            <li key={cat}>
              <button
                onClick={() => onChange(cat)}
                className={`
                  px-4 py-2 rounded-[var(--radius-lg)] whitespace-nowrap
                  ${
                    isActive
                      ? 'px-4 py-2 rounded-lg font-medium transition text-white bg-gradient-to-br from-teal-300 to-sky-500 hover:brightness-110 active:scale-95'
                      : 'bg-[var(--color-muted-light)] text-[var(--color-primary)]'
                  }
                `}
              >
                {cat}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
