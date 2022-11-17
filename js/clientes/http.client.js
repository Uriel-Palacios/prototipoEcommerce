class Http {

    /* GET */
    async get(url, id) {
        try {
            const respuesta = await fetch(url + (id || ''), { 
                method: 'get'
             }
             )
            // console.log(respuesta)
            const resultado = await respuesta.json()
            // console.log(resultado)                
            return resultado
        

        } catch (error) {
            console.error('ERROR GET', error)
        }
    }

    /* POST */

    async post(url, dato) {
        try {

            const respuesta = await fetch(url, {
                method: 'post',
                body: JSON.stringify(dato),
                headers: { 'content-type': 'application/json' }
            })

            const resultado = await respuesta.json()

            return resultado
            
        } catch (error) {
        console.error('ERROR POSTA', error)        
        }
    }

    /* PUT */

    async put(url, id, dato) {
        try {

            const respuesta = await fetch(url + id, {
                method: 'put',
                body: JSON.stringify(dato),
                headers: { 'content-type': 'application/json' }
            })
            
            const resultado = await respuesta.json()

            return resultado

        } catch (error) {
            console.error('ERROR PUT', error)
        }


    }

    /* DELETE */
    async del(url, id) {

        try {
            
            const respuesta = await fetch(url + id, {
                method: 'delete'
            })

            const resultado = await respuesta.json()

            return resultado

        } catch (error) {
            console.error('ERROR DELETE', error)
        }
    }

}

const http = new Http()