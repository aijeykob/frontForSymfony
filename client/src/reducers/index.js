import {
    WRITE_TEXT,
    SET_IMG,
    SET_SHOW_MODAL,
    SET_HERO_FOR_UPDATE,
    CLEAR_PROPS,
    PAGINATION_TO_PROPS
} from '../actions/getBd';

const initState = {
    HeroesArray: [],
    heroImage: null,
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
    heroes: "",
    show: false,
    id: "",
    filename: "",
    totalPages: null,
    currentPage: null,
    method: "post"

};

const reducer = (state = initState, { type, payload, field }) => {

    switch (type) {
        case PAGINATION_TO_PROPS:
            return {
                ...state,
                HeroesArray: payload
            };
        case WRITE_TEXT:
            return {
                ...state,
                [field]: payload
            };
        case SET_IMG:
            return {
                ...state,
                heroImage: payload
            };
        case SET_SHOW_MODAL:
            return {
                ...state,
                show: payload
            };
        case CLEAR_PROPS:
            return {
                ...state,
                heroImage: null,
                nickname: "",
                real_name: "",
                origin_description: "",
                superpowers: "",
                catch_phrase: "",
                heroes: "",
                show: false,
                id: "",
                filename: "",
                method: "post"
            };
        case SET_HERO_FOR_UPDATE:
            return {
                ...state,
                nickname: payload.nickname,
                heroImage: payload.heroImage,
                real_name: payload.real_name,
                origin_description: payload.origin_description,
                superpowers: payload.superpowers,
                catch_phrase: payload.catch_phrase,
                id: payload.id,
                filename: payload.filename,
                method: 'put'
            };
        default:
            return state
    }
};
export default reducer