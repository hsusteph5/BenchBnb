export const signup = (user) => {
    return $.ajax({
        type: "post",
        url: "api/users",
        //key the user: user in an obj
        data: { user } 
    });
}

export const login = (user) => {
    return $.ajax({
        type: "post",
        url: "api/session",
        data: { user } 
    })
}


export const logout = () => {
    return $.ajax({
        type: "delete",
        url: "api/session/"
    })
}