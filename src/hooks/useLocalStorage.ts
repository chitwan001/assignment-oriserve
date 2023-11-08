import {useEffect, useState} from "react";

export default function useLocalStorage() {
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
        const oldTerms = getTermsFromStorage();

        if(oldTerms){
            localStorage.setItem('flickr-searched-terms', oldTerms+','+commaSeperatedTerms);
        }else localStorage.setItem('flickr-searched-terms', commaSeperatedTerms);
        setTerms([...terms, ...value]);
    }

    const getTermsFromStorage = () => {
        return localStorage.getItem('flickr-searched-terms')
    }

    useEffect(() => {
        const commaSeperatedTerms = getTermsFromStorage()
        let terms: string[] = []
        if (commaSeperatedTerms) {
            terms = commaSeperatedTerms.split(',');
        }
        setTerms(terms);
    }, []);

    return {terms, setTermsIntoStorage}
}