/** import react */
import { useCallback, useEffect, useState } from 'react';
/**import appolo query  */
import { useLazyQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux'
/* import redux actions */
import {setLounchDatail } from '@src/redux/actions'

const launchDetail = props => {
    const { query } = props;
    const [runQuery, { data, loading, error }] = useLazyQuery(query)

    const{ lounchId, lounchDetail} = useSelector((state: RootState) => state.launches)
    const dispatch = useDispatch()
    /**
     * Launch detail query call
     */
    useEffect(() => {
        runQuery({
            variables: {
                launchId: lounchId
            }
        })
    }, [lounchId])
    /**
     * handle appolo query data in redux
     */
    useEffect(() => {
        dispatch(setLounchDatail(data?.launch))
    }, [data])

    /**
     * return object from custom controller 
     */

    return {
        data,
        loading,
        error,
        lounchDetail
    }
}
export default launchDetail