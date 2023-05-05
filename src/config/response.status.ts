export class SuccesResponse{
statusCode:number
responseValue:any
constructor(statusCode,responseValue){
    this.statusCode = statusCode
    this.responseValue = responseValue
}

}