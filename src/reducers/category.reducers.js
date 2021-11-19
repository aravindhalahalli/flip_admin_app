import { categoryConstants } from "../actions/constants";

const initState = {
  categories: [],
  loading: false,
  error: null,
};

const buildNewCategories = (parentId,categories,category)=>{
let mycategories = [];
for (let cat of categories){

// mobileid and parent are matching here..
  if(cat._id === parentId){
    mycategories.push({
      ...cat,
      children:cat.children && cat.children.length > 0 ? buildNewCategories(parentId,[...cat.children,{
        _id:category._id,
        name:category.name,
        slug:category.slug,
        parentId:category.parentId,
        children:category.children
      }],category): []
    })
  }else{
    mycategories.push({
      ...cat,
      children:cat.children && cat.children.length > 0 ? buildNewCategories(parentId,[cat.children],category): []
    })
  }

}
return mycategories;
}

const categoryReducers = (state = initState, action) => {
    console.log(action);
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORIES_REQUEST:
        state={
            ...state,
            loading:true
        }
        break;
    case categoryConstants.ADD_NEW_CATEGORIES_SUCCESS:
        const category = action.payload.category;
        const updatedCategories = buildNewCategories(category.parentId,state.categories,category);
        console.log("Updated Categoies", updatedCategories)
        state = {
            ...state,
            categories:updatedCategories,
            loading:false
        }
        break;
    case categoryConstants.ADD_NEW_CATEGORIES_FAILURE:
        state={
            ...initState
        }
        break;
    default:
      return state;
  }
  return state;
};

export default categoryReducers;
