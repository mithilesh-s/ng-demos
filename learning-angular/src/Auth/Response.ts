export interface ResponseInterface
{
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    registered?:boolean;

}