export function searchData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  return filterData;
};

