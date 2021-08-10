import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_CAMPGROUND } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const CampgroundList = ({ campgrounds, isLoggedInUser = false }) => {
  const [ { error }] = useMutation(REMOVE_CAMPGROUND, {
    update(cache, { data: { removeCampground } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeCampground },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  // const handleRemoveCampground = async (campground) => {
  //   try {
  //     const { data } = await removeCampground({
  //       variables: { campground },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  if (!campgrounds.length) {
    return <h3>No Campgrounds Added Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {campgrounds &&
          campgrounds.map((campground) => (
            <div key={campground} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{campground}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      // onClick={() => handleRemoveCampground(campground)}
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

export default CampgroundList;
