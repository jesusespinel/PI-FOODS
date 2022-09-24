const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detail: [],
  pages:1
 
}
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload
      }
    case "GET_TYPES":
      return {
        ...state,
        diets: action.payload
      }
    case "GET_NAME":
      return {
        ...state,
        recipes: action.payload
      }

      
    case "POST_RECIPE":
      return {
        ...state
      }

    case "FILTER_RECIPES_BY_DIETS_TYPES":

      const recipes = state.allRecipes

      const recipesFiltered = action.payload === 'tipos' ? recipes : recipes.filter(el => el.diets.includes(action.payload))


      return {
        ...state,
        recipes: recipesFiltered
      }



    case "ORDER_BY_NAME":

      const sortName = action.payload === 'asc' ? state.recipes.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1
        }
        if (b.name.toLowerCase() > a.name.toLowerCase()) {
          return -1
        }
        return 0
      }) :
        state.recipes.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1
          }
          return 0
        })
      return {
        ...state,
        recipes: action.payload === 'All' ? state.recipes : sortName
      }

    case "ORDER_BY_SCORE":
      const sortScore = action.payload === 'min' ? state.recipes.sort(function (a, b) {
        if (a.healthScore > b.healthScore) {
          return 1
        }
        if (b.healthScore > a.healthScore) {
          return -1
        }
        return 0
      }) :
        state.recipes.sort(function (a, b) {
          if (a.healthScore > b.healthScore) {
            return -1
          }
          if (b.healthScore > a.healthScore) {
            return 1
          }
          return 0
        })
      return {
        ...state,
        recipes: action.payload === 'default' ? state.recipes : sortScore
      }
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload
      };
    case "CLEAN_FILTER":
      return {
        ...state,
        recipes: action.payload,
        detail: action.payload
      }
    
      case "SAVE_PAGE":
        return {
          ...state,
          pages: action.payload
        }

      case "FILTER_BY_ORIGEN":
      const filterByOrigen = action.payload === "created"? state.allRecipes.filter(el=> el.createdInDb): state.allRecipes.filter(el=>!el.createdInDb)

      return {
        ...state,
        recipes: filterByOrigen
      }

    default:
      return { ...state };
  }

}








export default rootReducer;