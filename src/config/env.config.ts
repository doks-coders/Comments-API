export const globalKeyVariables =()=>({
        JWT_KEY : process.env.DB_SECRETKEY,
        AUTH_EXPIRY:'10m',
        SEND_GRIDKEY:process.env.SENDGRIDKEY
})
      
   
