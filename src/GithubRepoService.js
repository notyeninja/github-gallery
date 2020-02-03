import axios from 'axios';
/**
 *  A abstraction over axios.
 *  This way we can add auth tokens and keep the code in one place.
 * TODO: Integrate the config constant so that we can extract out the 
 * API urls.
 */
function GitHubRepoService(){

    const baseUrl = 'https://api.github.com/search/repositories'

    async function searchRepo(searchParam){

        const response = await axios.get(`${baseUrl}?q=${searchParam}`);
        const items = [...response.data.items];
        const repoList = [];
        
        items.forEach((item) => {
            let temp = { 
                id:item.id,
                name:item.name,
                description:item.description,
                repoHome:item.html_url,
                avatar:item.owner.avatar_url,
                repoSize:item.size,
                forks:item.forks,
                likes:item.stargazers_count
            };
            repoList.push(temp);
        });

       return repoList;
    }
    return{
        searchRepo:searchRepo
    }
}

export default GitHubRepoService();