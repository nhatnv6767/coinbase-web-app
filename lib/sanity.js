import sanityClient from '@sanity/client'

export const client = sanityClient( {
    projectId: '93jke766', // get from sanity.io/manage/{your_project}
    dataset: 'production',
    apiVersion: '2021-03-25',
    // sanity.io/manage/{your_project} -> API -> Add API token(Editor)
    token: 'skdBAaiqca9OaWT50Q8pbqFZRURPtPo0XcZ3fQV5DjUEChIF0TAOQjgwtoE6ocJEs2xudc9CpX8GnfIbIr4AKO2EtBTexhwHGZ8UcAhku8RoOPcC3cvjGsFMxj7UUtZcSUs4LnBVbucpK3RNz5Br2gid54qnNxuIoCviJGX23LfwzRu9d0LN', 
    useCdn: false,
})