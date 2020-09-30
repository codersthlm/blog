curl --header "Content-Type: application/json" --request POST --data @testdata/entry1.json http://localhost:8080/api/v1/blogentry
curl --header "Content-Type: application/json" --request POST --data @testdata/entry2.json http://localhost:8080/api/v1/blogentry
curl --header "Content-Type: application/json" --request POST --data @testdata/entry3.json http://localhost:8080/api/v1/blogentry

