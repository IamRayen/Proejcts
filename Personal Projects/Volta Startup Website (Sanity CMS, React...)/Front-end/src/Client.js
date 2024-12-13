import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId:"ziue68m6",
    dataset: "production",
    apiVersion: "2022-03-04",
    useCdn: true,
});

export default client
