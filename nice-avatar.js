const https = require('https');

module.exports = ({key,size=250,quality=0.92,identifyField='email'})=>{
    
    return{

        genereate:(identify)=>{
            return new Promise((resolve,reject)=>{
                https.get('https://api.niceavatar.com/api/c/'+key+'/'+identify, (resp) => {
                    // The whole response has been received. Print out the result.
                    resp.on('end', () => {
                      return resolve(data)
                    });
                  
                  }).on("error", (err) => {
                    return reject(err);
                  });      
            })


        },
        middleware:(req,res,next)=>{
            let identify = req.get(identifyField);
            https.get('https://api.niceavatar.com/api/c/'+key+'/'+identify, (resp) => {
                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    req.body.avatar = data;
                    return next()
                });
                
            });      
        }
    }
}