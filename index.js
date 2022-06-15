const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios');


const hitExample = async () => {
    try{
        const res = await axios.get('https://example.com')
        return JSON.stringify(res);
    }catch(error){
    console.error(error);
  }
}

try {
    const who = core.getInput('who');
    console.log(`Hello ${who}!`)
    const time = (new Date()).toTimeString()
    core.setOutput('time', time)
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)
    const example = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The response was: ${hitExample()}`)
} catch(error) {
    core.setFailed(error.message)
}