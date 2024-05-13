import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await axios.get('https://cloud.codesupply.co/endpoint/react/data.json');
                if(isMounted)
                setData(response.data);
            } catch (err) {
                if(isMounted)
                setError(err.message);
            } finally {
                if(isMounted)
                setLoading(false);
            }
        };

        fetchData();

        return ()=>{
            isMounted = false;
        }
    }, []);

    return { data, loading, error };
};

export default useGetData;
