export const callCustomiser = data => {
    return {
        type: 'CUSTOMISE',
        addOns: data
    }
}

export const setUserData = data => {
    return {
        type: 'SET-UDATA',
        uData: data
    }
}

export const setRestaurantData = data => {
    return {
        type: 'SET-RDATA',
        rData: data
    }
}