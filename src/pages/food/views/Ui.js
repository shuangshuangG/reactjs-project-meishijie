import { connect } from 'react-redux'

import Food from './food'

import { getData } from '../actions'

const mapState = (state) => {
    // console.log(state)
    return {
        data: {
            bannerData: state.food.data.bannerData,
            itemData: state.food.data.itemData,
            listData: state.food.data.listData
        }
    }
}

const mapDispatch = (dispatch) => {
    return {
        getBannerData() {
            dispatch(getData())
        }
    }
}

export default connect(mapState, mapDispatch)(Food)