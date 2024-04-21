import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import User from './User'



const Search = ({ startSearch, username, user, setUsername }) => {

    const handleChange = ((e) => {
        setUsername(e.target.value)

    })

    return (
        <div style={{width: '25rem'}} className='container'>
            <Form className="d-flex mt-3">
                <FormControl
                    type="text"
                    placeholder="Search Github User"
                    className="me-2"
                    aria-label="Search"
                    value={username}
                    onChange={handleChange}

                />
                <Button variant="outline-success " className= 'btn btn-outline-success' onClick={() => { startSearch() }}>Search</Button>

            </Form>
            {user && <User user={user} />}
        </div>
    )
}

export default Search
