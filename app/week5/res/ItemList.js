function ItemList({ category, sortBy }) {
    const filteredItems = category === 'all' ? items : items.filter(item => item.category === category);
  
    const sortedItems = [...filteredItems].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.category.localeCompare(b.category);
    });
  
    return (
      <div>
        {sortedItems.map((item, index) => (
          <div key={index}>
            {item.image} {item.name} ({item.quantity}) - {item.category}
          </div>
        ))}
      </div>
    );
  }
  