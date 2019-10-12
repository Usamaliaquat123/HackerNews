const Api = {
    _base : `https://hacker-news.firebaseio.com/`,
    _call : (methods, parameters) => {
        return new Promise(async(resolve,reject) => {
            fetch(`${Api._base} v0/ ${methods}.json`).then(resp => {
                resp.json().then(async jsonResp => {
                    console.log(resp)
                })
            })
        })
    },


    topStoriesIds : topstories => {return Api._call('topstories',{})}
    

    
}





export default Api