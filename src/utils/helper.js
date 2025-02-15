export const filterCategories = (arr, type) => {
    const newarr = arr?.filter((item) => item?.category === type);
    return newarr
}

export const filterSubCategories = (arr, type) => {
    const newarr = arr?.find((item) => item?.subcategory === type);
    return newarr?.items
}