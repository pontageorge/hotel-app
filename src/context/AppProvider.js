import React, { useReducer } from "react";
import { AppContext } from "./appContext";
import PropTypes from "prop-types";

//---Actions------------------------------------------------------------------------------

import * as hotelsActions from "./actions/hotelsActions";

//---Reducers-----------------------------------------------------------------------------

import { hotelsReducer } from "./reducers/hotelsReducer";

function AppProvider({ children }) {
  const [hotels, dispatchHotels] = useReducer(hotelsReducer);

  const appContextValue = {
    hotels: hotels,
    getHotels: () => hotelsActions.getHotels(dispatchHotels),
  };

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.object,
};

export default AppProvider;
