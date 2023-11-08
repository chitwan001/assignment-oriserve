import {useEffect, useState} from "react";

export default function useLocalStorage(key: string) {
    const [terms, setTerms] = useState<string[]>([]);

    const setTermsIntoStorage = (value: string[]) => {
        let commaSeperatedTerms = "";
        value.forEach((val, ind) => {
            if (ind !== value.length - 1) {
                commaSeperatedTerms += val + ","
            } else {
                commaSeperatedTerms += val
            }
        })
        localStorage.setItem(key, commaSeperatedTerms);
        setTerms([...terms, ...value]);
    }

    const getTermsFromStorage = () => {
        const commaSeperatedTerms = localStorage.getItem(key);
        let terms: string[] = []
        if (commaSeperatedTerms) {
            terms = commaSeperatedTerms.split(',');
        }
        setTerms(terms);
    }

    useEffect(() => {
        getTermsFromStorage()
    }, []);

    return {terms, setTermsIntoStorage}
}