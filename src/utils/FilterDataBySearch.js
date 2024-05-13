export function filterDataBySearch(data, searchValue) {
    if (!searchValue) {
        return data;
    }

    const filteredData = data.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(searchValue.toLowerCase());
        const textMatch = item.text.toLowerCase().includes(searchValue.toLowerCase());
        return titleMatch || textMatch;
    });

    return filteredData;
}