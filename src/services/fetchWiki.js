import axios from 'axios'

export const fetchWiki = async (query, limit) => {
    if(!query) return []

    const response = await axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}&limit=${limit}`)

    const parsedResponse = []

    for(let i=0; i < response?.data[1].length; i++){
        parsedResponse.push({
            id: response.data[3][i],
            label: response.data[1][i]
        })
    }

    return parsedResponse
}