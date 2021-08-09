import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_PARK } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const ParksList = ({ parks, isLoggedInUser = false }) => {
  const [removePark, { error }] = useMutation(REMOVE_PARK, {
    update(cache, { data: { removePark } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removePark },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemovePark = async (park) => {
    try {
      const { data } = await removePark({
        variables: { park },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!parks.length) {
    return <h3>No Parks Added Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {parks &&
          parks.map((park) => (
            <div key={park} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{park}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemovePark(park)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default ParksList;
