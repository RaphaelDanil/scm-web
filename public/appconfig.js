const config = {
    dev : {
        url: "http://localhost:5187/api/"
    },

    prod : {
        url : "http://localhost:5187/api/"
    }
}

const develop = true

const api = develop ? config.dev : config.prod

export default api