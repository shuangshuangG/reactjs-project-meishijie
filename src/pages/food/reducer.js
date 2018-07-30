import { GET_BANNER, GET_ITEM, GET_LIST } from './actionTypes'

const defaultData = {
    data: {
        "bannerData": [],
        "itemData": [],
        "listData": []
    }
}

const getFoodData = (state = defaultData, action) => {
    if(action.type === GET_BANNER) {
        return {
            data: Object.assign(state.data, {"bannerData": action.data})
        }
    }
    if(action.type === GET_ITEM) {
        return {
            data: Object.assign(state.data, {"itemData": action.data})
        }
    }
    if(action.type === GET_LIST) {
        return {
            data: Object.assign(state.data, {"listData": action.data})
        }
    }
    return state
}

export default getFoodData