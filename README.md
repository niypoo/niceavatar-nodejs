# niceavatar-nodejs
this repository for serve a niceavatar.com API for node.js

## Getting Started
First you have to signup in <a href="niceavatar.com" target="_blanck">niceavatar.com</a> for get Your project's API Key then you can Configurations this repository

### Installing
Next, you'll need the `nice-avatar` package:
```
npm install nice-avatar --save
```
then you can require `nice-avatar` from any page and configurations & use it like next example

```
const niceAvatar = require('nice-avatar')({key:'Your-NiceAvatar-Key',size:'250',quality:'0.92'})
```
here we require the `nice-avatar` package and pass the `API-Key in key value` and `size` of avatar and its has default value as `250` and last we pass also `quality` of avatar iamage and it has also defualt value as `0.92`

### Usage
now you can use niceavatar `genereate` & `middleware` functions in your back-end so we assuming you will use it in register router , we will use `express.js` in all our example

#### Genereate Function
this function is require one param the `identifier` this is like an ID to avoid any duplicated so you have to give it a unique value like `email`, `ID` or `username` see the next example
```
app.post('/register', (req,res)=>{
    //define the usermail as `identifier`
    let useremail = req.body.email
    //call the genereate function from niceAvatar package
    niceAvatar.genereate('hello')
              .then((avatarImage)=>{
                //print the user avatar image
                console.log(avatarImage);
                //do what do you want here like
                //let userAvatar = avatarImage;                
              })
})
```
this function is promise function you handle next step in `.then` and catch error in `.catch`

#### Middleware Function
this middleware don't require pass `identifier` that read the `identifier` from URL query if we assuming you use `/register` as register route so you have to send the `identifier` with the route like that `/register?identifier=useremail@email.com` see the next example
```
//call middleware function with route
app.post('/register', niceAvatar.middleware, (req,res)=>{
    //print the user avatar image
    console.log(req.avatar)
    //do what do you want here like
    //let userAvatar = req.avatar;    
})
```
after middlware catch the `identifier` it's return the avatar image with `request` in `request.avatar`

### For more
please read the documentations in <a href="niceavatar.com" target="_blanck">niceavatar.com</a>