Greatings for the day!

Welcome to the password resetr flow Front end is in Main Branch Backend is in Master Branch

Type of request are:

route - /register method - Post
body:{
    {
        firstname: name,
        email: email,
        token:default("")
        password:pwd,
        role:default("user")
        status:default("Not Active")
    }
}

route - /login method -POST
body:{
    email:email,
    password:pwd
}
return response will be a token on successfull login and token document will be updated

route - /confirm/:token method - POST
body: none
The token obtained in params is authenticated and account status modified to "Active"

route - /reset-password method -POST
body:{
    email:email
}
A mail will be sent to the mail ID with a token post verification in database

route - /update-password method - POST
body:{
    token,password
}
post verification of token password will be updated in DB

route - /logout method - POST
 body:{
     email:email
 }
the login token will be cleared on successfull logout

route - /authenticate method - POST
body:{
    token
}
check whether the token is valid or not

Thanks for your time!