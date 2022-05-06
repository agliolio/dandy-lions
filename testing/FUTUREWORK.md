# Changes made 

updated Counter.razor to have id fields for inputs to help differentiate in test automation 

```
<input type="number" id="valueA" min="0" max="100" @bind="valueA" >
+
<input type="number" id="valueB" min="0" max="100" @bind="valueB" >
```

# Future Work 

add more http client mocked unit tests for API Functionality (GET /weatherForecast). I've not done bunit tests before.
But the resource provided were very handy to get started. 


# Suggestions 

specify pre-requisites for dot net sdk and dot net run time versions. 
I spent a fair bit of time initially working out the versions from the logs. 