import axiosInstance from "../helpers/axios"
import axios from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategory =() => {
    return async dispatch => {
        dispatch({type:categoryConstants.GET_ALL_CATEGORIES_REQUEST})
        const res = await axios.get('/category/getcategory');
        console.log(res);
        if(res.status===200){
            const {categoryList}= res.data;
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload:{categories:categoryList}
            });
            return true;
        }else{
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload:{error:res.data.error}
            });
        }
    }
}

export const addCategory = (form) => {
    return async dispatch => {
        dispatch({type:categoryConstants.ADD_NEW_CATEGORY_REQUEST});
        const res = await axios.post(`/category/create`,form);
        if(res.status === 201){
            dispatch({
                type:categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
                payload:res.data.category
            });
            return true;


            }else{
                dispatch({
                    type:categoryConstants.ADD_NEW_CATEGORY_FAILURE,
                    payload:res.data.error

            });
        }

    }
}

export const updateCategories = (form) => {
    return async dispatch => {
        dispatch({type:categoryConstants.UPDATE_CATEGORIES_REQUEST});
        const res = await axios.post(`/category/update`,form);
        if(res.status === 201){
            dispatch({
                type:categoryConstants.UPDATE_CATEGORIES_SUCCESS
            });
            dispatch(getAllCategory());


            }else{
                dispatch({
                    type:categoryConstants.UPDATE_CATEGORIES_FAILURE,
                    payload:res.data.error

            });
        }

    }
}