function organizeInventory(inventory) {
  return inventory.reduce((acc, item) => {
    acc[item.category] ??= {};
    acc[item.category][item.name] ??= 0;
    acc[item.category][item.name] += item.quantity;
    return acc;
  }, {});
}

const inventory2 = [
  { name: "book", quantity: 10, category: "education" },
  { name: "book", quantity: 5, category: "education" },
  { name: "paint", quantity: 3, category: "art" },
];

const organizedInventory = organizeInventory(inventory2);
console.log(organizedInventory);
/*
{
  education: { book: 15 },
  art: { paint: 3 }
}
*/
