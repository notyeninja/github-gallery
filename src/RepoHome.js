import React, { useState } from 'react';
import RepoInfoCard from './RepoInfoCard';
import repoService from './GithubRepoService';

function RepoHome() {

    const [searchTerm, setSearchTerm] = useState("");
    const [repoList, setRepoList] = useState([]);

    async function searchRepository(e){
        e.preventDefault();
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
        <>
                <form>
                    <div className="field has-addons">
                        <div className="control is-expanded">
                            <input className="input" 
                                   type="text" 
                                   value={searchTerm}
                                   onChange={(e) => setSearchTerm(e.target.value)}
                                   placeholder="Find a repository" />
                        </div>
                        <div className="control">
                            <a className="button is-primary"
                                onClick={(e) => searchRepository(e)}>
                                Search
                            </a>
                        </div>
                    </div>
                </form>
               {
                   repoList.length === 0? (
                       <h1 className="title is-text-danger">No Repositories Found.</h1>
                   ):(
                       repoList.map((item) => (
                           <RepoInfoCard changeLikes={updateLikes} item={ item } key={item.id}/>
                       ))
                   )
               }
        </>
    );
}

export default RepoHome;