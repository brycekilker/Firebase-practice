const initState = {
    projects: [
        { id: 1, title: 'help me get a job', content: 'blah blah blah' },
        { id: 2, title: 'learn react', content: 'blah blah blah' },
        { id: 3, title: 'sharpen up on css', content: 'blah blah blah' }
    ]
}

const projectReducer = (state = initState, action) => {
    //check action type
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created Project', action.project)
            break;
    }
    return state
}

export default projectReducer