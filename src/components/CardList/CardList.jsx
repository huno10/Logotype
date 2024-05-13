
import { useMemo } from "react";
import useGetData from "../../hooks/useGetData";
import { useSearchContext } from "../../hooks/useSearchContext";
import { filterDataBySearch } from "../../utils/FilterDataBySearch";
import Card from "./Card/Card";

import styles from './CardList.module.css'

function CardList() {

    const { searchValue } = useSearchContext();
    const { data, error } = useGetData()

    const filteredData = useMemo(() => filterDataBySearch(data, searchValue), [data, searchValue]);

    if (error) {
        return <div>Failed to get data</div>;
    }

    return (
        <ul className={styles.list}>
            {filteredData?.map((item) => (
                <Card key={item.title} data={item} />
            ))}
        </ul>
    )
}

export default CardList;