export const filterData = (data: Array<any>, searchText: string) => {
  return data.filter((item) =>
    Object.values(item).some(
      (value) =>
        value &&
        (typeof value === "string" || typeof value === "number") &&
        value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );
};

export const filterstorage = (data: Array<any>, searchText: string) => {
  const convertPersianToArabic = (text) => {
    return text.replace(/ی/g, "ي").replace(/ک/g, "ك");
  };

  const convertedSearchText = convertPersianToArabic(searchText.toLowerCase());

  return data.filter((paymentStatus) => {
    const item = paymentStatus.item;

    if (!item) {
      return false;
    }

    return Object.values(item).some((value) => {
      if (typeof value === "string" || typeof value === "number") {
        const convertedValue = convertPersianToArabic(
          value.toString().toLowerCase()
        );
        return convertedValue.includes(convertedSearchText);
      }
      return false;
    });
  });
};
