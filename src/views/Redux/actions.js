import { SET_NAME, IS_LOADING} from './constants';

export function setName (newName) {
    return (
        {type:SET_NAME, name: newName}
    )
}

export function isLoading(Loading) {
    return (
        {type:IS_LOADING,loading: Loading}
    )
}