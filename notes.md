//REVIEW
    camelCasing the names of the paths and in all classNames is lacking.  Let's be more consistent with this.  Good habits are good to get into.
// REVIEW
  AllResults needs to return Results as a map. This will then allow a single show click.  should be names Results that return shows.map(result => { <Result />}). Then Result can push to the single show when clicked. 
// NOTE 
    Let's think about making this look simpler - let's delete all components and routes that are not built at this time, and work on one component until perfect, then build the next logical component per our plan
// NOTE
    Quick review of the Redux Hooks can make our actions and reducer files much simpler.  I would like to take on the project of refactoring the Redux store using Redux hooks.
// NOTE 
    If you had a chance to watch the SnapChat clone build video I shared, you will see that there is a really good class naming method = BEM.  Also, that guy has a great idea of creating a css file for each component file.  This will give you a much easier access to go to each component and style it.  There may be a lot of styles that you'll be able to simply plug n play.
