import jwt_decode  from 'jwt-decode';

export const authenticate = (token,cb) =>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jtw',JSON.stringify(token));
        cb();
    }
}

export const isAuthenticated = () =>{
    if(typeof window === 'undefined') return false;
    if(localStorage.getItem('jwt')){
        const {exp} = jwt_decode(JSON.parse(localStorage.getItem('jwt')));
        return (new Date).getTime() < exp*1000;
    }else{
        return false;
    }
}

export const userInfo = () =>{
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const decoded = jwt_decode(jwt);
    return {...decoded,token:jwt}
}

export const  signout = cb =>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt');
        cb();
    }
}