import store from './redux/store'

describe('Mission state test', () => {
    it('Missions should initially be an empty array', () => {
        const state = store.getState().mission
        expect(state.mission).toEqual([]);
    })
})
