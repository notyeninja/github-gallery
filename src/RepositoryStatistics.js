import React from 'react';


function RepositoryStatistics({ label, value}) {
    return (
        <div className="level-item has-text-centered">
            <div>
                <p className="heading">{label}</p>
                <p className="subtitle">{value}</p>
            </div>
        </div>
    );
}

export default RepositoryStatistics;