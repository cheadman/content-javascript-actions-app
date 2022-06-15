const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')


const hitExample = async () => {
    try{
        const res = await axios.get('https://example.com')
        return res.data
    }catch(error){
    console.error(error);
  }
}

const main = async () => {
    try {
        const who = core.getInput('who');
        console.log(`Hello ${who}!`)
        const time = (new Date()).toTimeString()
        core.setOutput('time', time)
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`)
        const example = await hitExample()
        core.setOutput('example', JSON.stringify(example))
    } catch(error) {
        core.setFailed(error.message)
    }
}

main()