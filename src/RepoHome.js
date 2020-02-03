import React, { useState } from 'react';
import RepoInfoCard from './RepoInfoCard';
import repoService from './GithubRepoService';
import Search from './Search';

/**
 * Component for searching and displaying repositories.
 */
function RepoHome() {
    const [repoList, setRepoList] = useState([]);

    async function searchRepository(searchTerm){
        const result = await repoService.searchRepo(searchTerm);
        setRepoList(result);
    }

    /** TODO: Convert this into a Redux pattern when time permits. */
    function updateLikes(repoId,change){
        debugger;
        let repo = findRepo(repoId);
        if( repo !== null){
            let newRepo = { ...repo };
            newRepo.likes += change;
            replaceRepo(repo,newRepo);
        }
    }

    function findRepo(repoId){
        let repo = repoList.find((repo) => repo.id === repoId);
        if(!repo) return null;

        return repo;
    }

    function replaceRepo(oldValue, newValue){
         let indx = repoList.findIndex((v) => v.id === oldValue.id);
         if(indx !== -1){
             repoList.splice(indx,1);
             repoList.splice(indx,0,newValue);
             let newList = [...repoList];
             setRepoList(newList);
         }
    }

    return (
        <div style={{marginTop:40}} className="container">
               <Search onSearchClick={searchRepository}/>
               {
                   repoList.length === 0? (
                       <h6 className="is-size-6 has-text-grey">No Repositories Found.</h6>
                   ):(
                       repoList.map((item) => (
                           <RepoInfoCard changeLikes={updateLikes} item={ item } key={item.id}/>
                       ))
                   )
               }
        </div>
    );
}

export default RepoHome;