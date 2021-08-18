import React from 'react'

const array_from_api_users = [
    {
        name: 'Postulante 1',
        main_tech: ['JS', 'Java']
    },
    {
        name: 'Postulante 2',
        main_tech: ['JS', 'Java', 'Python']
    }
]

const ECMAScript6Two = () => {

    const [state, setstate] = useState(array_from_api_users)

    const addShowAttribute = () => {
        let add = state.push({ show_info: false })
    }


    return (
        <div>

        </div>
    )
}

export default ECMAScript6Two
