/*GraphQL*/
export const getMenuQuery = `query getMenu($handle: string) {
        menu (handle: $handle){
            items {
                title
                url
            }
        }
    }`;
