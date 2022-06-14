export const showError = (error, msg) =>{
    if (error) return <div className="alert alert-danger">{msg}</div>
}

export const showSuccess = (success, msg) =>{
    if (success) return <div className="alert alert-sucess">{ msg }</div>
}

export const showLoading = loading =>{
    if (loading) return <div className="alert alert-info">Loading....</div>
}

// login and register part 2