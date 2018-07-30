import { GET_BANNER,GET_ITEM, GET_RECOMMED, GET_FIND  } from './actionTypes'

const defaultData = {
    // data: []
    data: {
        bannerData: [],
        itemData: [],
        recommedData: [],
        findData: []
    }
}

const getData = (state = defaultData, action) => {
    if(action.type === GET_BANNER) {
        return {
            // data: [...state.data, ...action.data]
            data: Object.assign(state.data, {"bannerData": action.data})
        }
    }
    if(action.type === GET_ITEM) {
        return {
            data: Object.assign(state.data, {"itemData": action.data})
        }
    }
    if(action.type === GET_RECOMMED) {
        return {
            data: Object.assign(state.data, {"recommedData": action.data})
        }
    }
    if(action.type === GET_FIND) {
        return {
            data: Object.assign(state.data, {"findData": action.data})
        }
    }
    return state
}

export default getData