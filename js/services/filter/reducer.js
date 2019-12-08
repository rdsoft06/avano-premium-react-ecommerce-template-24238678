import {
    SHOW,
    SORT_BY,
    PAGE,
    CATEGORY,
    ADD_BRAND,
    REMOVE_BRAND,
    ADD_COLOR,
    REMOVE_COLOR,
} from "./actionTypes";

export default function filterReducer(state = {
    show: 16,
    page: 1,
    sort_by: 1,
    category: 0,
    brands: [],
    colors: [],
}, action) {
    switch (action.type) {
        case SHOW:
            return { ...state,
                show: parseInt(action.value),
                page: 1
            }
        case SORT_BY:
            return { ...state,
                sort_by: parseInt(action.value),
                page: 1
            }
        case PAGE:
            window.scrollTo(0, 0);
            return { ...state,
                page: parseInt(action.value)
            }
        case CATEGORY:
            return { ...state,
                category: parseInt(action.value),
                page: 1
            }
        case ADD_BRAND:
            return { ...state,
                brands: [...state.brands, parseInt(action.value)],
                page: 1
            }
        case REMOVE_BRAND:
            return { ...state,
                brands: state.brands.filter(brand => brand !== parseInt(action.value)),
                page: 1
            }
        case ADD_COLOR:
            return { ...state,
                colors: [...state.colors, parseInt(action.value)],
                page: 1
            }
        case REMOVE_COLOR:
            return { ...state,
                colors: state.colors.filter(color => color !== parseInt(action.value)),
                page: 1
            }

        default:
    }
    return state;
}