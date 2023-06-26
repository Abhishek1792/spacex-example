import { useCallback, useEffect, useState } from 'react';
/** import react */
import { useLazyQuery } from '@apollo/client';
/**import appolo query  */
import { useSelector, useDispatch } from 'react-redux'
import { setLounchData } from '@src/redux/actions'
/** import redux tools */

const launchLatest = props => {
    const { query } = props;
    const [currentPage, setCurrentPage] = useState(1)
    const [runQuery, { data, loading, error }] = useLazyQuery(query)

    const lounchData = useSelector((state: RootState) => state.launches.lounchData)
    const dispatch = useDispatch()

    /**
     * reset data while initial render
     */
    useEffect(() => {
        dispatch(setLounchData([]))
    }, [])

    /**
     *  Call query and fetch new data
    */
    useEffect(() => {
        runQuery({
            variables: {
                limit: 10 * currentPage,
                offset: 0
            }
        })
    }, [currentPage])

    /**
    *  Handle data and store in redux storage
    */
    useEffect(() => {
        if (data?.launches) {
            dispatch(setLounchData([...lounchData, ...data?.launches]))
        }
    }, [data])

    /**
     *  Handle pagination and lazy loading
    */
    const handleLoadmore = useCallback(() => {
        if (lounchData.length > 0) {
            setCurrentPage(currentPage + 1)
        }
    }, [currentPage, lounchData])

    /**
     *  return object from custom controller
    */
    return {
        data,
        loading,
        error,
        lounchData,
        handleLoadmore,
    }
}
export default launchLatest