API Tests With Postman 

# Download Postman here:
 https://www.postman.com/downloads/

# Import Collection (JSON) to Postman
JSON is available here: "testing\api-integration-tests\Moula - Weather Forecast APIs.postman_collection.json"

# Select environment to run the requests in the Collection 
e.g. Local

# Run the tests from Postman, OR  
Run one of the requests from the collection using Postman (Select Local as the environment)


# Run from CLI 
1. Install newman 
```
npm install -g newman
```


2. execute command on terminal: 
```
cd testing\api-integration-tests

```

3. execute newman from api-integration-tests directory


```
newman run Moula\ -\ Weather\ Forecast\ APIs.postman_collection.json -k -e Local.json
```

4. report 

You'll get a test report like this: 

```
┌─────────────────────────┬──────────────────┬──────────────────┐
│                         │         executed │           failed │
├─────────────────────────┼──────────────────┼──────────────────┤
│              iterations │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│                requests │                3 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│            test-scripts │                3 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│      prerequest-scripts │                0 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│              assertions │                3 │                0 │
├─────────────────────────┴──────────────────┴──────────────────┤
│ total run duration: 319ms                                     │
├───────────────────────────────────────────────────────────────┤
│ total data received: 1.25kB (approx)                          │
├───────────────────────────────────────────────────────────────┤
│ average response time: 20ms [min: 3ms, max: 53ms, s.d.: 23ms] │
└───────────────────────────────────────────────────────────────┘
```
