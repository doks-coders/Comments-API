export const PASSWORD_CONFIG = {
    PASSWORD_RULE: 'Password Should have a symbol, a capital letter, a lowercase letter and a number'
}



export enum ERROR {
    ITEM_UNAVAILABLE ='This item cannot be found',
    CONFLICT_MESSAGE = 'duplicate key value violates unique constraint',
    EMAIL_CONFLICT_RESPONSE = 'There appears to be a similiar email, please change it',
    PASSWORD_MISMATCH_RESPONSE = 'Your passwords do not match',
    PASSWORD_VALIDATION_ERROR = "Password Should have a symbol, a capital letter, a lowercase letter and a number",
    PASSWORD_INCORRECT = 'Your password is incorrect',
    UNAUTHORIZED_REQUEST = 'You are not authorized to make this request',
    EMAIL_UNAVAILABLE = 'Your email cannot be found',
    EMAIL_UNAUTHORIZED = 'Your email is not associated with this resource',
    USER_UNAVAILABLE = 'This user cannot be found',
    UNVERIFIED_ACCOUNT = 'Your account has not been verified',
    EMAIL_SERVICE_FAILED = 'Internal Email Service Failed',
    SAVE_ERROR = 'Saving user to database has failed',
    JWT_EXPIRED = 'Your verification link has expired',
    JWT_ERROR = 'There is an internal error with the JWT',
    REMOVE_SLASH_ERROR = 'Remove the slash at the end of your url',
    DATABASE_WRITE_FAILED = 'Database write failed',
    INCORRECT_URL = 'frontend_verify_emailLink must be a URL address',
    NOT_FOUND = 'This resource cannot be found'

}


export const ERROR_NAMES = {
    100: 'Continue',
    101: 'Switching protocols',
    102: 'Processing',
    103: 'Earlyhints',
    200: 'Ok',
    201: 'Created',
    202: 'Accepted',
    203: 'Non authoritative information',
    204: 'No content',
    205: 'Reset content',
    206: 'Partial content',
    300: 'Ambiguous',
    301: 'Moved permanently',
    302: 'Found',
    303: 'See other',
    304: 'Not modified',
    307: 'Temporary redirect',
    308: 'Permanent redirect',
    400: 'Bad request',
    401: 'Unauthorized',
    402: 'Payment required',
    403: 'Forbidden',
    404: 'Not found',
    405: 'Method not allowed',
    406: 'Not acceptable',
    407: 'Proxy authentication required',
    408: 'Request timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length required',
    412: 'Precondition failed',
    413: 'Payload too large',
    414: 'Uri too long',
    415: 'Unsupported media type',
    416: 'Requested range not satisfiable',
    417: 'Expectation failed',
    418: 'I am a teapot',
    421: 'Misdirected',
    422: 'Unprocessable entity',
    424: 'Failed dependency',
    428: 'Precondition required',
    429: 'Too many requests',
    500: 'Internal server error',
    501: 'Not implemented',
    502: 'Bad gateway',
    503: 'Service unavailable',
    504: 'Gateway timeout',
    505: 'Http version not supported'
}
export enum SUCCESS {
    REPLY_CREATED = 'Reply Created Successfully',
    ITEM_CREATED = 'Item Created Successfully',
    COMMENT_CREATED = 'Comment Created Successfully',
    ACCOUNT_CREATED = 'Account Created Successfully',
    SUCCESS_LOGIN = 'Login Success',
    FORGOT_PASSWORD_SUCCESS = 'Forgotten Password Link Sent Successfully',
    PASSWORD_RESET_SUCCESS = 'Password Changed Successfully',
    AUTHORISED_PASSWORD_RESET = 'You are authorised to change your password',
    VERIFIED_ACCOUNT_SUCCESS = 'Your account has been verified'
}

export const ERROR_MESSAGE_RESPONSE = {
    "jwt expired": "Your link has expired",
    "duplicate key value":"Your Email has been used before",
  

}

export const getCustomMessageFromErr = (err):string=>{
     const message:string =err.message
     const keywordsArray:string [] = Object.keys(ERROR_MESSAGE_RESPONSE)
     const indexOfCustomMessage:number =  keywordsArray.findIndex((val)=>message.includes(val))
     return Object.values(ERROR_MESSAGE_RESPONSE)[indexOfCustomMessage]
    
}