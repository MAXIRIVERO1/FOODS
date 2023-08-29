

export const validate=(recipe)=>{

    let error = {};

    if (!/^[A-Za-z\s]+$/.test(recipe.title)) {
      error.title = "just should use letters";
    }
  
    if (!/^https?:\/\/\S+$/.test(recipe.image)) {
      error.image = "should be an URL";
    }
  
    if (!Number(recipe.healthScore) || recipe.healthScore < 0 || recipe.healthScore > 100) {
      error.healthScore = "the healthscore should be between 0 and 100";
    }
  
    if (recipe.summary.length < 30) {
      error.summary = "the summary should have more than 30 letters";
    }
  
    if (recipe.steps.length < 30) {
      error.steps = "the steps should have more than 30 letters";
    }
  
    if (recipe.diet.length === 0) {
      error.diet = "select 1 diet at least";
    }
  
    return error;
  };