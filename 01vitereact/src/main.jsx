import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){

    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

/*const ReactElement={
    type:'a',
    props: {
          href:'https://google.com',
          target: '_blank'
    },
    children:'click me to visit'
}
*/
const anotherElement= (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser="Chai aur Anuj"

const ReactElement= React.createElement(
'a',
{
    href:'https:/google.com', target: '_blank'
},
'Click me to visit google',
anotherElement

)

ReactDOM.createRoot(document.getElementById('root')).render(
    ReactElement)
