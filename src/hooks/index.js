import { useState, useEffect, useCallback } from 'react'
import { useQuery } from 'react-query'

import { fetchWiki } from '../services/fetchWiki'
import { fetchWikiKey } from '../utils/queryKeys';

export const useSearch = (query = "", limit = 10) => {
    const { data: articles, isLoading, error, status } = useQuery([fetchWikiKey, query, limit], () => fetchWiki(query, limit))

    return { articles: !!articles ? articles : [], status, isLoading, error }
}

export const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
} 