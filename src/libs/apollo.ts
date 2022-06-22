import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4op4ko70pbl01xscqx79u5b/master",
  cache: new InMemoryCache(),
});
