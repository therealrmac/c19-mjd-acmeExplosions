# Acme Explosions

*First upload in the master branch, app is running at 95% efficiency*

### Instructions
1. Select one of the options of the on the drop down box.
2. The selected option will then load each of item in all 3 of the JSON files related to it in an asynchronous way.

#### Requirements
>You are going to be creating several JSON files that will be describing all of the explosive products that you sell. You need to use Promises to handle the order of the asynchronous operations needed to load the data.
Create a simple user interface for your product catalog where a user can select a category from a dropdown. When a category is selected, you must use Promises to read, first, from the categories.json to load that array of objects, then load types.json, then products.json.
Once all data is loaded, you need to display the products in a Bootstrap grid. Each product must display the string name of its product type, and product category. Not the integer id value.