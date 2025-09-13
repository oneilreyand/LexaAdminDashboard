import axios from 'axios'
import { TEST_REDUX, FETCH_SOME_DATA } from './index'

export const test = (payload) => {
  return {
    type: TEST_REDUX,
    payload
  }
}

export const fetchSomeData = (page) => {
  return async (dispatch) => {
    const onSuccess = (res) => {
      dispatch({
        type: FETCH_SOME_DATA,
        payload: res
      })
    }

    const onError = (err) => {
      console.log(err)
    }

    try {
      const data = await axios.get(
        ` https://randomuser.me/api/?page=${page}&results=10&seed=abc`
      )
      onSuccess(data.data.results)
    } catch (error) {
      onError(error)
    }
  }
}
