const core = require('@actions/core')
const github = require('@actions/github')

try {
    const who = core.getInput('who');
    console.log(`Hello ${who}!`)
    const time = (new Date()).toTimeString()
    core.setOutput('time', time)
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)
} catch(error) {
    core.setFailed(error.message)
}