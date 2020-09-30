# blog
This is a code demo using Spring Boot, Angular and Typescript.
It is a simple blog that uses Spring REST services and the data is stored in a memory database.


To get started:

Assumptions: You have gradle, git, angular and npm installed in your system.


Checkout the project. From command line run:
```
git clone https://github.com/codersthlm/blog.git
```

Start springboot. From commandline run  (under blog):
```
./gradlew bootRun
```
 Check that it is up and running at http://localhost:8080/actuator/health


Insert some test data. From commandline run  (under blog):
```
./test.bat
```  
  (If you don't use windows or you dont want to run bat files, you can copy the commands from the bat file) 


Start Angular. From commandline (under blog/client/blog) run: 
```
ng serve

```
Navigate your browser to http://localhost:4200