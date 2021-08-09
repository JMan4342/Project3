import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_THINGSTODO } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const ThingsToDoList = ({ thingsToDos, isLoggedInUser = false }) => {
  const [removeThingsToDo, { error }] = useMutation(REMOVE_THINGSTODO, {
    update(cache, { data: { removeThingsToDo } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeThingsToDo },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveThingsToDo = async (thingsToDo) => {
    try {
      const { data } = await removeThingsToDo({
        variables: { thingsToDo },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!thingsToDos.length) {
    return <h3>No Activities Added Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {thingsToDos &&
          thingsToDos.map((thingsToDo) => (
            <div key={thingsToDo} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{thingsToDo}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveThingsToDo(thingsToDo)}
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

export default ThingsToDoList;
