import React from "react";
import axios from "axios";
import {ApiContextType} from "../types/Context";

const ApiContext = React.createContext<ApiContextType>({
    apiInstance: axios.create()
});

/**
 * Provider function for ApiContext
 * @param props
 * @constructor
 */
export function ApiProvider(props: { children: React.ReactNode }) {
    let apiInstance = axios.create({
        baseURL: 'https://api.flickr.com/services/rest/',
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            format:"json",
            nojsoncallback:1
        }
    })
    apiInstance.defaults.headers.common['Accept'] = 'application/json';
    return (
        <ApiContext.Provider value={{
            apiInstance
        }} {...props} >

        </ApiContext.Provider>
    )
}

/**
 * Function which return APiContext
 */
export function useApi() {
    const context = React.useContext(ApiContext);
    if (context !== undefined) {
        return context;
    }
    throw new Error("useApi must be used in ApiProvider");
}