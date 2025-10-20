import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from "redux-persist";

const persistConfig = {
    key: "auth", storage, whitelist: ["token"]
}

const persistedAuthReducer = persistReducer(persistConfig, authSlice)
export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer
    }, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store)