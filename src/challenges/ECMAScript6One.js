let data = getSomeData( 'http://localhost:8080/api/users' )
data.map( ( el ) => {
    if (el.role === 'admin') {
        let show_info = true
        return show_info
    } 
} )