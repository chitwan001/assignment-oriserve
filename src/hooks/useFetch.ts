import {useEffect, useState} from "react";
import {useApi} from "../context/ApiContext";
import {REQUEST_METHOD} from "../types/Request";
import {AxiosResponse} from "axios";


/**
 * Custom hook which acceps method (GET or POST), relative url to the base url, callback function to be executed on success,
 * parameters to the request, data to be sent if post request, and state variables to be watched
 * @param method
 * @param relativeUrl
 * @param callback
 * @param params
 * @param data
 * @param watchedVariables
 */
export default function useFetch(
    method: REQUEST_METHOD,
    relativeUrl: string, callback: (res: AxiosResponse<any, any>) => any,
    params: any,
    data: any,
    watchedVariables: any[]
) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    const {apiInstance} = useApi();
    const sendQuery = () => {
        setLoading(true);
        switch (method) {
            case REQUEST_METHOD.GET:
                apiInstance.get(relativeUrl, {
                    params
                }).then((res) => {
                    callback(res)
                    setLoading(false)
                }).catch(err => {
                    setError(err)
                })
                break;
            case REQUEST_METHOD.POST:
                apiInstance.post(relativeUrl, data, {
                    params
                }).then((res) => {
                    callback(res)
                    setLoading(false)
                }).catch(err => {
                    setError(err)
                })
                break;
        }
    }

    useEffect(() => {
        sendQuery()
    }, watchedVariables);

    return {loading, error}
}