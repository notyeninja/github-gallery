import axios from 'axios';

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