import {createSlicer} from '@reduxjs/toolkit';

const loaderSlice = createSlicer({
    name: 'loader',
    initialState: {
        loader: false
    },
    reducers: {
        showLoader: (state) => {
            state.loader = true;
        },
        hideLoader: (state) => {
            state.loader = false;
        }
    }
});

export const {showLoader,hideLoader} = loaderSlice.actions;
export default loaderSlice.reducer;