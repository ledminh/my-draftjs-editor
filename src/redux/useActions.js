import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

function useActions(actions) {
    const dispatch = useDispatch();
    
    return useMemo(
        () => {
        return bindActionCreators(actions, dispatch);
        }, 
    [actions, dispatch]);
}


// export const useDataLoadActions = () => useActions({initializeData: initializeDataAction,
//     setDataSourceLocal: setDataSourceLocalAction,
//     setDataSourceWP: setDataSourceWPAction,    
// });