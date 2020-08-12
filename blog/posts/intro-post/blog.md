As Mandarine is close to releasing its version **2.0.0**, it is fair to say that Mandarine is one of the few modules (specially frameworks) that are production-ready in the [Deno](https://deno.land) community. While it is true that Mandarine's team is still working on refactoring part of the core to increase performance & include the addition of highly requested features, we can say Mandarine can cover many use cases at both a personal & enterprise scale.

## 2.0.0
Mandarine 2.0.0 will probably be its biggest release since version 1.0.0.  
2.0.0 will bring many improvements in both sections: feature-related & performance-related.  
While there is not an specific date of when 2.0.0 will be released, we can expect it to land at the end of August 2020 or the first two weeks of september.

## What's coming
Here is a list of what you can expect in Mandarine 2.0.0.  

### MVC: 
- Authentication
    - This will probably be the _biggest feature_ 2.0.0 is bringing. The concept behind this feature is to provide the creation & automation of endpoints for both logging and registering. Mandarine will be capable of handling all the logic behind a authentication infrastructure where knowing if a request (user) is authenticated will be as simply as a boolean value. Access to the current user in the request will also be available mainly through the use of Decorators.
- Custom Decorators
    - Mandarine will allow you to create custom decorators that you will be able to use in your HTTP handlers. These custom decorators will have access to the context of the incoming request.
- Exception filters
    - This feature will allow overriding exception filters in the MVC core, thus providing customization for HTTP exceptions.
- Pipes
    - This feature will allow transforming incoming data into custom types (or objects). This is significant because instead of calling a parser from inside the method handler, transformation will be now available at a global context.
- Guards
    - This feature will allow the creation of _guards middleware_ which will work as a type of [Mandarine-powered middleware](https://www.mandarinets.org/docs/master/mandarine/custom-middleware) but now with only one method to be performed available at a class & method level.

### Core
- CRON Jobs
    - Mandarine will be capable of executing CRON jobs from Mandarine-powered components.
- Performance improvement
    - One of the biggest performance improvement we will have is the way Mandarine interprets a Middleware. As of writing this post, Mandarine saves the list of Middleware created by the developer in a container available in the global context, then at request time, Mandarine retrieves all the middleware available from the container & then it decides whether the middleware should be executed in the current request. This process is rather overwhelming in both terms of lines of code & execution. _2.0.0_ will change this by attaching all middleware to its matching routes at Mandarine Compile Time, then, when a request is received, Mandarine will not have to request the Middleware container as it already knows what middleware match the current route in the request.
    - Other performance improvements
    
If you have any comment or feedback, we will appreciate knowing it. Feel free to share it on the [Mandarine discord](https://discord.gg/qs72byB) or [Mandarine Github issues](https://github.com/mandarineorg/mandarinets/issues)