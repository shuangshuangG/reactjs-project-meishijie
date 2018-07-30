import { connect } from 'react-redux'

import Home from './Home'


import { getBannerData, getFindData } from '../action'

const mapState = (state) => {
    return {
        data: {
            bannerData: state.home.data.bannerData,
            itemData: state.home.data.itemData,
            recommedData: state.home.data.recommedData,
            findData: state.home.data.findData
        }
    }
}

const mapDispatch = (dispatch) => {
    return {
        getData(){
            dispatch(getBannerData())
        },
        getFind(){
            dispatch(getFindData())
        }
    }
}

export default connect(mapState, mapDispatch)(Home)