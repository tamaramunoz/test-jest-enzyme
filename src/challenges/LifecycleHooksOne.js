import React, { useEffect, useState } from 'react';

const LifecycleHooksOne = () => {

    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        const completedForm = async () => {
            let info = await getSomeData('http://localhost:8080/api/users')
            info = await info.json()
            info.map((el) => {
                if (el.is_form_completed === false) {
                    setShowMessage(false)
                } else {
                    setShowMessage(true)
                }
            })
        }
        completedForm()
    }, [])

    return (
        <div>
            {
                showMessage ? <div>Formulario completado correctamente!</div> : null
            }
        </div>
    )
}

export default LifecycleHooksOne;
