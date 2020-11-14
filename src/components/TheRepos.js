import { Divider, Input } from 'antd'
import React from 'react'
import TheRepo from './TheRepo'


const TheRepos = () => {
    return (
        <div>
            <Input placeholder="Find a repository" />
            <Divider/>
        <h3>124 results from public repositories</h3>
        <TheRepo/>
        </div>
    )
}

export default TheRepos
