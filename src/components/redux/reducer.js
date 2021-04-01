const initialState = {
    uData: {},
    rData: {},
    customiser: {}
}

export default (state=initialState, action) => {
    switch(action.type)
    {
        case 'CUSTOMISE': 
            return {...state, customiser: action.addOns};
        case 'SET-UDATA':
            return {...state, uData: action.uData};
        case 'SET-RDATA':
            return {...state, rData: action.rData};
        default: return state
    }
}

