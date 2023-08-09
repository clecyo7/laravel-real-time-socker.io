import Vue from 'vue'
import Bus from './bus'

window.Echo.channel('laravel_database_post-created')
            .listen('PostCreated', (e) => {
                console.log(e.post)
                Bus.$emit('post.created', e.post) //emitir um evento

                Vue.$vToastify.success(`Título do post ${e.post.name}`, 'Novo Post') // notificação de um novo post
            })



