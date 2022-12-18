import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './user/user.slice'
import dogReducer from './dog/dog.slice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        dog: dogReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
