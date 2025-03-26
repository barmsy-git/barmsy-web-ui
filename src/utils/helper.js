export const filterCategories = (arr, type) => {
    const newarr = arr?.filter((item) => item?.category === type);
    return newarr
}

export const filterSubCategories = (arr, type) => {
    const newarr = arr?.find((item) => item?.subcategory === type);
    return newarr?.items
}



export const formatCurrency = (value, currency = "USD", locale = "en-US") => {
    if (!value) return "";
  
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(value);
  };

  export const formatHumanDate = (isoDateString) => {
    const date = new Date(isoDateString);
    
    const options = {
        weekday: 'long', // e.g., "Tuesday"
        year: 'numeric', // e.g., "2025"
        month: 'long', // e.g., "April"
        day: 'numeric', // e.g., "8"
        hour: '2-digit', // e.g., "06"
        minute: '2-digit', // e.g., "12"
        second: '2-digit', // e.g., "15"
        timeZoneName: 'short' // e.g., "GMT"
    };

    return date.toLocaleString('en-US', options);
}
