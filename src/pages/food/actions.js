import { GET_BANNER, GET_LIST, GET_ITEM } from './actionTypes'

export const bannerData = (data) => {
    return {
        type: GET_BANNER,
        data
    }
}

export const listData = (data) => {
    return {
        type: GET_LIST,
        data
    }
}

export const itemData = (data) => {
    return {
        type: GET_ITEM,
        data
    }
}

export const getData = () => {
    return dispatch => {
        fetch('api/msj/food')
        .then(response => response.json())
        .then(res => {
            // console.log(res)
            dispatch(bannerData(res.bannerData))
            dispatch(itemData(res.itemData))
            dispatch(listData(res.listData))
        })
    }
}