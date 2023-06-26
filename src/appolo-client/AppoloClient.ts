import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        console.log("graphQLErrors", graphQLErrors)
    }
    if (networkError) {
        console.log("networkError", networkError)
        var str_pos = networkError.toString().indexOf("400");
        if (str_pos > -1) {
            // secureLocalStorage.clear()
        }
    }
});
const httpLink = createHttpLink({ uri: 'https://spacex-production.up.railway.app' });
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            // authorization: token?.toString()?.length ? token : '',
        }
    }
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, authLink, httpLink]),
});