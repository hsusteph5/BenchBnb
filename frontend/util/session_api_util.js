const signup = (user) => {
    return $.ajax({
        type: "post",
        url: "api/users",
        //key the user: user in an obj
        data: { user } 
    });
}

const login = (user) => {
    return $.ajax({
        type: "post",
        url: "api/session",
        data: { user } 
    })
}


const logout = () => {
    return $.ajax({
        type: "delete",
        url: "/api/session/"
    })
}