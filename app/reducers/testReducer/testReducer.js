import * as TEST from '../../actions/contents/test';

let TestReducer = (state = {
    className: "a_btn bg_success",
    btnName: "test"
}, action) => {
    switch (action.type) {
        case TEST.SHOW_SOMETHING:
            console.log(TEST.SHOW_SOMETHING)
            return Object.assign({}, state, {
                className: "a_btn bg_emphasize",
                btnName: "emphasize"
            });
        case TEST.SHOW_SOMETHING2:
            console.log(TEST.SHOW_SOMETHING2)
            return Object.assign({}, state, {
                className: "a_btn bg_caveat",
                btnName: "caveat"
            });
        default:
            return state;
    }
};
export default TestReducer;