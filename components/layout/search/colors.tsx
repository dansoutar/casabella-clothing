export async function Colors() {
  const title = 'Colors';

  //   const collections = await getCollections();

  return (
    <div>
      <h3 className="mb-2 hidden font-oswald uppercase tracking-wide dark:text-neutral-300 md:block">
        {title}
      </h3>
      <ul>
        {/* {colors.map((color) => (
          <li key={color.value}>
            <Link href={`/search?color=${encodeURIComponent(color.value)}`}>
              <a
                className={`color-swatch ${query.color === color.value ? 'active' : ''}`}
                onClick={() => handleFilterChange(color.value)}
                style={{ backgroundColor: color.value }}
              >
                {color.title}
              </a>
            </Link>
          </li>
        ))} */}
        <div className="text-sm text-neutral-500 dark:text-white">Color option</div>
      </ul>
    </div>
  );
}
